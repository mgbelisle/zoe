var service = function(urlService) {

    // Templates
    var _templates = []; // [[params1, template1], [params2, template2]]

    this.setTemplate = function(params, template) {
        _templates.push([params, template]);
    };

    this.getTemplate = function() {
        for (var i=0; i < _templates.length; i++) {
            var pair = _templates[i];
            var params = pair[0];
            if (urlService.matchesCurrentParams(params)) {
                return pair[1];
            }
        }
    };

};

service.$inject = ['urlService'];

module.exports = service;

