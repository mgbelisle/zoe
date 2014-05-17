var directive = function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.addClass('img-rounded zoe-img-left pull-left');
        }
    };
};

module.exports = directive;
