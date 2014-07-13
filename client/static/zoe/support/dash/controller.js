var fs = require('fs');

var Controller = function($scope) {
    $scope.results = require('./results.js');
};
Controller.$inject = ['$scope'];

module.exports = Controller;
