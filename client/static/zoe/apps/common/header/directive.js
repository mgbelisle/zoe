var Controller = require('./controller.js');

var directive = function() {
    return {
        controller: Controller,
        restrict: 'E',
        templateUrl: '/static/zoe/apps/common/header/template.html'
    };
};

module.exports = directive;

