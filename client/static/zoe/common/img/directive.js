var fs = require('fs');

var directive = function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            scope.src = attrs.src;
            scope.alt = attrs.alt || attrs.src;
            scope.caption = attrs.caption;
            scope.pull = attrs.pull || 'left';
        },
        scope: {},
        template: fs.readFileSync(__dirname + '/template.html', 'utf8')
    };
};

module.exports = directive;
