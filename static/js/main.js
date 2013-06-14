'use strict';

/* App Module */

angular.module('zoe', []).
    config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	    when('/home', {templateUrl: '/static/html/home.html'}).
	    when('/services', {templateUrl: '/static/html/services.html'}).
	    when('/about', {templateUrl: '/static/html/about.html'}).
	    when('/newsletter', {templateUrl: '/static/html/newsletter.html'}).
	    when('/contact', {templateUrl: '/static/html/contact.html'}).
	    otherwise({redirectTo: '/home'});
    }]);

