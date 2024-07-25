;(function () {
  // NOTE: These are more flexible when they are arrays (thus, Array.from())
  var btnEls = Array.from(document.querySelectorAll('.button'))
  var msgEls = Array.from(document.querySelectorAll('messagesDisplay'))

  function handleButtonClick(event) {
    var btnEl = event.target
    btnEl.disabled = true // optional
    btnEl.dataset.toggled = 'true' // using the DOM to hold data

    if (btnEls.some(function (el) {
      return el.dataset.toggled !== 'true'
    })) return

    msgEls.forEach(function (el) {
      el.textContent = 'Congratulations you clicked on all of the buttons'
    })
  }

  // Our "onclick" equivalent
  btnEls.forEach(function (el) {
    el.addEventListener('click', handleButtonClick)
  })
})()