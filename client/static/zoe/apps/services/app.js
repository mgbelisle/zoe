var angular = require('angular');

var NAME = 'zoe.services';

var app = angular.module(NAME, [
    require('../common/app')
]);

app.run(['headerService', function(headerService) {
    headerService.setNavItems(
        {kingdom: 'services'},
        [
            {
                href: '/services/pregnancy',
                params: {kingdom: 'services',
                         phylum: 'pregnancy'},
                text: 'Pregnancy'
            },
            {
                href: '/services/sti',
                params: {kingdom: 'services',
                         phylum: 'sti'},
                text: 'STD Testing'
            },
            {
                href: '/services/contact',
                params: {kingdom: 'services',
                         phylum: 'contact'},
                text: 'Contact Us'
            }
        ]);
}]);

module.exports = NAME;
