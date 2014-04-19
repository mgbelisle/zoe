var bootstrap = require('bootstrap');

var directive = function() {
    return {
        restrict: 'E',
        templateUrl: '/static/zoe/navbar/template.html'
    };
};

module.exports = directive;
