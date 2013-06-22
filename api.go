package api

import (
    "fmt"
    "net/http"
)

func init() {
	http.HandleFunc("/api/newsletter", newsletter)
}

func newsletter(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "newsletter")
}
