var angular = require('angular');

var directive = function() {
    return {
        restrict: 'E',
        templateUrl: '/static/app/common/navbar/template.html'
    };
};

module.exports = directive;
