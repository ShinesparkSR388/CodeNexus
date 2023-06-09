/*Evento click que se ejecuta cuando el usuario da click al icono hambuerguesa ( icon-menu) y se ejecuta la funcion de mostrar_menu*/ 
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

/*Funcion que muestra el menu responsive*/
function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}