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
var markerIcon = L.icon({
  iconUrl: 'https://lh5.googleusercontent.com/p/AF1QipPCTqbmer8qaIq3xSb6RA6rgM19uUJCHpmcmvot=w114-h86-k-no',
  iconSize: [30, 30], // ukuran gambar logo marker
  iconAnchor: [16, 32] // titik anchor pada gambar logo marker
});

var marker = L.marker([-7.057946668691204, 110.39740750550186], {
  title: "Bakso dan Mie Ayam Bosku",
  icon: markerIcon
}).addTo(tmptmknenak);

marker.on('click', function () {

  var win = L.control.window(map, {
      title: 'Bakso dan Mie Ayam Bosku',
      maxWidth: 800,
      modal: true
    })

    .content(
      '<img src="https://lh5.googleusercontent.com/p/AF1QipPCTqbmer8qaIq3xSb6RA6rgM19uUJCHpmcmvot=w408-h306-k-no" alt="Image">' +
      '<h2>Daftar Harga</h2>' +
      '<p><a href="https://www.google.com/maps/place/Bakso+dan+Mie+Ayam+Bosku/@-7.0579994,110.3973732,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNoI3it7ydj9_dshRotEklm5dYBHAYAozG0ZQI2!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNoI3it7ydj9_dshRotEklm5dYBHAYAozG0ZQI2%3Dw203-h360-k-no!7i1080!8i1920!4m20!1m10!3m9!1s0x2e70896cfc62ef6d:0xd10f4c915ad7e587!2sBakso+dan+Mie+Ayam+Bosku!8m2!3d-7.0579994!4d110.3973732!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11f61ggnkt!3m8!1s0x2e70896cfc62ef6d:0xd10f4c915ad7e587!8m2!3d-7.0579994!4d110.3973732!10e5!14m1!1BCgIYIQ!16s%2Fg%2F11f61ggnkt?entry=ttu#" target="_blank">Lihat daftar harga</a></p>' +
      '<h2>Informasi Lokasi</h2>' +
      '<p><strong>Nama:</strong> Jude Bellingham</p>' +
      '<p><strong>Alamat:</strong> W9RW+RW5, Patemon, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50228</p>' +
      '<p><strong>Koordinat:</strong> -7.057946668691204, 110.39740750550186</p>' +

      '<h2>Google Maps</h2>' +
      '<p><a href="https://www.google.com/maps?q=-7.057946668691204,110.39740750550186" target="_blank">Lihat di Google Maps</a></p>' +

      '<h2>Deskripsi</h2>' +
      '<p>Bakso The best di daerah unnes rame setiap mau makan rame teruss</p>'
    )
    .prompt({
      callback: function () {
        alert('Klik logo ikonnya lagi yak kalau mau liat info :)');
      }
    })
    .show();
});


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


/*Tag Filter Button*/
(function (argument) {
  var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {
      maxZoom: 18,
      attribution: osmAttrib
    });
  var map = L.map('map').setView([36.86, 30.75], 12).addLayer(osm);

  var mburjo = L.marker([-7.056004468211421, 110.39658764120955], {
    tags: ['tmptmknenak']
  }).addTo(map).bindPopup('tmptmknenak');
  var slowMarker = L.marker([36.8967740487, 30.7107782364], {
    tags: ['slow']
  }).addTo(map).bindPopup('slow');
  var bothMarker = L.marker([36.8881768737, 30.7024331594], {
    tags: ['fast', 'slow']
  }).addTo(map).bindPopup('fast & slow');

  L.Control.tagFilterButton({
    data: ['fast', 'slow', 'none'],
    icon: '<img src="filter.png">',
    filterOnEveryClick: true
  }).addTo(map);


});
/*Tag Filter Button*/