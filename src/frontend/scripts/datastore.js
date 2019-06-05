var Datastore = (function () {
    var self = this;

    var data = {};

    var listeners = [];

    self.init = function () {
        $.when(
            $.getJSON('data/pickups.geojson', function(d) {
                data['pickups'] = d;
            }),

            $.getJSON('data/customers-clusters-3.geojson', function(d) {
                data['customers-clusters-3'] = d;
            }),

            $.getJSON('data/customers-clusters-5.geojson', function(d) {
                data['customers-clusters-5'] = d;
            }),

            $.getJSON('data/profit-clusters-3.geojson', function(d) {
                data['profit-clusters-3'] = d;
            }),

            $.getJSON('data/profit-clusters-5.geojson', function(d) {
                data['profit-clusters-5'] = d;
            }),

        ).then(function() {
            _.each(listeners, function (fn) {
                fn.call();
            });
            listeners = [];
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

    return self;
})();

window.channel = postal.channel();
window.datastore = Datastore;

$(function() {
    window.datastore.init();
});
