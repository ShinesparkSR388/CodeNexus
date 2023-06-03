import { validate_Username,validate_email,validate_password,show_error,hide_error } from "./Validation.js"

const signupForm = document.querySelector('#signupForm'); 

//Evento para registrar usuario
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    hide_error();
    const username = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    // Verificar si el nombre de usuario ya está registrado
    if (validate_Username(username)) {
      show_error(document.getElementById("signupError"), "El nombre de usuario ya está registrado");
      return;
    }
  
    // Verificar si el correo electrónico ya está registrado
    if (validate_email(email)) {
      show_error(document.getElementById("signupError"), "El correo electrónico ya está registrado");
      return;
    }
  
    // Verificar si la contraseña cumple con los requisitos
    if (!validate_password(password)) {
      show_error(document.getElementById("signupError"), "La contraseña debe tener al menos 8 caracteres, no debe contener espacios y debe incluir al menos un símbolo (+ * .)");
      return;
    }
  
    // Registrar el nuevo usuario
    var nuevoUsuario = {
      username: username,
      email: email,
      password: password
    };
  
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
    alert("Registro exitoso");
    window.location.href = '../html/login.html'
})
