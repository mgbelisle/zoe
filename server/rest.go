package server

import (
	"encoding/json"
	"net/http"
)

type JSONBasic interface{}

type JSONObj map[string]JSONBasic

func (j JSONObj) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	bytes, err := json.Marshal(j)
	if err != nil {
		Error{
			Public:  "Cannot unmarshal JSONObj",
			Private: err.Error(),
		}.ServeHTTP(w, r)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(bytes)
}

type JSONList []JSONBasic

func (j JSONList) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	bytes, err := json.Marshal(j)
	if err != nil {
		Error{
			Public:  "Cannot unmarshal JSONList",
			Private: err.Error(),
		}.ServeHTTP(w, r)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(bytes)
}
