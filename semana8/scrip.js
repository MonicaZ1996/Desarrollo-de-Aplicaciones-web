// Botón de alerta
document.getElementById("btnAlerta").addEventListener("click", function () {
    alert("Hola Mónica 😊 ¡Esta es tu alerta personalizada!");
});

// Validación del formulario
document.getElementById("formContacto").addEventListener("submit", function (e) {
    e.preventDefault();

    // Campos
    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("correo");
    let mensaje = document.getElementById("mensaje");

    // Errores
    let errorNombre = document.getElementById("errorNombre");
    let errorCorreo = document.getElementById("errorCorreo");
    let errorMensaje = document.getElementById("errorMensaje");

    let valido = true;

    // Validación nombre
    if (nombre.value.trim() === "") {
        errorNombre.classList.remove("d-none");
        valido = false;
    } else {
        errorNombre.classList.add("d-none");
    }

    // Validación correo
    let patronCorreo = /\S+@\S+\.\S+/;
    if (!patronCorreo.test(correo.value)) {
        errorCorreo.classList.remove("d-none");
        valido = false;
    } else {
        errorCorreo.classList.add("d-none");
    }

    // Validación mensaje
    if (mensaje.value.trim() === "") {
        errorMensaje.classList.remove("d-none");
        valido = false;
    } else {
        errorMensaje.classList.add("d-none");
    }

    if (valido) {
        alert("¡Formulario enviado con éxito!\nGracias por tu mensaje, Mónica.");
        nombre.value = "";
        correo.value = "";
        mensaje.value = "";
    }
});
