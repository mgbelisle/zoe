package api

import (
	"appengine"
	"appengine/mail"
	"net/http"
)

func init() {
	http.HandleFunc("/api/newsletter", newsletter)
}

func newsletter(w http.ResponseWriter, r *http.Request) {
	c := appengine.NewContext(r)
	msg := &mail.Message{
		Sender:  "mgbelisle@gmail.com",
		To:      []string{"matthew.belisle@webfilings.com"},
		Subject: "Test",
		Body:    "Hello world",
	}
	err := mail.Send(c, msg)
	if err != nil {
		c.Errorf("Couldn't send email: %v", err)
	}
}
