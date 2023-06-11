var Stamen_TonerLabels = L.tileLayer(
  'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
  });
var tmptmknenak = L.layerGroup();

var mwrpenyet = L.marker([-7.047224871391219, 110.38991797128035]).bindPopup('WrpenyetLombokRawitUnnes').addTo(
  tmptmknenak);

/* Layer Satelite */
var mbAttr =
  'Map data & copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
var satellite = L.tileLayer(
  'mbAttr', {
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  });
/* Layer Satelite */
/* Layer Street */
var mbUrl =
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

var streets = L.tileLayer(mbUrl, {
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  attribution: mbAttr
});
/* Layer Street */

/* Leaflet Provider = osm */
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
/* Leaflet Provider = otm */
var otm = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
/* Leaflet Provider = esriworldimagery */
var esriworldimagery = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  });

/* Muka Peta Awal Tampil */
var map = L.map('map', {
  center: [-7.0505397635851885, 110.39241206570966],
  zoom: 15,
  layers: [osm, streets, otm, esriworldimagery]
});
/* base layer agar bisa muncul di daftar peta*/
var baseLayers = {
  'OpenStreetMap': osm,
  'Streets': streets,
  'OpenTopoMap': otm,
  'Esri_WorldImagery': esriworldimagery
};

var overlays = {
  'Tmpt Makan Enak': tmptmknenak
};

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);


var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.');
var rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');

var KabdanKota = L.layerGroup([crownHill, rubyHill]);


/* Nama Checkbox*/
layerControl.addBaseLayer(satellite, 'Satellite');
layerControl.addOverlay(KabdanKota, 'Kab dan Kota');