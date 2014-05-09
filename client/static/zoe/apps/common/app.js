var NAME = 'zoe.common';
module.exports = NAME;

var angular = require('angular');
require('angular-route');

var app = angular.module(NAME, [
    'ngRoute'
]);

// Directives
app.directive('zoeContent', require('./content/directive.js'));
app.directive('zoeFbshare', require('./directives/fbshare.js'));
app.directive('zoeHeader', require('./header/directive.js'));
app.directive('zoeHref', require('./directives/href.js'));

// Services
app.service('contentService', require('./content/service.js'));
app.service('headerService', require('./header/service.js'));
app.service('urlService', require('./services/url.js'));
