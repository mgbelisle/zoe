var service = function($location) {
    this.isActive = function(url) {
        var params1 = url.split('/');
        var params2 = $location.path().split('/');
        for (var i = 0; i < params1.length; i++) {
            if (params1[i] != params2[i]) {
                return false;
            }
        }
        return true;
    };
};

service.$inject = ['$location'];

module.exports = service;
