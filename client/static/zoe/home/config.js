var config = function(headerService, contentService) {
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
                               '/static/zoe/home/template.html');
};

config.$inject = ['headerService', 'contentService'];

module.exports = config;
