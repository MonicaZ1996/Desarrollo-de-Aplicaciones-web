const inputUrl = document.getElementById("imageUrl");
const addBtn = document.getElementById("addImage");
const deleteBtn = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let selectedImage = null;

/* 🔹 IMÁGENES QUE YA ESTÁN EN assets */
const defaultImages = [
    "assets/img/imagen4.jpg",
    "assets/img/imagen3.jpg",
    "assets/img/imagen5.jpg"
];

/* 🔹 Cargar imágenes automáticamente al iniciar */
window.addEventListener("load", () => {
    defaultImages.forEach(path => {
        createImage(path);
    });
});

/* 🔹 Crear imagen (función reutilizable) */
function createImage(path) {
    const img = document.createElement("img");
    img.src = path;

    img.addEventListener("click", () => {
        selectImage(img);
    });

    gallery.appendChild(img);
}

/* 🔹 Agregar imagen desde el input */
addBtn.addEventListener("click", () => {
    const url = inputUrl.value.trim();

    if (url === "") {
        alert("Escribe una ruta válida, ejemplo: assets/imagen1.jpg");
        return;
    }

    createImage(url);
    inputUrl.value = "";
});

/* 🔹 Seleccionar imagen */
function selectImage(img) {
    document.querySelectorAll(".gallery img").forEach(image => {
        image.classList.remove("selected");
    });

    img.classList.add("selected");
    selectedImage = img;
}

/* 🔹 Eliminar imagen seleccionada */
deleteBtn.addEventListener("click", () => {
    if (selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    } else {
        alert("Seleccione una imagen primero");
    }
});

/* 🔹 Eliminar con tecla Delete */
document.addEventListener("keydown", (e) => {
    if (e.key === "Delete" && selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    }
});


