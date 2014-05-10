var directive = function() {
    return {
        controller: require('./controller.js'),
        restrict: 'E',
        template: '<div ng-include="template"></div>'
    };
};

module.exports = directive;

