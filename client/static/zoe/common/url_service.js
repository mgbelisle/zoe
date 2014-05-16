var service = function($routeParams) {
    this.isActive = function(url) {
        return false; // TODO
    };
};

service.$inject = ['$routeParams'];

module.exports = service;
