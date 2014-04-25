var controller = require('./controller.js');

var directive = function() {
    return {
        controller: controller,
        restrict: 'E',
        template: 'Content' // TODO
    };
};

module.exports = directive;

