var fs = require('fs');

var directive = function(urlService) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            scope.isActive = urlService.isActive;
        },
        template: fs.readFileSync(__dirname + '/template.html', 'utf8')
    };
};
directive.$injects = ['urlService'];

module.exports = directive;
