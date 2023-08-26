//Funcion para determinar de modo aleatorio la Jugada de la PC -> Piedra, Papel o Tijera.
function getRandom() {
    var num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return 'Piedra';
        case 1:
            return 'Papel';
        default:
            return 'Tijera';
    }
}

//Funcion con condiciones para Ganar o Perder
function ganador(jugadaP1, jugadaPC) {
    if (jugadaP1 === jugadaPC) {
        return "Empate"; //Si son iguales, es empate.
    } else if ( //Condiciones en las que gana el Jugador1.
        (jugadaP1 === "Piedra" && jugadaPC === "Tijera") ||
        (jugadaP1 === "Papel" && jugadaPC === "Piedra") ||
        (jugadaP1 === "Tijera" && jugadaPC === "Papel")
    ) {
        return "Ganaste";
    } else { //Si no es empate, ni ganaste, entonces logicamente Pierde Jugador1.
        return "Perdiste";
    }
}

let jugador = prompt("Elige: Piedra, Papel o Tijera");
let pc = getRandom();
if ((jugador != "Piedra") || (jugador != "Papel") || (jugador != "Tijera")){
    alert ("Debe ingresar Piedra, Papel o Tijera");
}
alert ("Jugador eligió: " + jugador + "\nPC eligio: " + pc + "\nResultado: " + ganador(jugador, pc));


/* La idea es complejizar esto un poco mas y posiblemente armar una Ruleta, donde hay
muchas mas condiciones a cumplir
Ingresar una apuesta 
Condiciones si gana pleno, medio pleno, 1/4, color, par o impar etc.
Ir acumulando la ganancia y demas condiciones de juego...
Dejo un boceto en progreso en hoja RULETA.js
*/