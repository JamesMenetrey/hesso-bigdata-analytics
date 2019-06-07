var files = {
    customers: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    profit: [2,5,7,10,12,15,17,20],
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
