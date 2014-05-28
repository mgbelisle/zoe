zoe
===
This is the ZoeCare website.  It is located at http://gotozoe.org/, owned by [webmaster@gotozoe.org](mailto:webmaster@gotozoe.org).

Tech Stack
----------
* Client
  * [AngularJS](http://angularjs.org/)
  * [Bootstrap](http://getbootstrap.com/)
  * [Bower](http://bower.io/)
  * [Browserify](http://browserify.org/)
  * [Gulp](http://gulpjs.com/)
* Server
  * [AppEngine](https://developers.google.com/appengine/)
  * [Go](http://golang.org/)

Build
-----

Build the app by running `gulp` from the [./client/](./client/) directory.

```sh
npm install
npm install -g gulp
gulp
```

https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started

Deploy
------

Deploy the app to GAE by running `goapp` from the [root](./) directory.

```sh
goapp deploy
```

https://developers.google.com/appengine/docs/go/tools/uploadinganapp#Go_Uploading_the_app