var service = function(urlService) {

    // Directives
    var _directives = []; // [[params1, directive1], [params2, directive2]]

    this.setDirective = function(params, directive) {
        _directives.push([params, directive]);
    };

    this.getContent = function() {
        for (var i=0; i < _directives.length; i++) {
            var pair = _directives[i];
            var params = pair[0];
            if (urlService.matchesCurrentParams(params)) {
                angular.directive('zoeFoo', pair[1]);
                debugger;
                return pair[1];
            }
        }
    };

};

service.$inject = ['urlService'];

module.exports = service;

