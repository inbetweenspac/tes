;(function () {
  var btnEls = Array.from(document.querySelectorAll('.button'))
  var msgEls = Array.from(document.querySelectorAll('messagesDisplay'))

  function handleButtonClick(event) {
    var btnEl = event.target
    btnEl.disabled = true 
    btnEl.dataset.toggled = 'true' 

    if (btnEls.some(function (el) {
      return el.dataset.toggled !== 'true'
    })) return

    msgEls.forEach(function (el) {
      el.textContent = 'Congratulations you clicked on all of the buttons'
    })
  }

  btnEls.forEach(function (el) {
    el.addEventListener('click', handleButtonClick)
  })
})()