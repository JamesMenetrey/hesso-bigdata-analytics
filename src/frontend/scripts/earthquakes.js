var Earthquakes = (function () {
    var self = this;

    var data = {};
    var bounds = {
        Mw: { min: Infinity, max: -Infinity },
        year: { min: Infinity, max: -Infinity },
        viewport: {
            ne: { lng: -Infinity, lat: -Infinity },
            sw: { lng: Infinity, lat: Infinity },
        },
    };
    var filters = _.cloneDeep(bounds);
    
    var listeners = [];
    
    self.init = function () {
        $.ajax({
            dataType: 'json',
            url: 'data/earthquakeswithyear.geojson',
            success: function (d) {
                data = d;
                computeBounds();

                // first filter years before 1500
                filters.year.min = 1500;

                // console.log('filters', filters);

                _.each(listeners, function (fn) {
                    fn.call();
                });
                listeners = [];
            }
        });

        window.channel.subscribe('earthquakes.filtered', function (_filters) {
            // console.log('filters', _filters);
            if (!_.isUndefined(_filters.magnitude)) {
                filters.Mw = _filters.magnitude;
            }
            if (!_.isUndefined(_filters.years)) {
                filters.year = _filters.years;
            }
            if (!_.isUndefined(_filters.viewport)) {
                filters.viewport = _filters.viewport;
            }

            window.channel.publish('earthquakes.updated');
        });
    };

    self.getData = function () {
        return data;
    };

    self.hasData = function () {
        return !_.isEmpty(data);
    };

    self.ready = function (fn) {
        if (self.hasData()) {
            fn.call();
        }
        else {
            listeners.push(fn);
        }
    };

    var computeBounds = function () {
        _.each(data.features, function (o) {
            bounds.year.min = _.min([bounds.year.min, o.properties.year]);
            bounds.year.max = _.max([bounds.year.max, o.properties.year]);
            bounds.Mw.min = _.min([bounds.Mw.min, o.properties.Mw]);
            bounds.Mw.max = _.max([bounds.Mw.max, o.properties.Mw]);

            // Disclaimer, geodesie not handled and will not works all over the world!
            // But much more simple...
            bounds.viewport.ne.lng = _.max([bounds.viewport.ne.lng, o.geometry.coordinates[0]]);
            bounds.viewport.ne.lat = _.max([bounds.viewport.ne.lat, o.geometry.coordinates[1]]);
            bounds.viewport.sw.lng = _.min([bounds.viewport.sw.lng, o.geometry.coordinates[0]]);
            bounds.viewport.sw.lat = _.min([bounds.viewport.sw.lat, o.geometry.coordinates[1]]);
        });
        filters = _.cloneDeep(bounds);
    }

    self.getBounds = function () {
        return bounds;
    };

    self.getFilters = function () {
        return filters;
    };

    return self;
})();

window.channel = postal.channel();
window.earthquakes = Earthquakes;

$(function() {
    window.earthquakes.init();
});
