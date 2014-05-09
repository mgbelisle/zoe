var NAME = 'zoe.services';
module.exports = NAME;

var angular = require('angular');

var app = angular.module(NAME, [
    require('../common/app.js')
]);

require('./pregnancy/hook.js')(app);
app.run(require('./header.js'));

