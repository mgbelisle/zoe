var config = function(contentService) {
    contentService.setDirective({kingdom: undefined}, require('./home/directive.js'));
};

config.$inject = ['contentService'];

module.exports = config;
