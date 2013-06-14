'use strict';

/* App Module */

angular.module('zoe', []).
    config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	    when('/home', {templateUrl: '/static/html/home.html'}).
	    otherwise({redirectTo: '/home'});
    }]);

