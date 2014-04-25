var service = function($route, urlService) {

    // Nav items
    var _navItems = []; // [[params1: items1], [params2: items2]]

    this.getNavItems = function() {
        var currentParams = $route.current.params;
        var items = [];
        _navItems.forEach(function(i) {
            var params = i[0];
            if (urlService.matchesCurrentParams(params)) {
                items.push.apply(items, i[1]); // Extends items with new items
            }
        });
        return items;
    };

    this.setNavItems = function(params, items) {
        _navItems.push([params, items]);
    };

};

service.$inject = ['$route', 'urlService'];

module.exports = service;
