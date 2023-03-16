let map = L.map('map').setView([-41.355652, -71.095709], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


document.getElementById('selectLocation').addEventListener('change', function search(e) {
  let coord = (e.target.value.split(","))
  let marker = L.marker(coord).addTo(map)
  marker.bindPopup(e.target.value)
  map.flyTo(coord, 18)
})

