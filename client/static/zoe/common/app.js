var NAME = 'zoe.common';
module.exports = NAME;

var angular = require('angular');
require('angular-route');

var app = angular.module(NAME, [
    'ngRoute'
]);

// Directives
app.directive('zoeContact', require('./contact/directive.js'));
app.directive('zoeFbShare', require('./fb_share_directive.js'));
app.directive('zoeFooter', require('./footer/directive.js'));
app.directive('zoeHeader', require('./header/directive.js'));
app.directive('zoeHref', require('./href_directive.js'));
app.directive('zoeImgLeft', require('./img_left/directive.js'));
app.directive('zoeImgRight', require('./img_right/directive.js'));
app.directive('zoeMap', require('./map/directive.js'));
app.directive('zoeSideNav', require('./side_nav/directive.js'));

// Services
app.service('urlService', require('./url_service.js'));
