$(function() {

    var MapWidget = (function () {
        var self = this;
        self.$container = undefined;
		        
        self.init = function (containerId) {        
            self.$container = $('#' + containerId);

            self.map = new mapboxgl.Map({
                container: containerId,
                style: 'mapbox://styles/damienrochat/cjohhv14w0cyk2rqn97behtf5',
            });

            // fit to switzerland bounds
            self.map.fitBounds([[-74.24354116993825, 40.50214590272583], [-73.77490985242169, 40.75977082462501]], {
                padding: 30,
				zoom: 11,
            });
            
            // prevent user to scroll out Swiss territory
            var sw = new mapboxgl.LngLat(-77, 39);
            var ne = new mapboxgl.LngLat(-70, 42);
            self.map.setMaxBounds(new mapboxgl.LngLatBounds(sw, ne));

            self.map.on('load', function () {
                window.earthquakes.ready(function () {			
					// Ready to load some data
				});
			});
		};

        return self;
    })();

    MapWidget.init('map-widget');
});
