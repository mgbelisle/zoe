$ = require('jquery');
var fs = require('fs');

var Controller = function(
    $sce,
    $scope
) {
    $scope.members = require('./members.js');
    $.each($scope.members, function(i, member) {
        if (member.bio) {
            member.bio = $sce.trustAsHtml(member.bio);
        }
    });
    $scope.member = $scope.members[0];
    $scope.setMember = function(member) {
        $scope.member = member;
    };
};
Controller.$inject = [
    '$sce',
    '$scope'
];

module.exports = Controller;
