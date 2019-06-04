$(function() {

    var SidebarWidget = (function () {
        var self = this;
        self.$container = undefined;

        // Constructor
        self.init = function (containerId) {
            self.$container = $('#' + containerId);

            initToggle();

            window.earthquakes.ready(function () {
                initPoiSlider();
            });
        };

        var initPoiSlider = function () {
            updatePoiLabels(3);
            self.$container.find('.poi-slider').slider({
                range: false,
                min: 3, 
                max: 10,
                step: 1,
                slide: function (event, ui) {
                    updatePoiLabels(ui.value);
                },
                change: function (event, ui) {
                    window.channel.publish('earthquakes.filtered', {
                        magnitude: { min: ui.value }
                    });
                }
            });
        }

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
