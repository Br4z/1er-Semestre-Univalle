console.log("Bienvenido a G.A.N 2.0" + "\nBy BrAz");

function instrucciones() {
    console.log("=============================================================================");
    console.log("1. Piensa en un numero entre el 1 y el 100.");
    console.log("2. Responde a los preguntas de la consola.");
    console.log("3. Ma; Mayor, Me; Menor y = ; Igual.");
    console.log("4. Tengo 5 intentos para adivinar tu numero, sino lo hago entonces tu ganas.");
    console.log("=============================================================================");
}

// El programa necesita valores con los que empezar (hay dos opciones: los declaras; con let's o se los pides al usuario; con prompt's)
let min = 1;
let max = 100;
let vidas = 5;

instrucciones();

function adivino() {
    // Al llamar la función desde abajo volvía a declarar los mismos valores (cosa que no lo hacia funcionar)
    let RandomN = Math.floor(Math.random() * (max - min)) + min;
    console.log(RandomN);
    // console.log(min);
    // console.log(max);
    Ans = prompt("El numero que estas pensado es mayor, menor o igual al de arriba ?");

    if (Ans == "Me" && vidas != 0) {
        vidas = vidas - 1;
        max = RandomN;
        // console.log(vidas);
        adivino();
    } else if (Ans == "Ma" && vidas != 0) {
        vidas = vidas - 1;
        min = RandomN;
        // console.log(vidas);
        adivino();
    } else if (Ans == "=") {
        console.log("He ganado. Gracias por jugar !");
    } else if (vidas == 1) {
        // las vidas se podrían dejar en 1 (porque el primer numero propuesto por la consola no cuenta en las vidas)
        console.log("He perdido :( !");
    } else {
        console.log("No has ingresado una opción valida.");
    }
}

adivino();