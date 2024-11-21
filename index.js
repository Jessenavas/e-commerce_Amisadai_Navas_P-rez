document.querySelector("h1").innerHTML = "Productos";

const data = [
    {
        "id": 1,
        "titulo": "Producto 1",
        "descripcion": "Descripción del producto 1.",
        "imagen_url": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg",
        "precio": 100,
        "categoria": "Quesos"  
    },
    {
        "id": 2,
        "titulo": "Producto 2",
        "descripcion": "Descripción del producto 2.",
        "imagen_url": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg",
        "precio": 150,
        "categoria": "Carnes" 
    },
    {
        "id": 3,
        "titulo": "Producto 3",
        "descripcion": "Descripción del producto 3.",
        "imagen_url": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg",
        "precio": 200,
        "categoria": "Verduras"  
    }
];

// Verificamos si el usuario está registrado
function checkRegistration() {
    const email = localStorage.getItem("email");  // Obtenemos el email del usuario desde localStorage
    if (!email) {  // Si no está registrado, borramos los datos asociados
        localStorage.removeItem("email");  // Elimina el email
        localStorage.removeItem("cart");  // Elimina el carrito de compras
        localStorage.removeItem("quantity");  // Elimina la cantidad del carrito
    }
}

// Llamamos a la función para verificar el registro al cargar la página
checkRegistration();

function generarTarjetas(productos) {
    const container = document.querySelector(".container");
    const row = document.createElement("div");
    row.classList.add("row");

    const tarjetas = productos.map(producto => 
        `<div class="col-md-4 mt-5">
            <div class="card">
                <img src="${producto.imagen_url}" class="card-img-top" alt="${producto.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${producto.titulo}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <a href="./producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>`
    );

    row.innerHTML = tarjetas.join('');
    container.innerHTML = ''; 
    container.appendChild(row);
}

// Aquí se agrega la promesa y el setTimeout
function cargarProductos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, 3000); // Simula un delay de 3 segundos
    });
}

// Inicia la carga de productos
cargarProductos().then(productos => {
    // Reemplaza el spinner con las tarjetas de productos
    const loader = document.getElementById("loader");
    loader.style.display = "none";  // Oculta el spinner
    generarTarjetas(productos);  // Muestra las tarjetas
});

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const clearButton = document.getElementById("clear-button");

searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const filterData = data.filter(producto => 
        producto.titulo.toLowerCase().includes(query) || 
        producto.descripcion.toLowerCase().includes(query)
    );
    generarTarjetas(filterData);
});

clearButton.addEventListener("click", () => {
    searchInput.value = '';
    generarTarjetas(data); 
});

const categorias = [...new Set(data.map(producto => producto.categoria))];

function generarBotonesCategorias() {
    const container = document.querySelector(".category-buttons-container");
    
    const verTodosButton = document.createElement("button");
    verTodosButton.classList.add("btn", "btn-secondary", "m-2");
    verTodosButton.textContent = "Ver Todos";
    verTodosButton.addEventListener("click", () => generarTarjetas(data));
    container.appendChild(verTodosButton);

    categorias.forEach(categoria => {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-primary", "m-2");  // Cambié btn-info a btn-primary
        button.textContent = categoria;
        button.addEventListener("click", () => filtrarPorCategoria(categoria));
        container.appendChild(button);
    });
}

function filtrarPorCategoria(categoria) {
    const productosFiltrados = data.filter(producto => producto.categoria === categoria);
    generarTarjetas(productosFiltrados);
}

generarBotonesCategorias();

// Mostrar el contador de productos en el carrito desde localStorage
function updateCartQuantity() {
    const quantity = JSON.parse(localStorage.getItem("quantity")) || 0;
    const cartIcon = document.getElementById("cartQuantity");
    cartIcon.textContent = quantity;
}

// Actualizamos el carrito al cargar la página
updateCartQuantity();
