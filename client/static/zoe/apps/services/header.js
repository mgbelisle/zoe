var config = function(headerService) {
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
};

config.$inject = ['headerService'];

module.exports = config;
