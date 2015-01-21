var angular = require('angular');
require('./ganalytics.js');

angular.element(document).ready(function() {
    angular.bootstrap(document, [require('./app.js')]);
});
