var Controller = function(
    $http,
    $scope
) {
    $http.
        get('/api/events/').
        success(function(data) {
            $scope.events = data;
        });
};
Controller.$inject = [
    '$http',
    '$scope'
];

module.exports = Controller;
