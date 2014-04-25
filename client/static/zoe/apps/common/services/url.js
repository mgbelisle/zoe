var service = function($routeParams) {
    this.matchesCurrentParams = function(params) {
        for (var key in params) {
            if (params[key] != $routeParams[key]) {
                return false;
            }
        }
        return true;
    };
};

service.$inject = ['$route'];

module.exports = service;
