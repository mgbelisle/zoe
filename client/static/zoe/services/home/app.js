var NAME = 'zoe.services.home';
module.exports = NAME;

var angular = require('angular');
var fs = require('fs');

var app = angular.module(NAME, []);

app.run([
    'contentService',
    function(contentService) {
        contentService.setTemplate({kingdom: 'services', phylum: undefined},
                                   fs.readFileSync(__dirname + '/template.html', 'utf8'));
    }
]);
