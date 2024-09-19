
class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const producto = new Producto(
    "Tacos al Pastor",
    "Deliciosos tacos al pastor con carne de res, piña, cilantro y cebolla.",
    100,
    50,
    "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"
);


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
