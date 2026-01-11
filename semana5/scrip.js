const inputUrl = document.getElementById("imageUrl");
const addBtn = document.getElementById("addImage");
const deleteBtn = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let selectedImage = null;

/* RUTA CORRECTA DE LA IMAGEN */
const DEFAULT_IMAGE = "assets/imagen3.jpg";

/* Agregar imagen */
addBtn.addEventListener("click", () => {
    const url = inputUrl.value.trim() || DEFAULT_IMAGE;

    const img = document.createElement("img");
    img.src = url;

    img.addEventListener("click", () => {
        selectImage(img);
    });

    gallery.appendChild(img);
    inputUrl.value = "";
});

/* Seleccionar imagen */
function selectImage(img) {
    document.querySelectorAll(".gallery img").forEach(image => {
        image.classList.remove("selected");
    });

    img.classList.add("selected");
    selectedImage = img;
}

/* Eliminar imagen */
deleteBtn.addEventListener("click", () => {
    if (selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    } else {
        alert("Seleccione una imagen primero");
    }
});

/* Tecla Delete */
document.addEventListener("keydown", (e) => {
    if (e.key === "Delete" && selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    }
});

