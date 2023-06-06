var comentariosLinks = document.getElementsByClassName('comentarios');
var comentariosContainer = document.getElementsByClassName('comentarios-container')[0];
var comentariosForm = document.querySelector('.comentarios-container form');
var comentariosLista = document.querySelector('.comentarios-container .comentarios-lista');

comentariosContainer.style.display = 'none'; // Ocultar el contenedor inicialmente

for (var i = 0; i < comentariosLinks.length; i++) {
  comentariosLinks[i].addEventListener('click', toggleComentariosContainer);
}

comentariosForm.addEventListener('submit', agregarComentario);

var contadorUsuarios = 1;

function toggleComentariosContainer(event) {
  event.preventDefault();
  if (comentariosContainer.style.display === 'none') {
    comentariosContainer.style.display = 'block';
  } else {
    comentariosContainer.style.display = 'none';
  }
}

function agregarComentario(event) {
  event.preventDefault();
  var comentarioInput = document.querySelector('.comentarios-container .comentario-input');
  var comentarioTexto = comentarioInput.value.trim();

  if (comentarioTexto !== '') {
    var nuevoComentario = document.createElement('li');
    nuevoComentario.textContent = 'Usuario ' + contadorUsuarios + ' dice: ' + comentarioTexto;
    comentariosLista.appendChild(nuevoComentario);
    comentarioInput.value = '';
    contadorUsuarios++;
  }
}