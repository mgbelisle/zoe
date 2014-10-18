package server

import (
	"github.com/gorilla/mux"
	"net/http"
)

var router = mux.NewRouter()

func init() {
	http.Handle("/", router)
	router.HandleFunc("/api/events/", getEvents).Methods("GET")
	router.HandleFunc("/cron/events/", updateEvents).Methods("GET")
}
