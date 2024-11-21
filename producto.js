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


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = parseInt(urlParams.get('prod'));

const producto = data.find(item => item.id === productId);

// Existe producto?
if (producto) {
    
    const isLoggedIn = localStorage.getItem("email");

    let productoHTML = `
        <div class="col-md-4 mt-5">
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${producto.titulo}</h5>
                    <p class="card-text">${producto.detalle}</p>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <p class="card-text">Stock disponible: ${producto.stock}</p>
    `;

    if (isLoggedIn) {
        // Logueado = incremento/decremento
        productoHTML += `
                    <button id="decrement" class="btn btn-danger">-</button>
                    <span id="quantity">0</span>
                    <button id="increment" class="btn btn-success">+</button>
                    <a href="cart.html?prod=${producto.id}" id="buyButton" class="btn btn-primary mt-3">Añadir al carrito</a>
        `;
    } else {
        // No logueado = Iniciar sesión
        productoHTML += `
                    <a href="login.html" id="buyButton" class="btn btn-primary">Iniciar sesión para comprar</a>
        `;
    }

    productoHTML += `
                </div>
            </div>
        </div>
    `;

    document.querySelector("main").innerHTML = productoHTML;

    
    if (isLoggedIn) {
        document.getElementById("increment").addEventListener("click", () => incrementQuantity(producto));
        document.getElementById("decrement").addEventListener("click", () => decrementQuantity(producto));
    }

    
    const buyButton = document.getElementById("buyButton");
    if (localStorage.getItem("email")) {
        buyButton.textContent = "Comprar";
        buyButton.href = "./cart.html?prod=" + productId; 
    } else {
        buyButton.textContent = "Iniciar sesión para comprar";
        buyButton.href = "login.html"; 
    }
}

function incrementQuantity(producto) {
    let currentQuantity = parseInt(document.getElementById("quantity").textContent);
    if (currentQuantity < producto.stock) {
        currentQuantity++;
        document.getElementById("quantity").textContent = currentQuantity;
        updateCart(currentQuantity);
    }
}

function decrementQuantity(producto) {
    let currentQuantity = parseInt(document.getElementById("quantity").textContent);
    if (currentQuantity > 1) {
        currentQuantity--;
        document.getElementById("quantity").textContent = currentQuantity;
        updateCart(currentQuantity);
    }
}

function updateCart(currentQuantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex === -1) {
    
        cart.push({ 
            id: productId, 
            quantity: currentQuantity, 
            nombre: producto.titulo, 
            precio: producto.precio, 
            imagen: producto.imagen 
        });
    } else {
        // Actualizamos cantidad
        cart[productIndex].quantity = currentQuantity;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartQuantity();
}


function updateCartQuantity() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    localStorage.setItem("quantity", totalQuantity); 
    const cartIcon = document.getElementById("cart-quantity");
    cartIcon.textContent = totalQuantity; 
}