var Controller = require('./controller.js');

var directive = function() {
    return {
        controller: Controller,
        restrict: 'E',
        template: '<div ng-include="template"></div>'
    };
};

module.exports = directive;

