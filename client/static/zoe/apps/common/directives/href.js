var directive = function () {
    return function(scope, element, attrs) {
        element.click(function() {
            window.open(attrs.href,
                        attrs.href,
                        'width=768,height=612,scrollbars=1');
            return false;
        });
    };
};

module.exports = directive;
