// Obtener los datos del local storage
var usuarios = JSON.parse(localStorage.getItem("usuarios"));

// Verificar si hay datos de usuarios en el local storage
if (usuarios && usuarios.length > 0) {
  // Obtener las referencias a las tablas
  var tabla1 = document.getElementById("tabla1");
  var tabla2 = document.getElementById("tabla2");

  // Recorrer los usuarios y agregarlos a las tablas según su estado
  usuarios.forEach(function (usuario) {
    var fila = document.createElement("tr");
    var celdaId = document.createElement("td");
    var celdaUsername = document.createElement("td");
    var celdaEmail = document.createElement("td");
    var celdaEstado = document.createElement("td");
    var btnCambiarEstado = document.createElement("button");

    celdaId.textContent = usuario.id;
    celdaUsername.textContent = usuario.username;
    celdaEmail.textContent = usuario.email;

    btnCambiarEstado.textContent = usuario.state ? "block" : "to unlock";
    btnCambiarEstado.addEventListener("click", function () {
      // Cambiar el estado del usuario
      let new_list = [];
      usuarios.forEach(element => {
          if(element.id == usuario.id){
            if(element.state == true){
              element.state = false;
            }else{
              element.state = true;
            }
          }
          new_list.push(element);
      });
      localStorage.setItem('usuarios', JSON.stringify(new_list));

      // Actualizar el texto del botón
      btnCambiarEstado.textContent = usuario.state ? "block" : "to unlock";

      // Mover la fila a la tabla correspondiente
      if (usuario.state) {
        tabla1.querySelector("tbody").appendChild(fila);
      } else {
        tabla2.querySelector("tbody").appendChild(fila);
      }
    });

    fila.appendChild(celdaId);
    fila.appendChild(celdaUsername);
    fila.appendChild(celdaEmail);
    celdaEstado.appendChild(btnCambiarEstado);
    fila.appendChild(celdaEstado);

    if (usuario.state) {
      tabla1.querySelector("tbody").appendChild(fila);
    } else {
      tabla2.querySelector("tbody").appendChild(fila);
    }
  });
}