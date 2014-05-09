var NAME = 'zoe';
module.exports = NAME;

var angular = require('angular');
require('angular-route'); // Just needs included once
require('bootstrap'); // Just needs included once

var app = angular.module(NAME, [
    'ngRoute',
    require('./apps/common/app.js'),
    require('./apps/services/app.js')
    // require('./apps/support/app.js')
]);

// Routes - Params are available by their biological taxonomy names
app.config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
        var fs = require('fs');
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/:kingdom?/:phylum?/:class?/:order?/:family?/:genus?/:species?',
                 {template: fs.readFileSync(__dirname + '/body.html', 'utf8')}).
            otherwise({redirectTo: '/'});
    }
]);

// Hooks
require('./home/hook.js')(app);
require('./contact/hook.js')(app);
