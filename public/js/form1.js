/* eslint-disable no-undef */
function register(elemName, message) {
  let elem = document.getElementById(elemName)
  elem.setCustomValidity(message)
  elem.addEventListener("input", () => {
    elem.nextElementSibling.textContent = message
    errorMessage(elem, message)
  })
}

function errorMessage(elem, message) {
  if (elem.validity.valueMissing) {
    elem.setCustomValidity(message)
  } else {
    elem.setCustomValidity("")
  }
}

register('firstName', "First name is required")
register('lastName', "Last name is required")
register('address', "Address is required")
register('city', "City is required")
register('province', "Province is required")
register('postalCode', "Postal code is required")
