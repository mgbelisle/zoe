var config = function(headerService) {
    var items = [
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
    headerService.setNavItems({kingdom: undefined}, items);
    headerService.setNavItems({kingdom: 'contact'}, items);
};

config.$inject = ['headerService'];

module.exports = config;
