var service = function($location) {
    var _navbarItems = {};

    this.setNavbarItems = function(route, items) {
        _navbarItems[route] = items;
    };

    this.getNavbarItems = function() {
        var path = $location.path();
        for (var route in _navbarItems) {
            var re = new RegExp(route);
            if (re.test(path)) {
                return _navbarItems[route];
            }
        }
    };
};

service.$inject = ['$location'];

module.exports = service;
