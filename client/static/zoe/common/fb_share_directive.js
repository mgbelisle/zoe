var directive = function ($location) {
    return function(scope, element, attrs) {
        var href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent($location.absUrl());
        element.attr('href', href);
    };
};

directive.$inject = ['$location'];

module.exports = directive;
