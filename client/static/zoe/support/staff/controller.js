var fs = require('fs');

var Controller = function(
    $location,
    $routeParams,
    $scope
) {
    $scope.members = require('./members.js');
    var membersMap = {};
    $.each($scope.members, function(i, member) {
        membersMap[member.key] = member;
    });
    if ($routeParams.key) {
        $scope.member = membersMap[$routeParams.key];
        if (!$scope.member) {
            $location.path('/support/about/staff');
        }
    } else {
        $scope.member = $scope.members[0];
    }
};
Controller.$inject = [
    '$location',
    '$routeParams',
    '$scope'
];

module.exports = Controller;
