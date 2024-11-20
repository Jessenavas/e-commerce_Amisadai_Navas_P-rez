// Simulación de datos del producto
const data = [
    {
        "id": 1,
        "titulo": "Producto 1",
        "detalle": "Descripción del producto 1.",
        "precio": 100,
        "stock": 50,
        "imagen": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"
    },
    {
        "id": 2,
        "titulo": "Producto 2",
        "detalle": "Descripción del producto 2.",
        "precio": 150,
        "stock": 30,
        "imagen": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg"
    },
    {
        "id": 3,
        "titulo": "Producto 3",
        "detalle": "Descripción del producto 3.",
        "precio": 200,
        "stock": 20,
        "imagen": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg"
    }
];

// Obtener el producto con base en la URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = parseInt(urlParams.get('prod'));

const producto = data.find(item => item.id === productId);

// Si el producto existe, creamos su vista
if (producto) {
    const productoHTML = `
        <div class="col-md-4 mt-5">
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${producto.titulo}</h5>
                    <p class="card-text">${producto.detalle}</p>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <p class="card-text">Stock disponible: ${producto.stock}</p>
                    <button id="decrement" class="btn btn-danger">-</button>
                    <span id="quantity">0</span>
                    <button id="increment" class="btn btn-success">+</button>
                    <a href="#" id="buyButton" class="btn btn-primary">Iniciar sesión para comprar</a>
                </div>
            </div>
        </div>`;

    document.querySelector("main").innerHTML = productoHTML;

    // Agregar el evento de incrementación
    document.getElementById("increment").addEventListener("click", () => incrementQuantity(producto));
    // Agregar el evento de decrementación
    document.getElementById("decrement").addEventListener("click", () => decrementQuantity(producto));

    // Lógica para manejar el botón de compra
    const buyButton = document.getElementById("buyButton");
    if (localStorage.getItem("email")) {
        buyButton.textContent = "Comprar";
        buyButton.href = "#"; // Enlazar con la funcionalidad de compra
    } else {
        buyButton.textContent = "Iniciar sesión para comprar";
        buyButton.href = "login.html"; // Redirige al login
    }
}

// Función para incrementar la cantidad de productos
function incrementQuantity(producto) {
    let currentQuantity = parseInt(document.getElementById("quantity").textContent);
    if (currentQuantity < producto.stock) {
        currentQuantity++;
        document.getElementById("quantity").textContent = currentQuantity;
        updateCart(currentQuantity);
    }
}

// Función para decrementar la cantidad de productos
function decrementQuantity(producto) {
    let currentQuantity = parseInt(document.getElementById("quantity").textContent);
    if (currentQuantity > 1) {
        currentQuantity--;
        document.getElementById("quantity").textContent = currentQuantity;
        updateCart(currentQuantity);
    }
}

// Actualiza el carrito en localStorage
function updateCart(currentQuantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex === -1) {
        // Si el producto no está en el carrito, lo añadimos
        cart.push({ id: productId, quantity: currentQuantity });
    } else {
        // Si ya está en el carrito, actualizamos su cantidad
        cart[productIndex].quantity = currentQuantity;
    }

    // Guardamos el carrito actualizado
    localStorage.setItem("cart", JSON.stringify(cart));
}
