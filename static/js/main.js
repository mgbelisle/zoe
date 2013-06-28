'use strict';

// App config

var zoeApp = angular.module('zoe', ['$strap.directives']);

zoeApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
	when('/', {templateUrl: '/static/html/home.html'}).
	when('/pregnancy', {templateUrl: '/static/html/pregnancy/home.html'}).
	when('/pregnancy/testing', {templateUrl: '/static/html/pregnancy/testing.html'}).
	when('/pregnancy/faq', {templateUrl: '/static/html/pregnancy/faq.html'}).
	when('/pregnancy/ultrasounds', {templateUrl: '/static/html/pregnancy/ultrasounds.html'}).
	when('/sti', {templateUrl: '/static/html/sti/home.html'}).
	when('/sti/faq', {templateUrl: '/static/html/sti/faq.html'}).
	when('/sti/symptoms', {templateUrl: '/static/html/sti/symptoms.html'}).
	when('/help', {templateUrl: '/static/html/help.html'}).
	when('/about', {templateUrl: '/static/html/about/home.html'}).
	when('/about/staff', {templateUrl: '/static/html/about/staff.html'}).
	when('/about/board', {templateUrl: '/static/html/about/board.html'}).
	when('/about/mission', {templateUrl: '/static/html/about/mission.html'}).
	when('/help', {templateUrl: '/static/html/help.html'}).
	when('/news', {templateUrl: '/static/html/news.html'}).
	when('/contact', {templateUrl: '/static/html/contact.html'}).
	otherwise({redirectTo: '/'});
}]);

zoeApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

// Controllers
zoeApp.controller('NavbarCtrl', [function() {
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

zoeApp.controller('EmailGodCtrl', ['$scope', function($scope) {
    $scope.alerts = [];
    $scope.showAlert = function() {
	$scope.alerts.push({
	    type: 'error',
	    content: 'Internal server error :-)  Instead of emailing God, please pray for us and our patients!'
	});
	_gaq.push(['_trackEvent', 'EmailGod']);
    };
}]);

zoeApp.controller('NewsletterCtrl', ['$http', '$scope', function($http, $scope) {
    $scope.alerts = [];
    $scope.submit = function() {
	$http({
	    method: 'POST',
	    url: '/api/newsletter',
	    data: $('form#newsletter').serialize(),
	    headers: {
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	    }
	}).success(function(data, status, headers, config) {
	    $scope.alerts.push({
		type: 'info',
		content: 'Thanks for signing up!'
	    });
	    _gaq.push(['_trackEvent', 'Newsletter', 'Success']);
	}).error(function(data, status, headers, config) {
	    console.log(data);
	    $scope.alerts.push({
		type: 'error',
		content: 'Error: ' + data
	    });
	    _gaq.push(['_trackEvent', 'Newsletter', 'Error', data]);
	});
    }
}]);

zoeApp.directive('fadeOut', function () {
    return function(scope, element, attrs) {
	setTimeout(function() {
	    element.fadeOut('slow');
	}, parseFloat(attrs.fadeOut));
    };
});
