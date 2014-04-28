var fs = require('fs');

var config = function(contentService) {
    var template = fs.readFileSync(__dirname + '/template.html', 'utf8');
    contentService.setTemplate({kingdom: 'contact'}, template);
    // contentService.setTemplate({phylum: 'contact'}, template);
};

config.$inject = ['contentService'];

module.exports = config;
