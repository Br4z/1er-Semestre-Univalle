let numero = 10 // prompt("Ingrese el numero al que desea sacarle sus 10 primeros multiplos.");

let i = 1; // Aquí se le dio comienzo, aunque se pudo haber hecho en el mismo for

if (isNaN(numero)) {
    console.log("no has ingresado un valor valido.");
} else {
    for (; i <= 10; i++) {
        // Los for llevan: (comienzo, condición, incremento)
        console.log(numero, "X", i, "=", numero * i);
    }
}
