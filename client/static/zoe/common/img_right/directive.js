var directive = function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.addClass('img-rounded zoe-img-right pull-right');
        }
    };
};

module.exports = directive;
