var fs = require('fs');

var directive = function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            scope.showEmail = attrs.showEmail;
        },
        template: fs.readFileSync(__dirname + '/template.html', 'utf8')
    };
};

module.exports = directive;
