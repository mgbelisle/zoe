var bootstrap = require('bootstrap');

var directive = function() {
    return {
        restrict: 'E',
        templateUrl: '/static/zoe/header/template.html'
    };
};

module.exports = directive;

