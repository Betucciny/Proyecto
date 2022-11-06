const nombre = document.querySelector('#nameInput');
const apellido = document.querySelector('#apellidoInput');
const mailAdress = document.querySelector('#emailInput');
const password = document.querySelector('#passInput');

const nombreError = document.querySelector('#nameError');
const apellidoError = document.querySelector('#apellidoError');
const mailAdressError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passError');

const btn = document.querySelector('#button');
btn.addEventListener('click', (event)=>{
  event.preventDefault();
  validateEmpty(nombre.value, nombre, nombreError, 'Nombre no puede estar vacio');
  validateEmpty(apellido.value, apellido, apellidoError, 'Apellido no puede estar vacio');
  validateEmail(mailAdress.value, mailAdress, mailAdressError);
  validateEmpty(password.value, password, passError, 'Contraseña no puedeestar vacio');
})

function validateEmpty(valueInput, divInput, divError, nameInput) {
  console.log(valueInput.length);
  if(valueInput.length === 0) {
    showError(divInput, divError, nameInput);
  } else {
      hideError(divInput, divError);
  }
}

function validateEmail(valueInput, divInput, divError) {
  let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  if(regExp.test(valueInput) === true) {
    hideError(divInput, divError);
  } else {
    showError(divInput, divError, 'Parece que esto no es un e-mail');
  }
}

function showError(divInput, divError, error) {
  divInput.style.border = '1px solid red';
  divError.innerHTML = `<img class="icon-error" src="images-index/icon-error.svg">
                        <p class="error">${error}</p>` ;
}

function hideError(divInput, divError) {
  divInput.style.border = '1px solid hsl(246, 25%, 77%)';
  divError.innerHTML = ``;
}
