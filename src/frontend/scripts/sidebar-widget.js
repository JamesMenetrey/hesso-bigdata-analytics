$(function() {

    var SidebarWidget = (function () {
        var self = this;
        self.$container = undefined;

        // Constructor
        self.init = function (containerId) {
            self.$container = $('#' + containerId);

            initToggle();

            window.datastore.ready(function () {
                initPoiSlider();

                self.$container.find('select.focus').change(function () {
                    window.channel.publish('cluster.changed', {
                        focus: this.value,
                    });
                });

                self.$container.find('input.pickups').change(function () {
                    window.channel.publish('cluster.changed', {
                        pickups: $(this).prop('checked'),
                    });
                });
            });
        };

        var initPoiSlider = function () {
            updatePoiLabels(2);
            self.$container.find('.poi-slider').slider({
                range: false,
                min: 2,
                max: 20,
                step: 1,
                slide: function (event, ui) {
                    updatePoiLabels(ui.value);
                    window.channel.publish('cluster.changed', {
                        numberPoi: ui.value,
                    });
                },
                // change: function (event, ui) {
                // }
            });
        };

        var updatePoiLabels = function (min) {
            self.$container.find('.number-poi').text(min);
        };

        var initToggle = function () {
            self.$container.find("#menu-toggle").click(function (e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
        };

        return self;
    })();

    SidebarWidget.init('sidebar-wrapper');
});
