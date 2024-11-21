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
        const itemsHTML = cart.map(producto => {
            totalPrice += producto.precio * producto.quantity;
            return `<div class="card mb-3">
                <div class="card-body">
                    <img src="${producto.imagen}" alt="${producto.nombre}" >
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <p class="card-text">Cantidad: <span id="quantity-${producto.id}">${producto.quantity}</span></p>
                    <button class="btn btn-warning" onclick="decreaseQuantity(${producto.id})"> - </button>
                    <button class="btn btn-success" onclick="increaseQuantity(${producto.id})"> + </button>
                    <button class="btn btn-danger" onclick="removeFromCart(${producto.id})">Eliminar</button>
                </div>
            </div>`;
        });

        cartItemsContainer.innerHTML = itemsHTML.join("");
        totalPriceContainer.innerHTML = `<h4>Total: $${totalPrice}</h4>`;
    }

    // Actualizamos el contador del carrito en el navbar
    updateCartQuantityInNavbar();
}

// Función para actualizar el contador del carrito en el navbar
function updateCartQuantityInNavbar() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = cart.reduce((acc, producto) => acc + producto.quantity, 0); // Suma todas las cantidades
    const cartQuantityBadge = document.getElementById("cart-quantity");
    cartQuantityBadge.textContent = totalQuantity;  // Actualiza el contador en el navbar
}

// Aumentar la cantidad de un producto en el carrito
function increaseQuantity(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = cart.find(p => p.id === id);

    if (product) {
        product.quantity++;  // Aumenta la cantidad
        localStorage.setItem("cart", JSON.stringify(cart));  // Actualiza el carrito en localStorage
        showCartItems();  // Vuelve a mostrar el carrito con la nueva cantidad
    }
}

// Disminuir la cantidad de un producto en el carrito
function decreaseQuantity(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = cart.find(p => p.id === id);

    if (product && product.quantity > 1) {  // No permitimos que la cantidad sea menor que 1
        product.quantity--;  // Disminuye la cantidad
        localStorage.setItem("cart", JSON.stringify(cart));  // Actualiza el carrito en localStorage
        showCartItems();  // Vuelve a mostrar el carrito con la nueva cantidad
    } else if (product && product.quantity === 1) {
        removeFromCart(id);  // Si la cantidad llega a 1, eliminamos el producto
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
