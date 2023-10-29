function alternar(menu)
{
   var oMenu = document.getElementById(menu);
   //Si el menu tiene clase abierto
   //cambia clase a cerrado y cambia el botón
if (oMenu.classList.contains('abierto')){
   oMenu.classList.remove('abierto');
   oMenu.classList.add('cerrado');
   event.target.innerText = 'Abrir'
   }
//Si no está abierto, cambia clase a abierto y cambia el botón
else{
   oMenu.classList.remove('cerrado');
   oMenu.classList.add('abierto');
   event.target.innerText = 'Cerrar'
   }
}