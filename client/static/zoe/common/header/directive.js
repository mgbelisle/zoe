var fs = require('fs');

module.exports = [
    'urlService',
    function(urlService) {
        return {
            link: function(scope, element, attrs) {
                scope.isActive = urlService.isActive;
            },
            restrict: 'E',
            template: fs.readFileSync(__dirname + '/template.html', 'utf8')
        };
    }
];
