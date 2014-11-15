var fs = require('fs');

var directive = function(
    contactInfo
) {
    return {
        link: function(scope, element, attrs) {
            scope.contactInfo = contactInfo;
        },
        restrict: 'E',
        template: fs.readFileSync(__dirname + '/template.html', 'utf8')
    };
};
directive.$inject = [
    'contactInfo'
];

module.exports = directive;
