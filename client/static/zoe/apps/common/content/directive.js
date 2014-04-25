var Controller = require('./controller.js');

var directive = function() {
    return {
        controller: Controller,
        restrict: 'E',
        template: '{{ content }}'
    };
};

module.exports = directive;

