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
    const menasaje_logineror=document.getElementById("loginError");
    if(menasaje_logineror != null){
      menasaje_logineror.style.display = "none";
    }
    const mesnaje_signuperror=document.getElementById("signupError");
    if(mesnaje_signuperror != null){
      mesnaje_signuperror.style.display = "none";
    }
  }

//Exportacion de todas las funciones que se utilizaran en otros archivos js
export {validate_Username, validate_email, validate_password, show_error, hide_error};
  