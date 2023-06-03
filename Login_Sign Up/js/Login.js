import { validate_Username,validate_email,validate_password,show_error,hide_error } from "./Validation.js"

const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    hide_error();
    const username = document.querySelector('#name').value
    const password = document.querySelector('#password').value
    // Verificar si el usuario existe en el almacenamiento local
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    var usuario = usuarios.find(function(usuario) {
      return usuario.username === username;
      
    });
    // Verificar si el usuario y contraseña coinciden
    if (usuario && usuario.password === password) {
      // Iniciar sesión exitosa
      alert("Inicio de sesión exitoso");
      window.location.href = '../index.html'   
    } else {
      // Mostrar mensaje de error
      show_error(document.getElementById("loginError"), "Nombre de usuario o contraseña incorrectos");
    }
})