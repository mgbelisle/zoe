package server

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
	"net/http"
	"strings"
	"time"
)

const eventKind = "Event"

type event struct {
	Key      *datastore.Key     `datastore:"-" json:"-"`
	Title    string             `datastore:"title" json:"title"`
	Image    string             `datastore:"image" json:"image"`
	Start    time.Time          `datastore:"start" json:"start"`
	End      time.Time          `datastore:"end" json:"end"`
	Venue    string             `datastore:"venue" json:"venue"`
	Address  string             `datastore:"address" json:"address"`
	City     string             `datastore:"city" json:"city"`
	State    string             `datastore:"state" json:"state"`
	Zip      string             `datastore:"zip" json:"zip"`
	Country  string             `datastore:"country" json:"country"`
	Location appengine.GeoPoint `datastore:"location" json:"location"`
}

func (e *event) MarshalJSON() ([]byte, error) {
	type eventJSON struct {
		event
		ID       int64     `json:"id"`
		Location []float64 `json:"location,omitempty"`
	}
	j := eventJSON{
		*e,
		e.Key.IntID(),
		nil,
	}
	if l := e.Location; l.Lat != 0 || l.Lng != 0 {
		j.Location = []float64{l.Lat, l.Lng}
	}
	return json.Marshal(j)
}

type npeEvent struct {
	EventId      int64
	EventTitle   string
	HostImageUrl string
	StartDate    npeTime
	EndDate      npeTime
	VenueTitle   string
	Address      *npeAddress
}

func (n *npeEvent) Event(c appengine.Context) *event {
	return &event{
		Key:      datastore.NewKey(c, eventKind, "", n.EventId, nil),
		Title:    n.EventTitle,
		Image: n.HostImageUrl,
		Start:    time.Time(n.StartDate),
		End:      time.Time(n.EndDate),
		Venue:    n.VenueTitle,
		Address:  strings.TrimSpace(n.Address.AddressLine1 + " " + n.Address.AddressLine2),
		City:     n.Address.City,
		State:    n.Address.State,
		Zip:      n.Address.Zip,
		Country:  n.Address.Country,
		Location: appengine.GeoPoint{Lat: n.Address.Latitude, Lng: n.Address.Longitude},
	}
}

func updateEvents(w http.ResponseWriter, r *http.Request) {
	// Gets events from NPE and datastore concurrently
	// Then concurrently updates the ones from NPE and deletes the old ones

	c := appengine.NewContext(r)

	npeEventsChan := make(chan []*event, 1)
	dsEventsChan := make(chan []*event, 1)
	errChan1 := make(chan error, 1) // For getting from NPE and putting to datastore
	errChan2 := make(chan error, 1) // For getting from datastore and deleting from datastore

	// Gets events from NPE and datastore concurrently
	// From NPE
	go func() {
		body, err := npeGet(c, "/EventsConfiguration/GetEvents/?IsActive=true")
		if err != nil {
			errChan1 <- err
			return
		}
		npeEvents := []npeEvent{}
		if err = json.Unmarshal(body, &npeEvents); err != nil {
			errChan1 <- err
			return
		}
		events := []*event{}
		for _, e := range npeEvents {
			events = append(events, e.Event(c))
		}
		npeEventsChan <- events
		errChan1 <- nil
	}()
	// From datastore
	go func() {
		q := datastore.NewQuery(eventKind)
		events := []*event{}
		for t := q.Run(c); ; {
			e := event{}
			var err error
			e.Key, err = t.Next(&e)
			if err == datastore.Done {
				break
			} else if err != nil {
				errChan2 <- err
				return
			}
			events = append(events, &e)
		}
		dsEventsChan <- events
		errChan2 <- nil
	}()
	if err := <-errChan1; err != nil {
		Error{
			Public:  "Could not get events from NPE",
			Private: err.Error(),
		}.ServeHTTP(w, r)
		return
	}
	if err := <-errChan2; err != nil {
		Error{
			Public:  "Could not get events from datastore",
			Private: err.Error(),
		}.ServeHTTP(w, r)
		return
	}
	npeEvents := <-npeEventsChan
	dsEvents := <-dsEventsChan

	// Calculates which IDs need to be put and which need to be deleted
	toPutIDs := map[int64]struct{}{}
	toPutKeys := []*datastore.Key{}
	for _, e := range npeEvents {
		toPutIDs[e.Key.IntID()] = struct{}{}
		toPutKeys = append(toPutKeys, e.Key)
	}
	toDeleteKeys := []*datastore.Key{}
	for _, e := range dsEvents {
		if _, ok := toPutIDs[e.Key.IntID()]; !ok {
			toDeleteKeys = append(toDeleteKeys, e.Key)
		}
	}

	// Puts and deletes them concurrently
	go func() {
		_, err := datastore.PutMulti(c, toPutKeys, npeEvents)
		errChan1 <- err
	}()
	go func() {
		errChan2 <- datastore.DeleteMulti(c, toDeleteKeys)
	}()
	if err := <-errChan1; err != nil {
		Error{
			Public:  "Could not put events to datastore",
			Private: err.Error(),
		}.ServeHTTP(w, r)
		return
	}
	if err := <-errChan2; err != nil {
		Error{
			Public:  "Could not delete events from datastore",
			Private: err.Error(),
		}.ServeHTTP(w, r)
		return
	}

	msg := "Updated events from NPE"
	Text(msg).ServeHTTP(w, r)
	c.Infof(msg)
}

func getEvents(w http.ResponseWriter, r *http.Request) {
	c := appengine.NewContext(r)
	q := datastore.NewQuery(eventKind)
	events := JSONList{}
	for t := q.Run(c); ; {
		e := event{}
		var err error
		e.Key, err = t.Next(&e)
		if err == datastore.Done {
			break
		} else if err != nil {
			Error{
				Public:  "Could not get events",
				Private: err.Error(),
			}.ServeHTTP(w, r)
			return
		}
		events = append(events, &e)
	}
	events.ServeHTTP(w, r)
}
