document.querySelector("h1").innerHTML = "Productos";

const data = [
    {
        "id": 1,
        "titulo": "Manzanas (1 kg)",
        "descripcion": "Manzanas frescas y crujientes, perfectas para snacks o postres.",
        "imagen_url": "./img/manzanas.jpeg",
        "precio": 30,
        "categoria": "Frutas y Verduras"  
    },
    {
        "id": 2,
        "titulo": "Platanos (1 kg)",
        "descripcion": "Dulces y ricos en potasio, ideales para desayunos o licuados.",
        "imagen_url": "./img/platanos.jpeg",
        "precio": 25,
        "categoria": "Frutas y Verduras"  
    },
    {
        "id": 3,
        "titulo": "Tomates  (1 kg)",
        "descripcion": "Jugosos y versátiles, ideales para ensaladas, salsas y guisos.",
        "imagen_url": "./img/tomates.jpeg",
        "precio": 20,
        "categoria": "Frutas y Verduras"  
    },
    {
        "id": 4,
        "titulo": "Papas  (1 kg)",
        "descripcion": "Papas frescas para preparar purés, guarniciones o frituras.",
        "imagen_url": "./img/papas.jpeg",
        "precio": 18,
        "categoria": "Frutas y Verduras"  
    },
    {
        "id": 5,
        "titulo": "Mantequilla (200 g)",
        "descripcion": "Mantequilla cremosa para untar o cocinar.",
        "imagen_url": "./img/mantequilla.jpeg",
        "precio": 40,
        "categoria": "Lácteos" 
    },
    {
        "id": 6,
        "titulo": "Queso rallado (250 g)",
        "descripcion": "Ideal para gratinar tus comidas favoritas.",
        "imagen_url": "./img/queso.jpeg",
        "precio": 50,
        "categoria": "Lácteos" 
    },
    {
        "id": 7,
        "titulo": "Yogurt natural (500 g)",
        "descripcion": " Cremoso y saludable, excelente para postres o desayunos.",
        "imagen_url": "./img/yogurt.jpeg",
        "precio": 25,
        "categoria": "Lácteos" 
    },
    {
        "id": 8,
        "titulo": "Leche (1 L)",
        "descripcion": "Leche entera de alta calidad para toda la familia.",
        "imagen_url": "./img/leche.jpeg",
        "precio": 18,
        "categoria": "Lácteos" 
    },
    {
        "id": 9,
        "titulo": "Pollo (1 kg)",
        "descripcion": "Pechugas de pollo frescas, listas para cualquier platillo.",
        "imagen_url": "./img/pollo.jpeg",
        "precio": 120,
        "categoria": "Carnes y Aves"  
    },
    {
        "id": 10,
        "titulo": "Carne molida (1 kg)",
        "descripcion": "Carne de res de alta calidad, perfecta para hamburguesas o albóndigas.",
        "imagen_url": "./img/carne.jpeg",
        "precio": 180,
        "categoria": "Carnes y Aves"  
    },
    {
        "id": 11,
        "titulo": "Costillas de cerdo (1 kg) ",
        "descripcion": "Jugosas costillas ideales para asar o cocinar a la parrilla.",
        "imagen_url": "./img/cerdo.jpeg",
        "precio": 150,
        "categoria": "Carnes y Aves"  
    },
    {
        "id": 12,
        "titulo": "Pan integral (500 g)",
        "descripcion": "Pan suave y nutritivo, rico en fibra.",
        "imagen_url": "./img/panintegral.jpg",
        "precio": 40,
        "categoria": "Panadería y Dulces"  
    },
    {
        "id": 13,
        "titulo": "Pan de caja (500 g)",
        "descripcion": "Ideal para sandwiches y tostadas.",
        "imagen_url": "./img/pancaja.jpg",
        "precio": 35,
        "categoria": "Panadería y Dulces"  
    },
    {
        "id": 14,
        "titulo": "Galletas de chocolate (300 g) ",
        "descripcion": "Deliciosas y crujientes para consentirte.",
        "imagen_url": "./img/galletas.jpeg",
        "precio": 30,
        "categoria": "Panadería y Dulces"  
    },
    {
        "id": 15,
        "titulo": "Pastel de manzana (1 pieza)",
        "descripcion": "Postre clásico con un toque casero.",
        "imagen_url": "./img/pastel.jpeg",
        "precio": 70,
        "categoria": "Panadería y Dulces"  
    },
    {
        "id": 16,
        "titulo": "Agua embotellada (1.5 L) ",
        "descripcion": " Agua pura para mantenerte hidratado todo el día.",
        "imagen_url": "./img/agua.jpg",
        "precio": 12,
        "categoria": "Bebidas "  
    },
    {
        "id": 17,
        "titulo": "Jugo de naranja (1 L) ",
        "descripcion": " Jugo fresco y natural, sin conservadores.",
        "imagen_url": "./img/jugo.jpg",
        "precio": 35,
        "categoria": "Bebidas "  
    },
    {
        "id": 18,
        "titulo": "Refrescos (600 mL) ",
        "descripcion": "Bebida refrescante para acompañar cualquier comida. ",
        "imagen_url": "./img/refrescos.png",
        "precio": 18,
        "categoria": "Bebidas "  
    },
    {
        "id": 19,
        "titulo": "Pizza congelada (1 pieza) ",
        "descripcion": "Listo para hornear, con queso y toppings deliciosos. ",
        "imagen_url": "./img/pizza.jpeg",
        "precio": 90,
        "categoria": "Congelados"  
    },
    {
        "id": 20,
        "titulo": "Verduras congeladas (500 g) ",
        "descripcion": " Prácticas y nutritivas para comidas rápidas.",
        "imagen_url": "./img/verduras.jpeg",
        "precio": 30,
        "categoria": "Congelados"  
    },
    {
        "id": 21,
        "titulo": " Helado (1 L)",
        "descripcion": "Postre cremoso disponible en varios sabores. ",
        "imagen_url": "./img/helado.jpeg",
        "precio": 80,
        "categoria": "Congelados"  
    }
];

// Usuario registrado?
function checkRegistration() {
    const email = localStorage.getItem("email");  
    if (!email) {  
        localStorage.removeItem("email");  
        localStorage.removeItem("cart");  
        localStorage.removeItem("quantity");  
    }
}

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

function cargarProductos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, 3000); 
    });
}


cargarProductos().then(productos => {
    
    const loader = document.getElementById("loader");
    loader.style.display = "none";  
    generarTarjetas(productos);  
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
        button.classList.add("btn", "btn-primary", "m-2");  
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

function updateCartQuantity() {
    const quantity = JSON.parse(localStorage.getItem("quantity")) || 0;
    const cartIcon = document.getElementById("cartQuantity");
    cartIcon.textContent = quantity;
}

// Actualizar carrito cargar página
updateCartQuantity();
