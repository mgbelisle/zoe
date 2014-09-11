var fs = require('fs');

module.exports = [
    'urlService',
    function(urlService) {
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {
                scope.isActive = urlService.isActive;
            },
            template: fs.readFileSync(__dirname + '/template.html', 'utf8')
        };
    }
];
