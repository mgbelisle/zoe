var service = function($route, urlService) {

    // Directives
    var _directives = []; // [[params1, directive1], [params2, directive2]]

    this.setDirective = function(params, directive) {
        _directives.push([params, directive]);
    };

    this.getContent = function() {
        var currentParams = $route.current.params;
        for (var i=0; i < _directives.length; i++) {
            var pair = _directives[i];
            var params = pair[0];
            if (urlService.matchesCurrentParams(params)) {
                return pair[1];
            }
        }
    };

};

service.$inject = ['$route', 'urlService'];

module.exports = service;

