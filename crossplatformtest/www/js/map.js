// initialize map when page ready
var map;

// Get rid of address bar on iphone/ipod
var fixSize = function () {
    window.scrollTo(0, 0);
    document.body.style.height = '100%';
    if (!(/(iphone|ipod)/.test(navigator.userAgent.toLowerCase()))) {
        if (document.body.parentNode) {
            document.body.parentNode.style.height = '100%';
        }
    }
};

setTimeout(fixSize, 700);
setTimeout(fixSize, 1500);

var mapInit = function () {
    // create map
    map = new OpenLayers.Map({
        div: "map",
        theme: null,
        controls: [
            new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.TouchNavigation({
                dragPanOptions: {
                    enableKinetic: true
                }
            }),
            new OpenLayers.Control.PinchZoom(),
            new OpenLayers.Control.Zoom()
        ],
        layers: [
            new OpenLayers.Layer.OSM("OpenStreetMap", null, {
                transitionEffect: 'resize'
            })
        ] 
        //,
        //center: new OpenLayers.LonLat(742000, 5861000),
        //zoom: 13
    });

    var position = new OpenLayers.LonLat(27.24836338, 61.68425742).transform(
                      new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject());
    map.setCenter(position, 13);

    var layer = map.layers[0];
    layer.events.register("loadend", layer, function (e) {
        $('.app').remove();
    });
};