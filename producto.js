const data = [
    {
        "id": 1,
        "titulo": "Manzanas (1 kg)",
        "detalle": "Manzanas frescas y crujientes, perfectas para snacks o postres.",
        "precio": 30,
        "stock": 150,
        "imagen": "./img/manzanas.jpeg"
    },
    {
        "id": 2,
        "titulo": "Platanos (1 kg)",
        "detalle": "Dulces y ricos en potasio, ideales para desayunos o licuados.",
        "precio": 25,
        "stock": 70,
        "imagen": "./img/platanos.jpeg"
    },
    {
        "id": 3,
        "titulo": "Tomates  (1 kg)",
        "detalle": "Jugosos y versátiles, ideales para ensaladas, salsas y guisos.",
        "precio": 20,
        "stock": 100,
        "imagen": "./img/tomates.jpeg"
    },
    {
        "id": 4,
        "titulo": "Papas  (1 kg)",
        "detalle": "Papas frescas para preparar purés, guarniciones o frituras.",
        "precio": 18,
        "stock": 250,
        "imagen": "./img/papas.jpeg"
    },
    {
        "id": 5,
        "titulo": "Mantequilla (200 g)",
        "detalle": "Mantequilla cremosa para untar o cocinar.",
        "precio": 40,
        "stock": 50,
        "imagen": "./img/mantequilla.jpeg"
    },
    {
        "id": 6,
        "titulo": "Queso rallado (250 g)",
        "detalle": "Ideal para gratinar tus comidas favoritas.",
        "precio": 50,
        "stock": 40,
        "imagen": "./img/queso.jpeg"
    },
    {
        "id": 7,
        "titulo": "Yogurt natural (500 g)",
        "detalle": "Cremoso y saludable, excelente para postres o desayunos.",
        "precio": 25,
        "stock": 50,
        "imagen": "./img/yogurt.jpeg"
    },
    {
        "id": 8,
        "titulo": "Leche (1 L)",
        "detalle": "Leche entera de alta calidad para toda la familia.",
        "precio": 18,
        "stock": 20,
        "imagen": "./img/leche.jpeg"
    },
    {
        "id": 9,
        "titulo": "Pollo (1 kg)",
        "detalle": "Pechugas de pollo frescas, listas para cualquier platillo.",
        "precio": 120,
        "stock": 60,
        "imagen": "./img/pollo.jpeg"
    },
    {
        "id": 10,
        "titulo": "Carne molida (1 kg)",
        "detalle": "Carne de res de alta calidad, perfecta para hamburguesas o albóndigas.",
        "precio": 180,
        "stock": 83,
        "imagen": "./img/carne.jpeg"
    },
    {
        "id": 11,
        "titulo": "Costillas de cerdo (1 kg)",
        "detalle": "Jugosas costillas ideales para asar o cocinar a la parrilla.",
        "precio": 150,
        "stock": 35,
        "imagen": "./img/cerdo.jpeg"
    },
    {
        "id": 12,
        "titulo": "Pan integral (500 g)",
        "detalle": "Pan suave y nutritivo, rico en fibra.",
        "precio": 40,
        "stock": 80,
        "imagen": "./img/panintegral.jpg"
    },
    {
        "id": 13,
        "titulo": "Pan de caja (500 g)",
        "detalle": "Ideal para sandwiches y tostadas.",
        "precio": 35,
        "stock": 70,
        "imagen": "./img/pancaja.jpg"
    },
    {
        "id": 14,
        "titulo": "Galletas de chocolate (300 g)",
        "detalle": "Deliciosas y crujientes para consentirte.",
        "precio": 30,
        "stock": 100,
        "imagen": "./img/galletas.jpeg"
    },
    {
        "id": 15,
        "titulo": "Pastel de manzana (1 pieza)",
        "detalle": "Postre clásico con un toque casero.",
        "precio": 70,
        "stock": 20,
        "imagen": "./img/pastel.jpeg"
    },
    {
        "id": 16,
        "titulo": "Agua embotellada (1.5 L) ",
        "detalle": "Agua pura para mantenerte hidratado todo el día.",
        "precio": 12,
        "stock": 300,
        "imagen": " ./img/agua.jpg"
    },
    {
        "id": 17,
        "titulo": " Jugo de naranja (1 L)",
        "detalle": "Jugo fresco y natural, sin conservadores.",
        "precio": 35,
        "stock": 200,
        "imagen": "./img/jugo.jpg "
    },
    {
        "id": 18,
        "titulo": "Refrescos (600 mL) ",
        "detalle": "Bebida refrescante para acompañar cualquier comida. ",
        "precio": 18,
        "stock": 250,
        "imagen": "./img/refrescos.png "
    },
    {
        "id": 19,
        "titulo": " Pizza congelada (1 pieza) ",
        "detalle": "Listo para hornear, con queso y toppings deliciosos.",
        "precio": 90,
        "stock": 120,
        "imagen": "./img/pizza.jpeg "
    },
    {
        "id": 20,
        "titulo": " Verduras congeladas (500 g) ",
        "detalle": "Prácticas y nutritivas para comidas rápidas.",
        "precio": 30,
        "stock": 130,
        "imagen": "./img/verduras.jpeg "
    },
    {
        "id": 21,
        "titulo": " Helado (1 L)",
        "detalle": "Postre cremoso disponible en varios sabores.",
        "precio": 80,
        "stock": 50,
        "imagen": "./img/helado.jpeg "
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