var Controller = function(
    $scope,
    contactInfo
) {
    $scope.contactInfo = contactInfo;
};
Controller.$inject = [
    '$scope',
    'contactInfo'
];

module.exports = Controller;
