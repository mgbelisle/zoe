var NAME = 'zoe.contact';
module.exports = NAME;

var angular = require('angular');
var fs = require('fs');

var app = angular.module(NAME, [
    require('../common/app.js')
]);

// Directives
app.directive('zoeMap', require('./map/directive.js'));

// Setup
app.run([
    'contentService',
    function(
        contentService
    ) {
        var template = fs.readFileSync(__dirname + '/template.html', 'utf8');
        contentService.setTemplate({kingdom: 'contact'}, template);
        contentService.setTemplate({phylum: 'contact'}, template); // TODO: Is this bad?
    }
]);
