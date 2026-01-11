const gallery = document.getElementById("gallery");
const addBtn = document.getElementById("addImages");
const deleteBtn = document.getElementById("deleteImage");

let selectedImage = null;

/* RUTAS DE LAS IMÁGENES */
const images = [
    "assets/img/imagen3.jpg",
    "assets/img/imagen4.jpg",
    "assets/img/imagen5.jpg"
];

/* Cargar imágenes */
addBtn.addEventListener("click", () => {
    gallery.innerHTML = "";

    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;

        img.addEventListener("click", () => {
            selectImage(img);
        });

        gallery.appendChild(img);
    });
});

/* Seleccionar imagen */
function selectImage(img) {
    document.querySelectorAll(".gallery img").forEach(i => {
        i.classList.remove("selected");
    });

    img.classList.add("selected");
    selectedImage = img;
}

/* Eliminar imagen seleccionada */
deleteBtn.addEventListener("click", () => {
    if (selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    } else {
        alert("Seleccione una imagen primero");
    }
});


