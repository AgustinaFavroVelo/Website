
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const consulta = document.getElementById("consulta")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
//escucha del submit ,e es para default, 
form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = "" //para que se reincie
    if (nombre.value.length <3) {
        warnings += `Nombre invalido <br> `
        entrar= true
    }  
    // console.log(regexEmail.test(email.value)) //para ver valores booleanos en consola
    if(!regexEmail.test(email.value)){
        //si no es email.value da falso
        warnings += `El email no es valido <br> `
        entrar= true
    }
    if (consulta.value.length > 150){
        warnings += `Utilice maximo 150 caracteres<br> `
        entrar= true
    }
    if (entrar){
        parrafo.innerHTML = warnings
    }
})

//expresiones regulares: sacadas de w3source


// function validarEnviar () {
//     let obligatorio = document.getElementsByName ("info")[0][1][2].value
//     if( obligatorio== ""){
//         alert ("Complete todos los campos obligatorios")
//     } else {
//         alert("Consulta enviada")
//     }
// }
