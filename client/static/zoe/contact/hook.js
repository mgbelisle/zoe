module.exports = function(app) {
    app.run(onRun);
};

var onRun = function(contentService) {
    var fs = require('fs');
    var template = fs.readFileSync(__dirname + '/template.html', 'utf8');
    contentService.setTemplate({kingdom: 'contact'}, template);
};
onRun.$inject = ['contentService'];
