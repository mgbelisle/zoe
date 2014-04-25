var controller = require('./controller.js');

var directive = function() {
    return {
        controller: controller,
        restrict: 'E',
        transclude: true,
        template: '<ng-transclude></ng-transclude>'
    };
};

module.exports = directive;

