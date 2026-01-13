const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const enviar = document.getElementById("enviar");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;

function validarCampo(input, condicion, mensaje) {
    const campo = input.parentElement;
    const small = campo.querySelector("small");

    if (condicion) {
        campo.classList.remove("error");
        input.classList.add("valido");
        input.classList.remove("invalido");
        small.textContent = "";
    } else {
        campo.classList.add("error");
        input.classList.add("invalido");
        input.classList.remove("valido");
        small.textContent = mensaje;
    }
}

function validarFormulario() {
    const valido =
        nombre.value.length >= 3 &&
        emailRegex.test(correo.value) &&
        password.value.length >= 8 &&
        passwordRegex.test(password.value) &&
        password.value === confirmar.value &&
        edad.value >= 18;

    enviar.disabled = !valido;
}

nombre.addEventListener("input", () => {
    validarCampo(nombre, nombre.value.length >= 3, "Mínimo 3 caracteres");
    validarFormulario();
});

correo.addEventListener("input", () => {
    validarCampo(correo, emailRegex.test(correo.value), "Correo inválido");
    validarFormulario();
});

password.addEventListener("input", () => {
    validarCampo(
        password,
        password.value.length >= 8 && passwordRegex.test(password.value),
        "Debe tener 8 caracteres, un número y un símbolo"
    );
    validarFormulario();
});

confirmar.addEventListener("input", () => {
    validarCampo(confirmar, confirmar.value === password.value, "No coinciden");
    validarFormulario();
});

edad.addEventListener("input", () => {
    validarCampo(edad, edad.value >= 18, "Debe ser mayor de 18");
    validarFormulario();
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulario validado correctamente");
});
