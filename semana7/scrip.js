// Arreglo de productos
const productos = [
    {
        nombre: "Laptop",
        precio: 800,
        descripcion: "Laptop para uso académico"
    },
    {
        nombre: "Mouse",
        precio: 20,
        descripcion: "Mouse inalámbrico"
    },
    {
        nombre: "Teclado",
        precio: 35,
        descripcion: "Teclado mecánico"
    }
];

// Referencias al DOM
const lista = document.getElementById("listaProductos");
const botonAgregar = document.getElementById("btnAgregar");

// Función para renderizar la lista de productos
function renderizarProductos() {
    lista.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        `;
        lista.appendChild(li);
    });
}

// Mostrar productos al cargar la página
renderizarProductos();

// Evento para agregar un nuevo producto
botonAgregar.addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Nuevo Producto",
        precio: 50,
        descripcion: "Producto agregado dinámicamente"
    };

    productos.push(nuevoProducto);
    renderizarProductos();
});
