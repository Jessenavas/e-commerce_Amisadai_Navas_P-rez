document.addEventListener("DOMContentLoaded", function () {
    // Menú principal
    let menu = [
        { texto: "Inicio", href: "./index.html" },
        { texto: "Producto", href: "#" },
    ];
  
    let menuHTML = [];
    for (let item of menu) {
        menuHTML.push(`<li class="nav-item"><a class="nav-link" href="${item.href}">${item.texto}</a></li>`);
    }
  
    // Navbar HTML
    let navHTML = `
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #28a745;">
            <div class="container-fluid">
                <a class="navbar-brand fs-2" href="./index.html">
                    <i class="fas fa-store"></i> FreskoMarket
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        ${menuHTML.join('')}
                    </ul>
                    <div class="d-flex align-items-center ms-3">
                        <a href="./cart.html">
                            <img src="./img/cart.png" alt="Carrito" width="40" height="40">
                            <span id="cart-quantity" class="badge bg-warning text-dark ms-3">${0}</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    `;
  
    // Insertar navbar en el header
    document.querySelector("header").innerHTML = navHTML;
  
    // Función para actualizar el estado de la sesión en la navbar
    function updateNavBar() {
        const email = localStorage.getItem("email");
        const navMenu = document.querySelector(".navbar-nav");
  
        if (email) {
            // Si está logueado, mostrar "Cerrar sesión"
            const logoutButton = `<li class="nav-item"><a class="nav-link" href="#" id="logout-btn">Cerrar sesión</a></li>`;
            navMenu.innerHTML += logoutButton;
  
            // Evento para cerrar sesión
            document.getElementById("logout-btn").addEventListener("click", () => {
                localStorage.removeItem("email");
                window.location.href = "./login.html"; // Redirigimos a login al cerrar sesión
            });
        } else {
            // Si no está logueado, mostrar "Iniciar sesión"
            const loginButton = `<li class="nav-item"><a class="nav-link" href="./login.html">Iniciar sesión</a></li>`;
            navMenu.innerHTML += loginButton;
        }
    }
  
    // Actualizar el contador del carrito
    const cartQuantity = JSON.parse(localStorage.getItem("quantity")) || 0;
    const cartIcon = document.getElementById("cart-quantity");
    cartIcon.textContent = cartQuantity;
  
    // Función para animar el navbar en el scroll
    const navbar = document.querySelector("nav");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            navbar.style.transform = "translateY(-100%)"; // Oculta el navbar al hacer scroll hacia abajo
        } else {
            navbar.style.transform = "translateY(0)"; // Muestra el navbar al hacer scroll hacia arriba
        }
        lastScrollY = window.scrollY;
    });
  
    // Ejecutar la función para actualizar la navbar
    updateNavBar();
  });