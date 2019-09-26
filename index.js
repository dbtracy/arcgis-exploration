require(["esri/Map", "esri/views/MapView"], function (Map, MapView) {
  let map = new Map({
    basemap: 'streets'
  })

  let view = new MapView({
    container: 'viewDiv',
    map: map
  })
});
