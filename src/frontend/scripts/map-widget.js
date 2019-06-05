$(function() {

    var MapWidget = (function () {
        var self = this;
        self.$container = undefined;

        var cluster = {
            focus: 'customers',
            numberPoi: 3,
        };
        var currentLayer = null;

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
            // var sw = new mapboxgl.LngLat(-77, 39);
            // var ne = new mapboxgl.LngLat(-70, 42);
            // self.map.setMaxBounds(new mapboxgl.LngLatBounds(sw, ne));

            self.map.on('load', function () {
                window.datastore.ready(function () {
                    initLayers();
                    updateLayer();
				});
            });

            window.channel.subscribe('cluster.changed', function(_cluster) {
                if (!_.isUndefined(_cluster.focus)) {
                    cluster.focus = _cluster.focus;
                }
                if (!_.isUndefined(_cluster.numberPoi)) {
                    cluster.numberPoi = _cluster.numberPoi;
                }
                updateLayer();
            });
        };

        var initLayers = function () {
            var datasets = window.datastore.getData();
            var names = _.keys(datasets);

            // add all sources
            _.forEach(datasets, function(data, name) {
                map.addSource(name, {
                    'type': 'geojson',
                    'data': data
                });
            });

            // add pickups layer
            map.addLayer({
                'id': 'pickups',
                'type': 'circle',
                'source': 'pickups',
                'paint': {
                    'circle-radius': 4.0,
                    'circle-opacity': 0.8,
                    'circle-color': '#3857dd',
                },                 
            });

            // add clusters layers
            _.forEach(_.filter(names, function(name) { return !_.startsWith(name, 'pickups'); }), function(name) {
                map.addLayer({
                    'id': name,
                    'type': 'circle',
                    'source': name,
                    'paint': {
                        'circle-radius': 10.0,
                        'circle-opacity': 0.8,
                        'circle-color': '#a51727',
                    },
                    'layout': {
                        'visibility': 'none',
                    },
                });
            });
        };

        var updateLayer = function () {
            var newLayer = cluster.focus+'-clusters-'+cluster.numberPoi;
            if (!_.isNull(currentLayer)) {
                map.setLayoutProperty(currentLayer, 'visibility', 'none');
            }
            map.setLayoutProperty(newLayer, 'visibility', 'visible');
            currentLayer = newLayer;
		}

        return self;
    })();

    MapWidget.init('map-widget');
});
