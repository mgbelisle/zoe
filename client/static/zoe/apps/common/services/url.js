var service = function($route) {
    this.matchesCurrentParams = function(params) {
        var currentParams = $route.current.params;
        for (var key in params) {
            if (params[key] != currentParams[key]) {
                return false;
            }
        }
        return true;
    };
};

service.$inject = ['$route'];

module.exports = service;
