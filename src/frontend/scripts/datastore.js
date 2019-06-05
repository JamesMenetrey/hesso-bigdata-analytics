var files = {
    customers: [3],
    profit: [],
};

var Datastore = (function () {
    var self = this;

    var data = {};

    var listeners = [];

    self.init = function () {
        $.when(
            _.merge(

                $.getJSON('data/pickups.geojson', function (d) {
                    data['pickups'] = d;
                }),

                _.map(files.customers, function (k) {
                    $.getJSON('data/trip_data_clusters_k'+k+'.geojson', function (d) {
                        data['customers-clusters-'+k] = d;
                    })
                }),

                _.map(files.profit, function (k) {
                    $.getJSON('data/trip_fare_clusters_k'+k+'.geojson', function (d) {
                        data['profit-clusters-'+k] = d;
                    })
                })
            )
        ).then(function () {
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