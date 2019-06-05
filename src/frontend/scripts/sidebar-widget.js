$(function() {

    var SidebarWidget = (function () {
        var self = this;
        self.$container = undefined;

        // Constructor
        self.init = function (containerId) {
            self.$container = $('#' + containerId);

            initToggle();

            window.datastore.ready(function () {
                initFocusSelector();
                initPoiSlider();
            });
        };

        var initFocusSelector = function () {
            self.$container.find('select.focus').change(function () {
                window.channel.publish('cluster.changed', {
                    focus: this.value,
                });
            });
        };

        var initPoiSlider = function () {
            updatePoiLabels(1);
            self.$container.find('.poi-slider').slider({
                range: false,
                min: 1,
                max: 20,
                step: 1,
                slide: function (event, ui) {
                    updatePoiLabels(ui.value);
                },
                change: function (event, ui) {
                    window.channel.publish('cluster.changed', {
                        numberPoi: ui.value,
                    });
                }
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
