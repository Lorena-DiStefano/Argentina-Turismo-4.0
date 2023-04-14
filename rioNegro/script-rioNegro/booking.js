
let idCity
let search = true

const printHotel = async () => {

  const card_cont = document.getElementById('api')
  const radio = document.getElementById('radioHotel')
  idCity = document.getElementById('city').value

  try {
    const respuesta = await fetch(`../assets-rioNegro/api.json`)
    const data = await respuesta.json()
    let apiHotels = [...data]

    cityApi = apiHotels.filter((e) => e.city.includes(idCity))

    cityApi.forEach(e => {
      let host = document.createElement('div')
      host.clasName = "card_host_cont"
      host.innerHTML = `    
                  <div class="card_host">          
                   <img src="${e.image}" alt="${e.name}">
                   <h5>${e.name}</h5>
                 <div class="card_host_info">
                   <p><span>${e.address}-${e.city}-${e.prov}</span><br>
                   ${e.info}</p>
                  </div>
                  </div>`
      card_cont.append(host)

      let divRadio = document.createElement('div')
      divRadio.className = 'divRadio'
      let labelHotel = document.createElement('label')
      labelHotel.className = 'radioHotel'
      labelHotel.for = 'hotel'
      labelHotel.textContent = `${e.name}`
      let inputHotel = document.createElement('input')
      inputHotel.type = 'radio'
      inputHotel.name = "hotel"
      inputHotel.className = 'radioHotel'
      inputHotel.value = `${e.name}`
      inputHotel.checked = true
      radio.append(divRadio)
      divRadio.append(labelHotel)
      divRadio.append(inputHotel)
    })

    const card_title = document.getElementById('card_title')
    card_title.textContent = `Hoteles en ${idCity}`
    const radio_title = document.getElementById('radio_title')
    let radioH3 = document.createElement('h3')
    radioH3.className = 'radio_title_h3'
    radioH3.textContent = "Elije el Hotel"
    radio_title.append(radioH3)

    search = false

  } catch (error) {
    console.log(error)
  }
}

const btnSearch = document.getElementById('btn_city')
btnSearch.onclick = (e) => { e.preventDefault(), search === true ? printHotel() : window.location.reload() }

//=================================================================//
const getInfo = (event) => {
  event.preventDefault()
  let hotel = document.querySelector('input[name="hotel"]:checked').value
  let roomKind = document.querySelector('input[name="room"]:checked').value
  let firstName = (document.getElementById('firstName').value).toUpperCase()
  let lastName = (document.getElementById('lastName').value).toUpperCase()
  let phone = document.getElementById('phone').value
  let email = document.getElementById('email').value
  let checkIn = document.getElementById("checkIn").value
  let checkOut = document.getElementById("checkOut").value
  let guestQ = document.getElementById('guestQ').value
  let roomQ = document.getElementById('roomQ').value
  let message = document.getElementById('message').value

  const data = document.getElementById('data')
  const modalData = document.createElement('div')
  modalData.innerHTML = `
<div>
<p><span>${firstName} ${lastName}</span>,<br>Teléfono: <span>${phone}</span><br>e-mail: <span>${email}</span></p>
</div>
<div>
<p>En vistas de su visita a la ciudad de <span>${idCity}</span>, Provincia de <span>Río Negro</span>.<br>Solicita la reserva de <span>${roomQ}</span> habitación(s) denominada(s) <span>${roomKind}</span>.<br>En <span>"${hotel}"</span>.<br>Se hospedaran <span>${guestQ}</span> persona(s).<br>
Con fecha de ingreso <span>${checkIn}</span> y de salida <span>${checkOut}</span>.<br>En su mensaje refiere: <span>${message}</span>.</p>
</div>
<div class="greeting">
<p>El equipo de <span>Argentina Turismo 4.0</span> se contactará a la brevedad para confirmar su reserva.</p>
<p>Saludos Cordiales</p>
<p><span>La Scaloneta</span></p>
</div>
<button type="submit" class="btn" id="btn_close">cerrar</button>`
  data.append(modalData)
  openModal()
  const btn_close = document.getElementById('btn_close')
  btn_close.onclick = () => { window.location.reload() }
}

const btn_print = document.getElementById('btn_print')
btn_print.onclick = () => { window.print() }

const btn_submit = document.getElementById('btn_submit')
btn_submit.addEventListener('click', getInfo)

//=====================================================================//

const secOne = document.getElementById('section_one')
const secTwo = document.getElementById('section_two')
const secThree = document.getElementById('section_three')
const secFour = document.getElementById('section_four')

document.getElementById('btn_fwd1').addEventListener('click', (e) => {
  e.preventDefault()
  secOne.style.display = "none"
  secTwo.style.display = "block"
})

document.getElementById('btn_back2').addEventListener('click', (e) => {
  e.preventDefault()
  secOne.style.display = "block"
  secTwo.style.display = "none"
})

document.getElementById('btn_fwd2').addEventListener('click', (e) => {
  e.preventDefault()
  secTwo.style.display = "none"
  secThree.style.display = "block"
})

document.getElementById('btn_back3').addEventListener('click', (e) => {
  e.preventDefault()
  secTwo.style.display = "block"
  secThree.style.display = "none"
})

document.getElementById('btn_fwd3').addEventListener('click', (e) => {
  e.preventDefault()
  secThree.style.display = "none"
  secFour.style.display = "block"
})

document.getElementById('btn_back4').addEventListener('click', (e) => {
  e.preventDefault()
  secThree.style.display = "block"
  secFour.style.display = "none"
})









