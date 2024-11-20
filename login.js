// Predefinimos los valores correctos
const correctEmail = "usuario@example.com";
const correctPassword = "12345";

// Función que maneja el inicio de sesión
function handleSubmitLogin(event) {
    event.preventDefault();

    // Comprobamos si el usuario ya está logueado
    const loggedInEmail = localStorage.getItem("email");
    if (loggedInEmail) {
        // Si ya está logueado, redirigimos a la página principal
        window.location.href = "./index.html";
        return;  // Salimos de la función si ya está logueado
    }

    // Obtenemos los valores introducidos por el usuario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Comparamos los valores
    if (email === correctEmail && password === correctPassword) {
        // Si son correctos, redirigimos al index.html y guardamos la sesión
        localStorage.setItem("email", email);
        localStorage.setItem("quantity", JSON.stringify(0));  // Inicializamos el contador en 0

        // Inicializamos un carrito vacío (array) y lo agregamos al localStorage
        const emptyCart = [];
        localStorage.setItem("cart", JSON.stringify(emptyCart));  // Convertimos el carrito a string con JSON.stringify
        
        // Redirigimos a la página principal
        window.location.href = "./index.html";  
    } else {
        // Si son incorrectos, mostramos el mensaje de error y limpiamos el formulario
        document.getElementById("error-message").textContent = "Correo o contraseña incorrectos";
        document.getElementById("login-form").reset();
    }
}

// Comprobamos si el usuario ya está logueado al cargar la página
function checkLoginStatus() {
    const email = localStorage.getItem("email");
    if (email) {
        window.location.href = "./index.html";  // Si está logueado, redirigimos al index
    }
}

// Ejecutamos la función de validación al cargar la página
checkLoginStatus();

// Asignamos el evento al formulario
document.getElementById("login-form").addEventListener("submit", handleSubmitLogin);
