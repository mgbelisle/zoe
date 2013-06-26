'use strict';

var testApp = angular.module('test', ['$strap.directives']);

testApp.controller('TestCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.alerts = [];
    $scope.showAlert = function() {
	$scope.alerts.push({
	    type: "error",
	    content: "Alert"
	});
    };
}]);
