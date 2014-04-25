var angular = require('angular');

var NAME = 'zoe.services';

var app = angular.module(NAME, [
    require('../common/app')
]);

app.run(require('./header.js'));

module.exports = NAME;
