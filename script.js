var Stamen_TonerLabels = L.tileLayer(
  'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
  });
var tmptmknenak = L.layerGroup();
var mnasgor = L.marker({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
  shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var mburjo = L.marker([-7.056004468211421, 110.39658764120955]).bindPopup('Burjo Laskar 2').addTo(tmptmknenak);
var mnasgor = L.marker([-7.055878173266243, 110.3947063596325]).bindPopup('Nasi Goreng Berhias Brebes').addTo(
  tmptmknenak);
var mwrpenyet = L.marker([-7.047224871391219, 110.38991797128035]).bindPopup('WrpenyetLombokRawitUnnes').addTo(
  tmptmknenak);
/* Pop Up */

/* Pop Up */

/* Pop Up */
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