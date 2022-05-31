if (window.location.href.indexOf("timelist") > -1) {
  document.getElementById('footer-button-1').classList.add('active')
  document.getElementById('footer-button-2').classList.remove('active')
  const checkBoxLimit = () => {
    var checkBoxGroup = document.forms['checkTime']['time'];			
    var limit = 2;
    for (var i = 0; i < checkBoxGroup.length; i++) {
      checkBoxGroup[i].onclick = function() {
        var checkedcount = 0;
        for (var i = 0; i < checkBoxGroup.length; i++) {
          checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
        }
        if (checkedcount > limit) {
          console.log("You can select maximum of " + limit + " checkboxes.");
          alert("You can select maximum of " + limit + " checkboxes.");						
          this.checked = false;
        }
      }
    }
  }

  checkBoxLimit()

  let time = {}

  const addTimeDB = () => {

    const fulltime = document.querySelector('').value

    time.push(fulltime)
  }
}

if (window.location.href.indexOf("manage") > -1) {
  document.getElementById('footer-button-2').classList.add('active')
  document.getElementById('footer-button-1').classList.remove('active')

  // Selecteer alles met het id verwijderButton uit het document en voeg aan elke een EventListener toe met click en de functie verwijderGame
// document.querySelectorAll('#verwijderButton').forEach(button => button.addEventListener('click', verwijderReservation))

// function verwijderReservation(clickevent) {
//   // Hier haal je het id op en doe je het in de url, dan pas je de method DELETE toe
//   fetch('/delete?id=' + clickevent.target.dataset.id, {
//       method: 'DELETE'
//     })
//     .then(response => {
//       return response.text()

//     })
// }
}