// empieza el juego en 0 
let puntosUsuario = 0;
let puntosPC = 0;


let instrucciones = document.querySelector("#instrucciones");
// donde se van alojar los puntos.
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
// mensaje debajo de los elementos donde informa quien gana un punto y que eleccion hizo cada uno.
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let eligeJuego = document.querySelector("#elige-juego");

// se mostrara lo que elige cada jugador.
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

// cada vez que se ejecute un boton se va a iniciar turno
let botonesJuegos = document.querySelectorAll(".juego");
    botonesJuegos.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});
// validacion de usuario
// no encuentro el error porque no desabilita  los  elementos si el
// usuario no ingresa su nombre.

let nombreUsuario = document.querySelector("#nombreUsuario");
let button = document.querySelector("#button");
let aviso;
    button.addEventListener("click" , () =>{
        if(nombreUsuario.value.length == 0){
        alert ("Ingresa un nombre valido");
        }
        eligeJuego.classList.remove (disabled);
    }
    )

function validarNombre(){
    if (document.querySelector("#nombreUsuario").value !== ""){
        document.querySelector("#aviso").innerHTML = "¡Puedes jugar!";
        }
        eligeJuego.classList.add;
    }

// funcion para llamar al evento  
// eleccion aleatoria de la computadora versus eleccion de usuario
// reglas del juego 
function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random() * 3); //eleccion PC
    let eleccionUsuario = e.currentTarget.id; // eleccion usuario, recorre los tres elementos.

    // piedra => 0
    // papel => 1
    // tijera => 2

    if (eleccionPC === 0) {
        eleccionPC = "piedra";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel"
    } else if (eleccionPC === 2) {
        eleccionPC = "tijera"
    }

    // piedra vence a tijera
    // tijera vence a papel
    // papel vence a piedra
    // si son iguales es empate

    if (
        (eleccionUsuario === "piedra" && eleccionPC === "tijera") ||
        (eleccionUsuario === "tijera" && eleccionPC === "papel") ||
        (eleccionUsuario === "papel" && eleccionPC === "piedra")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "piedra" && eleccionUsuario === "tijera") ||
        (eleccionPC === "tijera" && eleccionUsuario === "papel") ||
        (eleccionPC === "papel" && eleccionUsuario === "piedra")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario; 
    contenedorEleccionPC.innerText = eleccionPC;

// se determina cantidad de partidas ganadas (3) , el empate no cuenta.
    if (puntosUsuario === 3 || puntosPC === 3) {

        if (puntosUsuario === 3) {
            instrucciones.innerText = "🏆🏆🏆🏆 ¡Ganaste el juego! 🏆🏆🏆🏆 "
        }

        if (puntosPC === 3 ) {
            instrucciones.innerText = " ¡La computadora ganó el juego! "
        }

        eligeJuego.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }


}
// suma en el tablero los puntos de las jugadas ganadas de cada uno
// mensaje  quien gano un punto o si fue empate
function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario; // suma en el tablero
    contenedorGanaPunto.innerText = "¡Ganaste un punto!" // leyenda abajo de los elementos
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! "
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate!"
}
// cuando se determina quien gano y  finaliza el juego, puede reiniciar
// vuelve al origen para iniciar otra partida y de los mensajes desaparecen.
function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    eligeJuego.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;
    
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 3 puntos gana."
}