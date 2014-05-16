var Controller = function($scope) {
    $scope.navItems = [
        {
            href: '/services',
            text: 'Services'
        },
        {
            href: '/support',
            text: 'Support'
        },
        {
            href: '/dash',
            text: 'Stache Dash'
        },
        {
            href: '/contact',
            text: 'Contact Us'
        }
    ];
};
Controller.$injects = ['$scope'];

module.exports = Controller;
