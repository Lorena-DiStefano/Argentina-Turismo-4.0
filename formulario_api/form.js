
let idCity;


const printHotel = async () => {

  const contenedor = document.getElementById('api')
  const radio = document.getElementById('radioHotel')

  idCity = document.getElementById('city').value

  try {
    const respuesta = await fetch(`./api.json`)
    const data = await respuesta.json()
    let apiAlojamiento = [...data]

    cityApi = apiAlojamiento.filter((e) => e.city.includes(idCity))
    console.log(cityApi)


    cityApi.forEach(e => {
      let host = document.createElement('div')
      host.clasName = "card_host_cont"
      host.innerHTML = `
                <div class="card_host">
                  <div class="card_host_img">
                   <img src="${e.image}")>
                   </div>
                 <div class="card_host_info">
                  <div class="card_host_title">
                   <h5>${e.name}</h5>
                   </div>
                   <div class="card_host_text">
                   <p><span>${e.address}-${e.city}-${e.prov}</span><br>
                   ${e.info}</p>
                  </div>
                  </div>
              </div>`
      contenedor.append(host)

      let inputHotel = document.createElement('input')
      inputHotel.type = 'radio'
      inputHotel.name = "hotel"
      inputHotel.className = 'radioHotel'
      inputHotel.value = `${e.name}`
      let labelHotel = document.createElement('label')
      inputHotel.className = 'radioHotel'
      labelHotel.for = 'hotel'
      labelHotel.textContent = `${e.name}`

      radio.append(inputHotel)
      radio.append(labelHotel)
    })

    const card_title = document.getElementById('card_title')
    card_title.textContent = `Hoteles en ${idCity}`
    const radio_title = document.getElementById('radio_title')
    let radioH3 = document.createElement('h3')
    radioH3.className = 'radio_title_h3'
    radioH3.textContent = "Elije el Hotel"
    radio_title.append(radioH3)

    const form_info = document.getElementById('form_info')
    form_info.style.display = 'flex'

    window.location.href = "#listHostel";

  } catch (error) {
    console.log(error)
  }
}

const btnBuscar = document.getElementById('btn_city')
btnBuscar.addEventListener('click', printHotel)


const openModal = () => {
  modal.showModal()
}

const getInfo = (event) => {
event.preventDefault()
let hotel = document.querySelector('input[name="hotel"]:checked').value
let roomKind = document.querySelector('input[name="room"]:checked').value
let firstName = document.getElementById('name').value
let lastName = document.getElementById('lastName').value
let country = document.getElementById('country').value
let phone = document.getElementById('phone').value
let email = document.getElementById('email').value
let checkIn = document.getElementById("checkIn").value
let checkOut = document.getElementById("checkOut").value
let guestQ = document.getElementById('guestQ').value
let roomQ = document.getElementById('roomQ').value
let mge = document.getElementById('mge').value

const data = document.getElementById('data')
const modalData = document.createElement('div')
modalData.innerHTML = `
<div>
<p><span>${firstName} ${lastName}</span>, residente en <span>${country}</span>.<br>Teléfono: <span>${phone}</span><br>e-mail: <span>${email}</span></p>
</div>
<div>
En vistas de su visita a la ciudad de <span>${idCity}</span>, solicita la reserva de <span>${roomQ}</span> habitación(s) denominada(s) <span>${roomKind}</span> para <span>${guestQ}</span> persona(s), en <span>${hotel}</span>.</p>
<p>Con fecha de ingreso <span>${checkIn}</span>y de salida <span>${checkOut}</span>.</p>
<p>En su mensaje refiere: <span>${mge}</span>.</p>
</div>
<div class="greeting">
<p>El equipo de <span>Argentina Turismo 4.0</span> agradece su visita a nuestro sitio web.</p>
<p>Saludos Cordiales</p>
<p><span>La Scaloneta</span></p>
</div>
<div>
<button onclick="window.print()">Imprimir</button>
</div>`
data.append(modalData)
openModal()
}


const btn_form = document.getElementById('btn_form')
btn_form.addEventListener('click', getInfo)





const closeModal = () => {
  modal.closest()
}