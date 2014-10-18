var $ = require('jquery');

var Controller = function(
    $http,
    $scope
) {
    $http.
        get('/api/events/').
        success(function(data) {
            $scope.events = data;
        });
    $scope.mapURL = function(event) {
        var params = {
            q: event.address,
            z: '16',
        };
        if (event.location) {
            // Lat/long
            params.sll = String(event.location[0]) + ',' + String(event.location[1]);
        }
        return 'https://maps.google.com/maps?' + $.param(params);
    };
};
Controller.$inject = [
    '$http',
    '$scope'
];

module.exports = Controller;
