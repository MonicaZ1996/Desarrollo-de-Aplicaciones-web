const galeria = document.getElementById("galeria");
const inputUrl = document.getElementById("urlImagen");
const btnAgregar = document.getElementById("agregar");
const btnEliminar = document.getElementById("eliminar");

let imagenSeleccionada = null;

// Seleccionar imagen
galeria.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        document.querySelectorAll(".galeria img").forEach(img => {
            img.classList.remove("seleccionada");
        });
        e.target.classList.add("seleccionada");
        imagenSeleccionada = e.target;
    }
});

// Agregar imagen por URL
btnAgregar.addEventListener("click", () => {
    if (inputUrl.value !== "") {
        const nuevaImagen = document.createElement("img");
        nuevaImagen.src = inputUrl.value;
        galeria.appendChild(nuevaImagen);
        inputUrl.value = "";
    }
});

// Eliminar imagen seleccionada
btnEliminar.addEventListener("click", () => {
    if (imagenSeleccionada) {
        imagenSeleccionada.remove();
        imagenSeleccionada = null;
    }
});



