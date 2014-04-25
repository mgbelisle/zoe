var service = function($route, urlService) {

    // Nav items
    var _contents = []; // [[params1, directive1], [params2, directive2]]

    this.getContent = function() {
        var currentParams = $route.current.params;
        for (var i=0; i < _contents.length; i++) {
            var pair = _contents[i];
            var params = pair[0];
            if (urlService.matchesCurrentParams(params)) {
                return pair[1];
            }
        }
    };

    this.setContent = function(params, directive) {
        _contents.push([params, directive]);
    };

};

service.$inject = ['$route', 'urlService'];

module.exports = service;

