// var angular = require('angular'); // TODO
var angular = require('angular-tmp');
var zoeApp = require('./zoe/app');

angular.element(document).ready(function() {
    angular.bootstrap(document, ['zoe']);
});
