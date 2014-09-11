$ = require('jquery');

var directive = function ($window) {
    return function(scope, element, attrs) {
        $(element).click(function() {
            $window.open(element.attr('href'),
                         element.attr('href'),
                         'width=768,height=612,scrollbars=1');
            return false;
        });
    };
};

directive.$inject = ['$window'];

module.exports = directive;
