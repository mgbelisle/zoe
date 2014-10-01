package server

import "net/http"

func CronHandler(h http.HandlerFunc) http.HandlerFunc {
	return h
}
