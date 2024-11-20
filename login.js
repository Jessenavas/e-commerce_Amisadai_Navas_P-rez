// Predefinimos los valores correctos
const correctEmail = "usuario@example.com";
const correctPassword = "12345";

// Función que maneja el inicio de sesión
function handleSubmitLogin(event) {
    event.preventDefault();

    // Obtenemos los valores introducidos por el usuario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Comparamos los valores
    if (email === correctEmail && password === correctPassword) {
        // Si son correctos, redirigimos al index.html y guardamos la sesión
        localStorage.setItem("email", email);
        localStorage.setItem("cart", JSON.stringify([]));  // Creamos el carrito vacío
        localStorage.setItem("quantity", JSON.stringify(0));  // Inicializamos el contador
        window.location.href = "./index.html";  // Redirigimos a la página principal
    } else {
        // Si son incorrectos, mostramos el mensaje de error y limpiamos el formulario
        document.getElementById("error-message").textContent = "Correo o contraseña incorrectos";
        document.getElementById("login-form").reset();
    }
}

// Comprobamos si el usuario ya está logueado
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
