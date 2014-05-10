var NAME = 'zoe.dash';
module.exports = NAME;

var angular = require('angular');
var fs = require('fs');

var app = angular.module(NAME, [
    require('../common/app.js')
]);

app.run([
    'contentService',
    function(
        contentService
    ) {
        contentService.setTemplate(
            {kingdom: 'dash'},
            fs.readFileSync(__dirname + '/template.html', 'utf8')
        );
    }
]);
