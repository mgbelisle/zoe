var crypto = require('crypto');

var service = function($templateCache, urlService) {

    // Templates
    var _templates = []; // [[params1, template1], [params2, template2]]

    this.setTemplate = function(params, template) {
        var hash = crypto.createHash('sha256');
        hash.update(template);
        hash = hash.digest('hex');
        $templateCache.put(hash, template);
        _templates.push([params, hash]);
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

service.$inject = ['$templateCache', 'urlService'];

module.exports = service;

