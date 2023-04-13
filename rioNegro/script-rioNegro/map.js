let map = L.map('map').setView([-40.039678, -67.250494], 7);

let osm =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker
marker = L.marker([-41.071300, -71.161822], { title: 'Dina Huapi' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_dinaHuapi.jpg"  alt="Dina Huapi"><h6>Dina Huapi</h6>')
marker = L.marker([-41.966113, -71.529783], { title: 'El Bolsón' }).addTo(map).bindPopup(' <img src="../img-rioNegro/img_map/map_bolson.jpg" alt="bolsón"><h6>El Bolsón</h6>')
marker = L.marker([-41.600367, -71.7560286], { title: 'El Manso' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_manso.jpg" alt="manso"><h6>El Manso</h6>')
marker = L.marker([-41.141197, -71.302846], { title: 'Bariloche' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_bariloche.jpg"alt="bariloche"><h6>Bariloche</h6>')
marker = L.marker([-41.0462141, -62.8443977], { title: 'El Cóndor' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_condor.jpg" alt="El Cóndor"><h6>El Cóndor</h6>')
marker = L.marker([-40.8079873, -65.1191809], { title: 'Las Grutas' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_grutas.jpg" alt="Las Grutas"><h6>Las Grutas</h6>')
marker = L.marker([-41.629938, -65.025008], { title: 'Playas Doradas' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_doradas.jpg" alt="playas doradas"><h6>Playas Doradas</h6>')
marker = L.marker([-40.8250187, -63.0351592], { title: 'Viedma' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_viedma.jpg" alt="viedma"><h6>Viedma</h6>')
marker = L.marker([-39.7168269, -68.5189793], { title: 'Parque Cretácico' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_parqueC.jpg" alt="Parque Cretácico"><h6>P. Cretácico</h6>')
marker = L.marker([-39.115953, -67.6325889], { title: 'Paso Córdoba' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_cordoba.jpg" alt="Paso Córdoba"><h6>P. Córdoba</h6>')
marker = L.marker([-41.4999981, -67.2675096], { title: 'Meseta Somuncurá' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_somuncura.jpg"  alt="somuncurá"><h6>Meseta Somuncura</h6>')
marker = L.marker([-40.6820598, -66.1592288], { title: 'Bosque Petrificado' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_valcheta.jpg" alt="valcheta" ><h6>Bosque Petrificado</h6>')
marker = L.marker([-41.0751034, -71.1463962], { title: 'Cavernas del Viejo Volcán' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_cavernas.jpg" alt="Viejo Volcán"><h6>Viejo Volcán</h6>')
marker = L.marker([-41.0001165, -71.5022282], { title: 'Pque.Nahuel Huapi' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_nahuelHuapi.jpg" alt="Pque.Nahuel Huapi"><h6>Pque.Nahuel Huapi</h6>')
marker = L.marker([-41.9674097, -71.4745496], { title: 'Cerro Piltriquitron' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_piltri.jpg" alt="Cerro Piltiquitron"><h6>Piltriquitron</h6>')
marker = L.marker([-41.1833311, -71.4675096], { title: 'Cerro Catedral' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_catedral.jpg" alt="Cerro Catedral"><h6>Cerro Catedral</h6>')
marker = L.marker([-41.1561633, -63.2170493], { title: 'Punta Bermeja' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_bermeja.jpg" alt="Punta Bermeja"><h6>Punta Bermeja</h6>')
marker = L.marker([-41.154577, -63.125800], { title: 'La Lobería' }).addTo(map).bindPopup('<img src="../img-rioNegro/img_map/map_loberia.jpg" alt="La Lobería"><h6>La Lobería</h6>')

  
 