'use strict';

// App config

var zoeApp = angular.module('zoe', ['$strap.directives']);

zoeApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
	when('/', {templateUrl: '/static/html/home.html'}).
	when('/pregnancy', {templateUrl: '/static/html/pregnancy/home.html'}).
	when('/pregnancy/symptoms', {templateUrl: '/static/html/pregnancy/symptoms.html'}).
	when('/pregnancy/testing', {templateUrl: '/static/html/pregnancy/testing.html'}).
	when('/pregnancy/faq', {templateUrl: '/static/html/pregnancy/faq.html'}).
	when('/pregnancy/ultrasounds', {templateUrl: '/static/html/pregnancy/ultrasounds.html'}).
	when('/pregnancy/abortion', {templateUrl: '/static/html/pregnancy/abortion.html'}).
	when('/sti', {redirectTo: '/sti/testing'}).
	when('/sti/testing', {templateUrl: '/static/html/sti/testing.html'}).
	when('/sti/faq', {templateUrl: '/static/html/sti/faq.html'}).
	when('/sti/symptoms', {templateUrl: '/static/html/sti/symptoms.html'}).
	when('/services', {templateUrl: '/static/html/services.html'}).
	when('/contact', {templateUrl: '/static/html/contact.html'}).
	when('/campus', {templateUrl: '/static/html/campus.html'}).
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

zoeApp.controller('EmailGodCtrl', ['$scope', function($scope) {
    $scope.alerts = [];
    $scope.showAlert = function() {
	$scope.alerts.push({
	    type: 'error',
	    content: 'Internal server error :-)  Instead of emailing God, please pray for us and our patients!'
	});
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

zoeApp.controller('FBShareCtrl', ['$location', function ($location) {
    var href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent($location.absUrl());
    $('#fb-share').attr('href', href);
}]);

// Directives

zoeApp.directive('fadeOut', function () {
    return function(scope, element, attrs) {
	setTimeout(function() {
	    element.fadeOut('slow');
	}, parseFloat(attrs.fadeOut));
    };
});

zoeApp.directive('clickTrack', function () {
    return function(scope, element, attrs) {
	element.click(function() {
	    setTimeout(function() {
		var args = eval(attrs.clickTrack);
		args.unshift('_trackEvent');
		_gaq.push(args);
	    });
	});
    };
});

zoeApp.directive('extHref', function () {
    return function(scope, element, attrs) {
	element.click(function() {
	    window.open(element.attr('href'),
			element.attr('href'),
			'width=768,height=612');
            setTimeout(function() {
		_gaq.push(['_trackEvent', 'ext-href', element.attr('href')]);
            });
	    return false;
	});
    };
});

zoeApp.directive('homeCarousel', function () {
    return function(scope, element, attrs) {
	element.carousel({interval: 10000});
    };
});
