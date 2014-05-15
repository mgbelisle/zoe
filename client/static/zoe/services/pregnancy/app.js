var NAME = 'zoe.pregnancy';
module.exports = NAME;

var angular = require('angular');

var app = angular.module(NAME, [
    require('./home/app.js')
]);

app.controller('PregnancySideNavController', require('./side_nav_controller.js'));
