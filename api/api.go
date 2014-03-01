package api

import (
	"appengine"
	"appengine/mail"
	"net/http"
)

func init() {
	http.HandleFunc("/api/newsletter", newsletter)
}

// Sends an email to Zoe that user x wants to recieve newsletters
func newsletter(writer http.ResponseWriter, request *http.Request) {
	if request.Method != "POST" {
		http.Error(writer, "Not using POST", http.StatusMethodNotAllowed)
		return
	}
	context := appengine.NewContext(request)
	email := request.PostFormValue("email")
	if len(email) < 1 {
		http.Error(writer, "No email specified", http.StatusBadRequest)
		return
	}
	msg := &mail.Message{
		Sender:  "mgbelisle@gmail.com",
		To:      []string{"mgbelisle@gmail.com", "cindy@gotozoe.org"},
		Subject: "Newsletter signup",
		Body:    email,
	}
	err := mail.Send(context, msg)
	if err != nil {
		context.Errorf("%v", err)
		http.Error(writer, "Could not send email", http.StatusInternalServerError)
		return
	}
}
