var fs = require('fs');

var Controller = function($scope) {
    var divisionsMap = {};
    var zeroTime = (new Date(1970, 1, 1, 0, 0, 0, 0)).getTime();
    $.each(require('./results.js'), function(i, result) {
        divisionsMap[result.division] = divisionsMap[result.division] || [];
        divisionsMap[result.division].push({
            name: result.name,
            time: zeroTime + result.time * 1000,
            notes: result.notes
        });
    });
    var divisions = [];
    $.each(divisionsMap, function(key, results) {
        results.sort(function(a, b) {
            return a.time - b.time;
        });
        divisions.push({
            name: key,
            results: results
        });
    });
    divisions.sort(function(a, b) {
        return b.results.length - a.results.length;
    });
    $scope.divisions = divisions;
};
Controller.$inject = ['$scope'];

module.exports = Controller;
