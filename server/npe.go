package server

import (
	"appengine"
	"appengine/urlfetch"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
	"time"
)

const (
	npeAPI       = "https://apiv2.nonprofiteasy.net"
	npeKeyHeader = "APIKey"
)

func npeKeyVal() (string, error) {
	bytes, err := ioutil.ReadFile("npe_key.txt")
	if err != nil {
		return "", err
	}
	return strings.TrimSpace(string(bytes)), nil
}

func npeGet(c appengine.Context, url string) ([]byte, error) {
	client := urlfetch.Client(c)
	req, _ := http.NewRequest("GET", npeAPI+url, nil)
	key, err := npeKeyVal()
	if err != nil {
		return nil, err
	}
	req.Header.Add(npeKeyHeader, key)
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("NPE status (%d) not ok", resp.StatusCode)
	}
	return ioutil.ReadAll(resp.Body)
}

type npeAddress struct {
	AddressLine1 string
	AddressLine2 string
	City         string
	State        string
	Zip          string
	Country      string
	Latitude     float64
	Longitude    float64
}

type npeTime time.Time

// Adds a time zone before parsing time
func (t *npeTime) UnmarshalJSON(bytes []byte) error {
	s := ""
	if err := json.Unmarshal(bytes, &s); err != nil {
		return err
	}
	t2, err := time.Parse(time.RFC3339, s+"Z")
	if err != nil {
		return err
	}
	*t = npeTime(t2)
	return nil
}
