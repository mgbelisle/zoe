'use strict';

/* App Module */

var zoeApp = angular.module('zoe', []);
    
zoeApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
	when('/home', {templateUrl: '/static/html/home.html', controller: 'MainCtrl', tab: 'home'}).
	when('/services', {templateUrl: '/static/html/services.html', controller: 'MainCtrl', tab: 'services'}).
	when('/about', {templateUrl: '/static/html/about.html', controller: 'MainCtrl', tab: 'about'}).
	when('/newsletter', {templateUrl: '/static/html/newsletter.html', controller: 'MainCtrl', tab: 'newsletter'}).
	when('/contact', {templateUrl: '/static/html/contact.html', controller: 'MainCtrl', tab: 'contact'}).
	otherwise({redirectTo: '/home'});
}]);

zoeApp.controller('MainCtrl', ['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.isActiveTab = function(tab) {
	return tab == $route.current.tab;
    }
}]);
