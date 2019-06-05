var files = {
    customers: [3, 5, 10, 15],
    profit: [3, 5],
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

                _.map(files, function (v, name) {
                    _.map(v, function (k) {
                        $.getJSON('data/'+name+'-clusters-'+k+'.geojson', function (d) {
                            data[name+'-clusters-'+k] = d;
                        })
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
