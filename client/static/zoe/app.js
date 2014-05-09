var NAME = 'zoe';

var angular = require('angular');
require('angular-route'); // Just needs included once
require('bootstrap'); // Just needs included once

var app = angular.module(NAME, [
    'ngRoute',
    require('./apps/common/app.js'),
    require('./apps/services/app.js')
    // require('./apps/support/app.js')
]);

app.config(require('./config.js'));
require('./home/hook.js')(app);
require('./contact/hook.js')(app);

module.exports = NAME;
