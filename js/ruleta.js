/* Para la entrega arme el Piedra, Papel o Tijera.
Dejo este boceto de la ruleta en progreso. */




//Ingresar Apuesta
let apuestaJ1 = prompt("Indique cuanto quiere apostar: ");
    while (apuestaJ1 > 100000){
    alert("No puede apostar mas de $100.000");
    apuestaJ1 = prompt("Indique cuanto quiere apostar: ");
    }
console.log("Jugador apuesta: $ "+ apuestaJ1);

//Elegir donde apostar
let eleccionJ1 = prompt("Indique un numero del 0 al 36, Rojo o Negro");
    while ((eleccionJ1>36) || (eleccionJ1<0)){
        alert("Debe elegir un numero entre 0 y 36");
        eleccionJ1 = prompt("Indique un numero del 0 al 36");
    }
console.log("Jugador apuesta al numero: " + eleccionJ1);

let rojo = "Rojo";
let negro = "Negro";
let cero = "Sin Color";

//Numero aleatorio entre 0 y 36
function getRandom() {
    var num = Math.floor(Math.random() * 37);
    alert("El numero de la ruleta fue: " + num);
    console.log("El numero de la ruleta fue: " + num);
        if ((num == 1) || (num == 3) || (num == 5) || (num == 7) || (num == 9) || (num == 12) || (num == 14) || (num == 16) || (num == 18) || (num == 19) || (num == 21) || (num == 23) || (num == 25) || (num == 28) || (num == 30) || (num == 32) || (num == 34) || (num == 36)){
        console.log("El color es: " + rojo);
    }
        else if (num==0){
            console.log("El cero es " + cero);
        }
            else {
                console.log("El color es " + negro);
            }
}
getRandom();


/* if (eleccionJ1==num) {
    console.log("Jugador pego pleno! Levanta: $ " + (apuestaJ1*36));
    
} */

/* if ((num = rojo) && (eleccionJ1 = "Rojo")){
    console.log("Gana: $" + apuestaJ1);
}
if ((num = negro) && (eleccionJ1 = "Rojo")){
    console.log("Pierde");
}
 */