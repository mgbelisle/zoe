var bootstrap = require('bootstrap');

var directive = function() {
    return {
        restrict: 'E',
        templateUrl: '/static/zoe/home/template.html'
    };
};

module.exports = directive;

