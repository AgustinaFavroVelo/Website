 // Primero selecciono todos los elementos html a nivel global para poder manipularlos
const formulario = document.getElementById("form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const sede = document.querySelector(".select");
const consult = document.getElementById("consult");

// Armo la función que se va a ejecutar cuando asigne un evento
function validateForm() {
  if (
    // 1. Bloque condición -Le digo que si los values de los campos del formulario tienen los siguientes valores al momento de ejecutar la función:
    // 2. Bloque ejecución si se cumple la condición - agregue "Por favor, complete todos los campos"
    name.value === "" ||
    email.value === "" ||
    tel.value === "" ||
    sede.value === "Elige tu sede" ||
    consult.value === ""
  ) {
    alert ("Por favor complete todos los campos");
    return false;
  }
}

// Le indico al código que escuche el evento submit del formulario. Recordar que si dentro del form tenés un botón de type="submit", se entiende que el evento se va a disparar al momento de hacer click en ese botón
formulario.addEventListener("submit", e => {
  //   Indico que el primer comportamiento al momento de hacer submit sea justamente ignorar el submit, sino va a recargar la página apenas demos click en el botón
  e.preventDefault();
  // Le digo que al momento de hacer submit, ejecute la función validateForm
  validateForm();
});


