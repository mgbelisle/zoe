define([
    'text!app/common/body/template.html'
], function(
    template
) {
    'use strict';

    var bodyDirective = function() {
        return {
            restrict: 'E',
            template: template
        };
    };

    return bodyDirective;
});
