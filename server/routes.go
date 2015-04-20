package server

import (
	"net/http"

	"github.com/mgbelisle/zoe/server/_deps/github.com/gorilla/mux"
)

// Routes is the routes for the app
func Routes() http.Handler {
	router := mux.NewRouter()

	router.HandleFunc("/api/events/", getEvents).Methods("GET")
	router.HandleFunc("/cron/events/", updateEvents).Methods("GET")

	return router
}
