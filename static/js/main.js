'use strict';

/* App Module */

var zoeApp = angular.module('zoe', []);

zoeApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
	when('/', {templateUrl: '/static/html/home.html', controller: 'MainCtrl', tab: 'home'}).
	when('/pregnancy', {templateUrl: '/static/html/pregnancy.html', controller: 'MainCtrl', tab: 'pregnancy'}).
	when('/sti', {templateUrl: '/static/html/sti.html', controller: 'MainCtrl', tab: 'sti'}).
	when('/help', {templateUrl: '/static/html/help.html', controller: 'MainCtrl', tab: 'help'}).
	when('/about', {templateUrl: '/static/html/about.html', controller: 'MainCtrl', tab: 'about'}).
	when('/help', {templateUrl: '/static/html/help.html', controller: 'MainCtrl', tab: 'help'}).
	when('/news', {templateUrl: '/static/html/news.html', controller: 'MainCtrl', tab: 'news'}).
	when('/contact', {templateUrl: '/static/html/contact.html', controller: 'MainCtrl', tab: 'contact'}).
	otherwise({redirectTo: '/'});
}]);

zoeApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

zoeApp.controller('MainCtrl', ['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.isActiveTab = function(tab) {
	return tab == $route.current.tab;
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
