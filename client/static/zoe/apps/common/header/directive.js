var bootstrap = require('bootstrap');

var directive = function() {
    return {
        restrict: 'E',
        templateUrl: '/static/zoe/apps/common/header/template.html'
    };
};

module.exports = directive;

