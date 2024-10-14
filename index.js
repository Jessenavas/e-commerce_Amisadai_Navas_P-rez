/* console.log("Holaaaaaaaaa mucho gusto usuario, soy Amisa");  

const h5 = document.querySelector("h5");
const text = document.querySelector(".card-text");
const img = document.querySelector(".card img");

console.log("h5",h5)

h5.innerText = "Tacos al pastor";
text.innerText = "Unos ricos tacos al pastor de carne de res, sazonada con chiles, con un trozo de piña, cilantro y cebolla.";
img.src = ""; */

document.querySelector("h1").innerHTML = "Productos";

const data = [
    {
        "id": 1,
        "titulo": "Producto 1",
        "descripcion": "Descripción del producto 1.",
        "imagen_url": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg", 
        "precio": 100
    },
    {
        "id": 2,
        "titulo": "Producto 2",
        "descripcion": "Descripción del producto 2.",
        "imagen_url": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg", 
        "precio": 150
    },
    {
        "id": 3,
        "titulo": "Producto 3",
        "descripcion": "Descripción del producto 3.",
        "imagen_url": "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg", 
        "precio": 200
    }
];

function generarTarjetas() {
    const container = document.querySelector(".container");
    const row = document.createElement("div");
    row.classList.add("row");

    const tarjetas = data.map(producto => `
        <div class="col-md-4 mt-5">
            <div class="card">
                <img src="${producto.imagen_url}" class="card-img-top" alt="${producto.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${producto.titulo}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <!-- Se agrega el id del producto en la URL -->
                    <a href="./producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
    `);

    row.innerHTML = tarjetas.join('');
    container.appendChild(row);
}

generarTarjetas();

