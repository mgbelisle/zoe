var config = function(contentService) {
    contentService.setContent({kingdom: undefined}, require('./home/directive.js'));
};

config.$inject = ['contentService'];

module.exports = config;
