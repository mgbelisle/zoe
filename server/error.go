package server

import (
	"appengine"
	"net/http"
)

type Error struct {
	Status          int
	Public, Private string
}

func (e Error) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	status := e.Status
	if http.StatusText(status) == "" {
		status = http.StatusInternalServerError
	}

	msg := e.Public
	if e.Private != "" {
		msg += "\n" + e.Private
	}
	c := appengine.NewContext(r)
	c.Errorf(msg)

	http.Error(w, e.Public, status)
}
