if (window.location.href.indexOf("timelist") > -1) {
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