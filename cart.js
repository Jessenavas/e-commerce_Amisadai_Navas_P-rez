// Verificamos si el usuario está logueado
function checkLogin() {
    const email = localStorage.getItem("email");
    if (!email) {
        window.location.href = "./login.html";  // Si no está logueado, redirigimos a login
    }
}

// Mostrar los productos del carrito
function showCartItems() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceContainer = document.getElementById("total-price");

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
        totalPriceContainer.innerHTML = "";
    } else {
        let totalPrice = 0;
        const itemsHTML = cart.map(product => {
            totalPrice += product.precio * product.quantity;
            return `<div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${product.titulo}</h5>
                    <p class="card-text">Precio: $${product.precio}</p>
                    <p class="card-text">Cantidad: ${product.quantity}</p>
                    <button class="btn btn-danger" onclick="removeFromCart(${product.id})">Eliminar</button>
                </div>
            </div>`;
        });

        cartItemsContainer.innerHTML = itemsHTML.join("");
        totalPriceContainer.innerHTML = `<h4>Total: $${totalPrice}</h4>`;
    }
}

// Eliminar producto del carrito
function removeFromCart(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter(product => product.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    showCartItems();
}

// Vaciar el carrito
document.getElementById("clear-cart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    showCartItems();
});

// Ejecutamos las funciones al cargar la página
checkLogin();
showCartItems();
