const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const tokoGroup = L.layerGroup();
const sekolahCluster = L.markerClusterGroup();
const masjidCluster = L.markerClusterGroup();
const tokoCluster = L.markerClusterGroup();





const iconSekolah = L.icon({
    iconUrl: 'assets/leaflet/images/school.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
    iconUrl: 'assets/leaflet/images/mosquee.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconToko = L.icon({
    iconUrl: 'assets/leaflet/images/grocery.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconpuskesmas = L.icon({
    iconUrl: 'assets/leaflet/images/hospital-building.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});



// ===================== Marker ===========================
var masjid = [
    L.marker([-8.688668823436734, 116.24717741884554], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="assets/leaflet/images/masjidpuyung1.jpg">`),
    L.marker([-8.684192762672247, 116.24106461774727], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(` <img src="assets/leaflet/images/masjid3.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];

var sekolah = [
    L.marker([-8.705226938595574, 116.23691734315179], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="assets/leaflet/images/sdn1pengenjek.jpg">`),
    L.marker([-8.710826112900584, 116.24037197340691], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(` <img src="assets/leaflet/images/miberembeng.jpg">`),
];
var toko = [
    L.marker([-8.688547827021935, 116.24499605642471], { icon: iconToko }).addTo(tokoCluster).bindPopup(` <img src="assets/leaflet/images/adamart.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var streets  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    id: 'mapbox.streets',   
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var satelit = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    id: 'mapbox.streets',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

const map = L.map('map', {
    center: [-8.634173884984019, 116.24921668372933],
    zoom: 13,
    layers: [satelit, sekolahCluster, masjidCluster, tokoCluster]
});
//=============================================


//================= Cluster ==================
map.addLayer(sekolahCluster);
map.addLayer(masjidCluster);
map.addLayer(tokoCluster);
//=============================================



const baseLayers = {
    'streets': streets,
    'satelit': satelit,
};

const overlays = {
    'Sekolah': sekolahCluster,
    'Masjid': masjidCluster,
    'Toko': tokoCluster,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);



//  Menampilkan geojSON
L.geoJSON(gis).addTo(map);