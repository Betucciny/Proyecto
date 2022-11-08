const nombre = document.querySelector('#nameInput');
const apellido = document.querySelector('#apellidoInput');
const mailAdress = document.querySelector('#emailInput');

const nombreError = document.querySelector('#nameError');
const apellidoError = document.querySelector('#apellidoError');
const mailAdressError = document.querySelector('#emailError');

const btn = document.querySelector('#button-enviar');

btn.addEventListener('click', (event) => {
    const x = validateEmpty(nombre.value, nombre, nombreError, 'Nombre no puede estar vacio');
    const y = validateEmpty(apellido.value, apellido, apellidoError, 'Apellido no puede estar vacio');
    const z = validateEmail(mailAdress.value, mailAdress, mailAdressError);
    if (!(x && y && z)) {
        event.preventDefault();
    }
})


function validateEmpty(valueInput, divInput, divError, nameInput) {
    console.log(valueInput.length);
    if (valueInput.length === 0) {
        showError(divInput, divError, nameInput);
        return true
    } else {
        hideError(divInput, divError);
        return true
    }
}

function validateEmail(valueInput, divInput, divError) {
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if (regExp.test(valueInput) === true) {
        hideError(divInput, divError);
        return true
    } else {
        showError(divInput, divError, 'Parece que esto no es un e-mail');
        return false
    }
}

function showError(divInput, divError, error) {
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<img class="icon-error" src="../images-index/icon-error.svg">
                        <p class="error">${error}</p>`;
}

function hideError(divInput, divError) {
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ``;
}
