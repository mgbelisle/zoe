var fs = require('fs');

var Controller = function($scope) {
    $scope.members = require('./members.js');
    $scope.member = $scope.members[0];
    $scope.setMember = function(member) {
        $scope.member = member;
    };
};
Controller.$inject = ['$scope'];

module.exports = Controller;
