
const correctEmail = "usuario@example.com";
const correctPassword = "12345";


function handleSubmitLogin(event) {
    event.preventDefault();

    
    const loggedInEmail = localStorage.getItem("email");
    if (loggedInEmail) {
        
        window.location.href = "./index.html";
        return; 
    }

    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    if (email === correctEmail && password === correctPassword) {
        
        localStorage.setItem("email", email);
        localStorage.setItem("quantity", JSON.stringify(0));  

       
        const emptyCart = [];
        localStorage.setItem("cart", JSON.stringify(emptyCart)); 
        
       
        window.location.href = "./index.html";  
    } else {
        
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