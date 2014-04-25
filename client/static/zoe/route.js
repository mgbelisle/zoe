var config = function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/:kingdom?/:phylum?/:class?/:order?/:family?/:genus?/:species?', {}).
        otherwise({redirectTo: '/'});
};

config.$inject = ['$locationProvider', '$routeProvider'];

module.exports = config;
