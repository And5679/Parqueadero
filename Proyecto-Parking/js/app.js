const hamburguesa = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const enlaces = document.querySelectorAll(".navegacion a");
const fecha=document.querySelector('.fecha');


document.addEventListener("DOMContentLoaded", () => {
  mostrarMenu(); //Esta funcion se va a poder mostrar hasta que mi HTML se haya cargado.
  cerrarMenu();
  fechaActual();
});

/*Crear evento al momento de darle click al menu.
-Recibe dos parametros:1.De que tipo es el evento. 2.La funcion o la llamada de la funcion. (CALL) 
-Cuando vemos una funcion flecha es que eso se va  ejecutar hasta que el usuario haga click,o hasta que el usuario interactue con dicho elemento
entonces ese elemento se va a disparar. */

function mostrarMenu() {
  hamburguesa.addEventListener("click", () => {
    console.log("clickando jejej ...");
    navegacion.classList.toggle("ocultar");
  });
}
  function cerrarMenu() {
    enlaces.forEach((enlace) => {
      enlace.addEventListener("click", (e) => {         //Que cada enlace va a tener un evento.
        if(e.target.tagName === 'A'){ //Si lo que el usuario clicko es  un enlace entonces:
        navegacion.classList.add('ocultar') //Le agregue la clase a la navegacion.
    }
    });
    });
  }


  function fechaActual(){

    let fechaHoy= new Date().getFullYear();
    fecha.textContent=fechaHoy;
  }