package server

import (
	"github.com/gorilla/mux"
	"net/http"
)

var router = mux.NewRouter()

func Init() {
	http.Handle("/", router)
}
