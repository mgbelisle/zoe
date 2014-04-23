var bootstrap = require('bootstrap');
var controller = require('./controller.js');

var directive = function() {
    return {
        controller: controller,
        restrict: 'E',
        templateUrl: '/static/zoe/apps/common/header/template.html'
    };
};

module.exports = directive;

