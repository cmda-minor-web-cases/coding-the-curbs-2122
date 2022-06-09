// if (window.location.href.indexOf("timelist") > -1) {
var footerButton1 = document.getElementById('footer-button-1')
var footerButton2 = document.getElementById('footer-button-2')

footerButton1.classList.add('active')
footerButton2.classList.remove('active')

const checkBoxLimit = () => {
  var checkBoxGroup = document.forms['checkTime']['time']
  var checkBoxButton = document.getElementById("btn")
  var maxAantal = document.getElementById("maxAantal")
  checkBoxButton.disabled = true;
  var limit = 2;
  for (var i = 0; i < checkBoxGroup.length; i++) {
    checkBoxGroup[i].onclick = function () {
      var checkedcount = 0;
      for (var i = 0; i < checkBoxGroup.length; i++) {
        checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
      }
      if (checkedcount > limit) {
        console.log("You can select maximum of " + limit + " checkboxes.");
        maxAantal.innerHTML = "Je kan maar maximaal 2 tijden selecteren";
        this.checked = false;
        maxAantal.style.color = 'red';
      }
      if (checkedcount >= 1) {
        checkBoxButton.disabled = false;
      } else {
        checkBoxButton.disabled = true;
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
// }

if (window.location.href.indexOf("manage") > -1) {
  footerButton1.classList.add('active')
  footerButton2.classList.remove('active')
}