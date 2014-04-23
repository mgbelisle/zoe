var bootstrap = require('bootstrap-tmp'); // TODO

var directive = function() {
    return {
        restrict: 'E',
        templateUrl: '/static/zoe/home/template.html'
    };
};

directive.$inject = ['headerService'];

module.exports = directive;

