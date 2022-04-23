let min = 1;
let max = 100;
let vida = 5;
let Ans = "Ma"; // Hay que inicializarlo con algo, esta declaración no va a afectar el máximo del juego

while ((Ans != "=" && vida) != 0 && (Ans == "Ma") | (Ans == "Me") | (Ans == "=")) {
    let Numero = Math.floor(Math.random() * (max - min)) + min;
    console.log(Numero);
    Ans = prompt("El numero que estas pensado es mayor, menor o igual al de arriba ?");
    if (Ans == "Me" && vida != 0) {
        vida = vida - 1;
        max = Numero;
    } else if (Ans == "Ma" && vida != 0) {
        vida = vida - 1;
        min = Numero;
    } else if (Ans == "=") {
        console.log("He ganado. Gracias por jugar !");
    } else if (vida == 1) {
        console.log("He perdido :( !");
    } else {
        console.log("No has ingresado una opción valida.");
    }
}

if (vida == 0) {
    console.log("He perdido :(");
}