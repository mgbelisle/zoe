var $ = require('jquery');

var Controller = function(
    $location
) {
    // Below 768 is a mobile device
    // http://getbootstrap.com/2.3.2/scaffolding.html
    if ($(window).width() < 768) {
        return $location.path('/services/mobile');
    }
    $location.path('/services/pregnancy');
};

Controller.$inject = [
    '$location'
];

module.exports = Controller;
