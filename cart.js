// Usuario está logueado?
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
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-thumbnail">
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

    // Actualizar contador carrito
    updateCartQuantityInNavbar();
}

// Función actualizar contador carrito navbar
function updateCartQuantityInNavbar() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = cart.reduce((acc, producto) => acc + producto.quantity, 0);
    const cartQuantityBadge = document.getElementById("cart-quantity");
    cartQuantityBadge.textContent = totalQuantity; 
}

// Aumentamos cantidad producto carrito
function increaseQuantity(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = cart.find(p => p.id === id);

    if (product) {
        product.quantity++;  
        localStorage.setItem("cart", JSON.stringify(cart));
        showCartItems(); 
    }
}

// Disminuimos cantidad producto carrito
function decreaseQuantity(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = cart.find(p => p.id === id);

    if (product && product.quantity > 1) {  
        product.quantity--;  
        localStorage.setItem("cart", JSON.stringify(cart)); 
        showCartItems();  
    } else if (product && product.quantity === 1) {
        removeFromCart(id); 
    }
}

// Eliminamos producto carrito
function removeFromCart(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter(product => product.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    showCartItems();
}

// Vaciar carrito
document.getElementById("clear-cart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    showCartItems();
});

// Función checkout
function checkout() {
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    // Productos en el carrito?
    if (!cartItems || cartItems.length === 0) {
        Swal.fire({
            icon: "error",
            text: "No hay productos en el carrito.",
            confirmButtonText: "Okay",
            confirmButtonColor: "#06f",
        });
        return; 
    }

    const recurso = {
        user: localStorage.getItem("email"),
        items: cartItems,
    };

    fetch("https://673d09dd4db5a341d833d038.mockapi.io/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(recurso),
    })
    .then((response) => response.json())
    .then((data) => {
        Swal.fire({
            icon: "success",
            text: `Gracias ${recurso.user}. Hemos registrado tu orden número #${data.id}`,
            confirmButtonText: "Okay",
            confirmButtonColor: "#06f",
        });

        // Elimina carrito localStorage
        localStorage.removeItem("cart");

        // Elimina cantidad 
        localStorage.removeItem("quantity");

        setTimeout(() => {
            window.location.href = './index.html'; 
        }, 3000); 
    })
    .catch(() =>
        Swal.fire({
            icon: "error",
            text: "Ups, hubo un problema. Por favor, inténtalo más tarde.",
            confirmButtonText: "Okay",
            confirmButtonColor: "#06f",
        })
    );
}


document.getElementById("checkout-btn").addEventListener("click", checkout);


checkLogin();  // Verificar usuario logueado
showCartItems();  // Muestra productos carrito
