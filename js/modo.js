// // Obtengo button y body (elementos html)
var modo = document.getElementById('dark-mode-button');
var body = document.body;

// // Funcion traer dark mode
function toggleDarkMode() {
   body.classList.toggle('modo-oscuro'); //le agrego modo oscuro al body a traves de la clase
    if (body.classList.contains('modo-oscuro')) { 
        modo.textContent = 'Claro'; //si es modo oscuro, cambiar a claro
    } else {
        modo.textContent = 'Oscuro'; //sino cambiar a modo oscuro
    }
}

// // Agrego click event listener al button
modo.addEventListener('click', toggleDarkMode); //click -> llamo a la función 