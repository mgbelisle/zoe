var $ = require('jquery');
var fs = require('fs');

var directive = function() {
    return {
        link: function(scope, element, attrs) {
            google.load('maps', '3', {
	        other_params: $.param({key: 'AIzaSyA0jsk5irIPWBUSAcW2WHQqNxsoqtJy5sU', sensor: false}),
	        callback : function() {
	            var center = new google.maps.LatLng(45.663960, -111.055158);
    	            var mapOptions = {
    		        center: center,
    		        zoom: 16,
    		        mapTypeId: google.maps.MapTypeId.ROADMAP
    	            };
    	            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	            var zoeMarker = new google.maps.Marker({
		        position: center,
		        map: map,
	            });
                    var busMarker = new google.maps.Marker({
                        position: new google.maps.LatLng(45.665511, -111.047655),
                        map: map,
                        icon: '/static/img/icons/bus.png'
                    });
	        }
            });
        },
        restrict: 'E',
        template: fs.readFileSync(__dirname + '/template.html', 'utf8')
    };
};

module.exports = directive;
