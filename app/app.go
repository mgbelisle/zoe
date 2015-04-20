package app

import (
	"net/http"
	
	"github.com/mgbelisle/zoe/server"
)

func init() {
	http.ListenAndServe("/", server.Routes())
}
