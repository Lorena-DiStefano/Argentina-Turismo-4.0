const imgData = 'data:image/png;base64,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'

const first_sec = document.getElementById('first_sec')
const second_sec = document.getElementById('second_sec')
const noteContact = document.getElementById('noteContact')
const textContact = document.getElementById('textContact')

document.getElementById('fwd1_btn').addEventListener('click', (e) => {
  e.preventDefault()
  first_sec.style.display = "none"
  second_sec.style.display = "block"
})

document.getElementById('back2_btn').addEventListener('click', (e) => {
  e.preventDefault()
  first_sec.style.display = "block"
  second_sec.style.display = "none"
})

document.getElementById('contact_btn').addEventListener('click', (e) => {
  e.preventDefault()

  let fullName = document.getElementById('fullName').value
  let celPhone = document.getElementById('celPhone').value
  let email = document.getElementById('email').value
  let message = document.getElementById('message').value

  textContact.innerHTML = `
  <div class="doc_text">
  <h2>Formulario de Contacto</h2>
  <div><b>${fullName}</b><br><b>Teléfono:  </b>${celPhone}<br><b>email:  </b>${email}<br><b>Consulta:  </b>${message}</div>  
  </div>`

  second_sec.style.display = "none"
  noteContact.style.display = "block"

  let doc = new jsPDF('p');
  doc.addImage(imgData, 'PNG', 30, 10, 30, 30);
  doc.text('Argentina Turismo 4.0', 70, 20);
  doc.setFontSize(10),
    doc.text('Salta 440 - CABA', 70, 25)
    doc.text('info_at4.0@argentinaturismo4.0.com', 70, 30);
  doc.setFontSize(18),
    doc.text(fullName, 35, 60)
  doc.setFontSize(13)
  doc.text('Teléfono:', 35, 70)
    doc.text(celPhone, 60, 70)
  doc.text('email:', 35, 80)
    doc.text(email, 60, 80)
  doc.text('Consulta:', 35, 90)
  doc.setTextColor(43, 77, 77),
    doc.text(message, 35, 100)

  doc.save('ArgentinaTurismo.pdf')

  setTimeout(() => {
    window.location.reload()
  }, 7000);

})