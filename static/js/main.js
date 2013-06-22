'use strict';

/* App Module */

var zoeApp = angular.module('zoe', []);

zoeApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
	when('/', {templateUrl: '/static/html/home.html', controller: 'MainCtrl'}).
	when('/pregnancy', {templateUrl: '/static/html/pregnancy.html', controller: 'MainCtrl'}).
	when('/sti', {templateUrl: '/static/html/sti.html', controller: 'MainCtrl'}).
	when('/sti/faq', {templateUrl: '/static/html/sti/faq.html', controller: 'MainCtrl'}).
	when('/sti/symptoms', {templateUrl: '/static/html/sti/symptoms.html', controller: 'MainCtrl'}).
	when('/help', {templateUrl: '/static/html/help.html', controller: 'MainCtrl'}).
	when('/about', {templateUrl: '/static/html/about.html', controller: 'MainCtrl'}).
	when('/help', {templateUrl: '/static/html/help.html', controller: 'MainCtrl'}).
	when('/news', {templateUrl: '/static/html/news.html', controller: 'MainCtrl'}).
	when('/contact', {templateUrl: '/static/html/contact.html', controller: 'MainCtrl'}).
	otherwise({redirectTo: '/'});
}]);

zoeApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

zoeApp.controller('MainCtrl', ['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.pathEquals = function(url) {
	return $location.path() == url;
    }
    $rootScope.pathStartsWith = function(url) {
	return $rootScope.pathEquals(url) || $location.path().indexOf(url + '/') == 0;
    }
    $('ul.nav li a').click(function() {
	$('button.btn-navbar').click();
    });
}]);

zoeApp.controller('MapCtrl', [function() {
    google.load('maps', '3', {
	other_params: $.param({key: 'AIzaSyA0jsk5irIPWBUSAcW2WHQqNxsoqtJy5sU', sensor: false}),
	callback : function() {
	    var position = new google.maps.LatLng(45.663960, -111.055158);
    	    var mapOptions = {
    		center: position,
    		zoom: 16,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
    	    };
    	    var map = new google.maps.Map(document.getElementById('map-canvas'),
    					  mapOptions);
	    var marker = new google.maps.Marker({
		position: position,
		map: map,
	    });
	}});
}]);

zoeApp.controller('HomeCarouselCtrl', [function() {
    $('#home-carousel').carousel({interval: 10000});
}]);
