console.log("Bienvenido a G.A.N 1.0" + "\nBy BrAz");

function instrucciones() {
    console.log("==========================================");
    console.log("1. Piensa en un numero entre el 1 y el 100.");
    console.log("2. Responde a los preguntas de la consola.");
    console.log("3. Ma; Mayor, Me; Menor y = ; Igual.");
    console.log("==========================================");
}

// El programa necesita valores con los que empezar (hay dos opciones: los declaras; con let's o se los pides al usuario; con prompt's)
let min = 1;
let max = 100;

instrucciones();

function adivino() {
    // Al llamar la función desde abajo volvía a declarar los mismos valores (cosa que no lo hacia funcionar)
    let RandomN = Math.floor(Math.random() * (max - min)) + min;
    console.log(RandomN);
    // console.log(min);
    // console.log(max);
    Ans = prompt("El numero que estas pensado es mayor, menor o igual al de arriba ?");

    if (Ans == "Me") {
        max = RandomN;
        adivino();
    } else if (Ans == "Ma") {
        min = RandomN;
        adivino();
    } else if (Ans == "=") {
        console.log("Gracias por jugar !");
    } else {
        console.log("No has ingresado una opción valida.");
    }
}

adivino();
