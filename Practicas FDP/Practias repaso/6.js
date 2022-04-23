/*

                 *´¨) 
                ¸.•´ ¸.•´¸.•*´¨) ¸.•*¨) 
                (¸.•´ (¸.•` ¤ 𝕭𝖗𝖆𝖓𝖉𝖔𝖓 𝕮𝖆𝖑𝖉𝖊𝖗𝖔𝖓 𝕻𝖗𝖎𝖊𝖙𝖔  
       .---.         
      /     \   𝖈𝖆𝖑𝖉𝖊𝖗𝖔𝖓.𝖇𝖗𝖆𝖓𝖉𝖔𝖓@𝖈𝖔𝖗𝖗𝖊𝖔𝖚𝖓𝖎𝖛𝖆𝖑𝖑𝖊.𝖊𝖉𝖚.𝖈𝖔      
      \.@-@./               
      /`\_/`\               202125974
     //  _  \\        
    | \     )|_        𝕴𝖓𝖌𝖊𝖓𝖎𝖊𝖗𝖎𝖆 𝖉𝖊 𝖘𝖎𝖘𝖙𝖊𝖒𝖆𝖘
   /`\_`>  <_/ \
   \__/'---'\__/

*/

/*

Propósito: Invertir los dígitos de un numero entre 3 - 5 cifras.
Contrato:  number -> string
Prototipo: invertir(number)
Ejemplos: 
(325) -> 523
(89)  -> 98

*/

function invertir(n) {
    if (n >= 100 && n <= 999) {
        // Ejemplo con 243
        primerC = Math.trunc(n / 100); // Math.trunc(2.43)
        segundoC = Math.trunc(n / 10 - primerC * 10); // Math.trunc(23.4 - 2 * 10)
        tercerC = n - primerC * 100 - segundoC * 10; // Math.trunc(234 - 2 * 100 - 3 * 10)
        return tercerC + "" + segundoC + "" + primerC;
    } else if (n > 999 && n <= 9999) {
        primerC = Math.trunc(n / 1000);
        segundoC = Math.trunc(n / 100 - primerC * 10);
        tercerC = Math.trunc(n / 10 - primerC * 100 - segundoC * 10);
        cuartoC = n - primerC * 1000 - segundoC * 100 - tercerC * 10;

        return cuartoC + "" + tercerC + "" + segundoC + "" + primerC;
    } else if (n > 9999 && n <= 99999) {
        primerC = Math.trunc(n / 10000);
        segundoC = Math.trunc(n / 1000 - primerC * 10);
        tercerC = Math.trunc(n / 100 - primerC * 100 - segundoC * 10);
        cuartoC = Math.trunc(n / 10 - primerC * 1000 - segundoC * 100 - tercerC * 10);
        quintoC = n - primerC * 10000 - segundoC * 1000 - tercerC * 100 - cuartoC * 10;

        return quintoC + "" + cuartoC + "" + tercerC + "" + segundoC + "" + primerC;
    } else {
        return "Ingrese un valor valido";
    }
}

/* 
Forma elegante

function reverseNumber(numero){
    return numero.toString().split('').reverse().join('')
}

console.log(reverseNumber(123456789))

*/

console.log(invertir(342));
console.log(invertir(7349));
console.log(invertir(20126));
