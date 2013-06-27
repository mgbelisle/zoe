'use strict';

var testApp = angular.module('test', ['$strap.directives']);

testApp.controller('TestCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.alerts = [];
    $scope.showAlert = function() {
	$scope.alerts.push({
	    content: "Hello world"
	});
    };
}]);

testApp.directive('fadeOut', function () {
    return function(scope, element, attrs) {
	setTimeout(function() {
	    element.fadeOut('slow');
	}, parseFloat(attrs.fadeOut));
    };
});
