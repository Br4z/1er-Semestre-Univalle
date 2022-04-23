let usuario = 0;
let numero = 35;
let vida = 5;

console.log("Adivina un numero entre el 1 y el 100");

while (usuario != numero) {
    usuario = prompt("Cual es el numero?");
    if (vida == 0){ // Sabemos que va a llegar a esta condición (restando de a 1)
        console.log("has perdido, el numero era:", numero);
        break;
    } else if(usuario > numero) {
        vida = vida - 1;
        console.log("te pasaste, te quedan", vida, "vidas");
    } else if (usuario < numero) {
        vida = vida - 1;
        console.log("te falta, te quedan", vida, "vidas");
    } else if (usuario == numero && vida != 0) {
        console.log("Acertaste");
    }
}

