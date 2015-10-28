var $ = require('jquery');
var fs = require('fs');

var directive = function(
    contactInfo
) {
    return {
        link: function(scope, element, attrs) {
            scope.contactInfo = contactInfo;
            google.load('maps', '3', {
	        other_params: $.param({key: 'AIzaSyDwJTKhAPFS8nH3hJQgu2h7o7CX9Bsk6-8', sensor: false}),
	        callback : function() {
	            var center = new google.maps.LatLng(contactInfo.ADDRESS.COORDS[0], contactInfo.ADDRESS.COORDS[1]);
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
                    // var busMarker = new google.maps.Marker({
                    //     position: new google.maps.LatLng(45.665511, -111.047655),
                    //     map: map,
                    //     icon: '/static/img/icons/bus.png'
                    // });
	        }
            });
        },
        restrict: 'E',
        template: fs.readFileSync(__dirname + '/template.html', 'utf8')
    };
};
directive.$inject = [
    'contactInfo'
];

module.exports = directive;
