const btnBuscar = document.getElementById('btn_city')
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
    // const radioHost = document.getElementById('radioHotel')    
    // radioHost.style.display = 'block'

    // const form_info = document.getElementById('form_info')
    // form_info.style.display = 'block'

    window.location.href = "#listHostel";

  } catch (error) {
    console.log(error)
  }
}

let listResult;

const getInfo = (event) => {
  event.preventDefault()
  let name = document.getElementById('name')
  localStorage.setItem('name', name.value)
  let lastName = document.getElementById('lastName')
  localStorage.setItem('lastName', lastName.value)
  let country = document.getElementById('country')
  localStorage.setItem('country', country.value)
  let phone = document.getElementById('phone')
  localStorage.setItem('phone', phone.value)
  let email = document.getElementById('email')
  localStorage.setItem('email', email.value)
  localStorage.setItem('city', idCity)
  let hotel = document.querySelector('input[name="hotel"]:checked')
  localStorage.setItem('hotel', hotel.value)
  let checkIn = document.getElementById("checkIn")
  localStorage.setItem('checkIn', checkIn.value)
  let checkOut = document.getElementById("checkOut")
  localStorage.setItem('checkOut', checkOut.value)
  let roomKind = document.querySelector('input[name="room"]:checked')
  localStorage.setItem('roomKind', roomKind.value)
  let roomQ = document.getElementById('guestQ')
  localStorage.setItem('roomQ', roomQ.value)
  let guestQ = document.getElementById('roomQ')
  localStorage.setItem('guestQ', guestQ.value)
  let mge = document.getElementById('mge')
  localStorage.setItem('mge', mge.value)
}



btnBuscar.addEventListener('click', printHotel)

const btn_form = document.getElementById('btn_form')

btn_form.addEventListener('click', getInfo)
