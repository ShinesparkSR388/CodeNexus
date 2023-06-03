//---- Apartado de funciones para Login y Sign Up ----

// Función para verificar si un nombre de usuario ya existe en el almacenamiento local
function validate_Username(username) {
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuarios.some(function(usuario) {
      return usuario.username === username;
    });
  }

// Función para verificar si un correo electrónico ya existe en el almacenamiento local
function validate_email(email) {
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuarios.some(function(usuario) {
      return usuario.email === email;
    });
  }

// Función para validar una contraseña
function validate_password(contrasena) {
    if (contrasena.length < 8 || /\s/.test(contrasena) || !/[+*\.]/.test(contrasena)) {
      return false;
    }
    return true;
  }

// Función para mostrar un mensaje de error
function show_error(elemento, mensaje) {
    elemento.innerHTML = mensaje;
    elemento.style.display = "block";
  }
  
  // Función para ocultar los mensajes de error
function hide_error() {
    const mensaje_login_error=document.getElementById("loginError");
    if(mensaje_login_error != null){
      mensaje_login_error.style.display = "none";
    }
    const mensaje_sign_up_error=document.getElementById("signupError");
    if(mensaje_sign_up_error != null){
      mensaje_sign_up_error.style.display = "none";
    }
  }

//Exportacion de todas las funciones que se utilizaran en otros archivos js
export {validate_Username, validate_email, validate_password, show_error, hide_error};
  