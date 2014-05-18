var fs = require('fs');

var Controller = function(
    $routeParams,
    $scope
) {
    $scope.members = require('./members.js');
    $scope.setMember = function(member) {
    };
};
Controller.$inject = [
    '$routeParams',
    '$scope'
];

module.exports = Controller;
