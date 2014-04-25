var service = function($route, urlService) {

    // Nav items
    var _navItems = []; // [[params1, items1], [params2, items2]]

    this.getNavItems = function() {
        var currentParams = $route.current.params;
        for (var i=0; i < _navItems.length; i++) {
            var pair = _navItems[i];
            var params = pair[0];
            if (urlService.matchesCurrentParams(params)) {
                return pair[1];
            }
        }
    };

    this.setNavItems = function(params, items) {
        _navItems.push([params, items]);
    };

};

service.$inject = ['$route', 'urlService'];

module.exports = service;
