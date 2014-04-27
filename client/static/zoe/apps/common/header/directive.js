var fs = require('fs');

var directive = function() {
    return {
        controller: require('./controller.js'),
        restrict: 'E',
        template: fs.readFileSync(__dirname + '/template.html', 'utf8')
    };
};

module.exports = directive;

