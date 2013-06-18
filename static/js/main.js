'use strict';

/* App Module */

var zoeApp = angular.module('zoe', []);
    
zoeApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
	when('/home', {templateUrl: '/static/html/home.html', controller: 'MainCtrl', tab: 'home'}).
	when('/services', {templateUrl: '/static/html/services.html', controller: 'MainCtrl', tab: 'services'}).
	when('/about', {templateUrl: '/static/html/about.html', controller: 'MainCtrl', tab: 'about'}).
	when('/resources', {templateUrl: '/static/html/resources.html', controller: 'MainCtrl', tab: 'resources'}).
	when('/contact', {templateUrl: '/static/html/contact.html', controller: 'MainCtrl', tab: 'contact'}).
	otherwise({redirectTo: '/home'});
}]);

zoeApp.controller('MainCtrl', ['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.isActiveTab = function(tab) {
	return tab == $route.current.tab;
    }
    $('ul.nav li a').click(function() {
	$("button.btn-navbar").click();
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
    $('#home-carousel').carousel();
}]);
