var fs = require('fs');

var config = function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/:kingdom?/:phylum?/:class?/:order?/:family?/:genus?/:species?',
             {template: fs.readFileSync(__dirname + '/body.html', 'utf8')}).
        otherwise({redirectTo: '/'});
};

config.$inject = ['$locationProvider', '$routeProvider'];

module.exports = config;
