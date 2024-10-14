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

if (producto) {
    const productoHTML = `
        <div class="col-md-4 mt-5"> <!-- col-md-4 y mt-5 para mantener el formato -->
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${producto.titulo}</h5>
                    <p class="card-text">${producto.detalle}</p>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <p class="card-text">Stock disponible: ${producto.stock}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
    `;

    
    document.querySelector("main").innerHTML = productoHTML;
} else {
    document.querySelector("main").innerHTML = "<p>Producto no encontrado</p>";
}
