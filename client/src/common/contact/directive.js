var fs = require('fs');

var directive = function(
    contactInfo
) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            scope.contactInfo = contactInfo;
            scope.mapHref = attrs.mapHref;
            scope.showEmail = attrs.showEmail;
        },
        template: fs.readFileSync(__dirname + '/template.html', 'utf8')
    };
};
directive.$inject = [
    'contactInfo'
];

module.exports = directive;
