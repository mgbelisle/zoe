'use strict';

/* App Module */

angular.module('phonecat', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: '/static/html/phone-list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: '/static/html/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);

/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('/static/js/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}

function PhoneDetailCtrl($scope, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
}
