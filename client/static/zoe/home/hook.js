module.exports = function(app) {
    app.run(onRun);
};

var onRun = function(headerService, contentService) {
    var fs = require('fs');
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
};
onRun.$inject = ['headerService', 'contentService'];
