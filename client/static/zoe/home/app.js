var NAME = 'zoe.home';
module.exports = NAME;

var angular = require('angular');
var fs = require('fs');

var app = angular.module(NAME, [
    require('../common/app.js')
]);

app.run([
    'headerService',
    'contentService',
    function(
        headerService,
        contentService
    ) {
        var headerNavItems = [
            {
                href: '/services',
                params: {kingdom: 'services'},
                text: 'Services'
            },
            {
                href: '/support',
                params: {kingdom: 'support'},
                text: 'Support'
            },
            {
                href: '/dash',
                params: {kingdom: 'dash'},
                text: 'Stache Dash'
            },
            {
                href: '/contact',
                params: {kingdom: 'contact'},
                text: 'Contact Us'
            }
        ];
        headerService.setNavItems({kingdom: undefined}, headerNavItems);
        headerService.setNavItems({kingdom: 'contact'}, headerNavItems);
        contentService.setTemplate({kingdom: undefined},
                                   fs.readFileSync(__dirname + '/template.html', 'utf8'));
    }
]);
