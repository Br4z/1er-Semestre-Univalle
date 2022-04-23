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

Propósito: Invertir el orden de los dígitos de un numero de 3 - 5 cifras.
Contrato:  number -> string
Prototipo: invertir(number)
Ejemplos: 
(342)  -> 243
(7349) -> 9437

*/

function invertir(n) {
    if (n > 99999) {
        return "El numero tiene mas de 5 cifras";
    } else if (n < 100) {
        return "El numero tiene menos de 3 cifras";
    // Con Math.trunc() obtenemos la parte entera de un numero
    } else if (n >= 100 && n <= 999) {
        // Usando divisiones y multiplicaciones * 10 nos desplazamos, usando el % 1 como un inverso de trunc
        // Probemos con 243 
        Digito1 = Math.trunc(n / 100); // Math.trunc(2.43)
        Digito2 = Math.trunc(((n / 100) % 1) * 10); // Math.trunc((2.43 % 1) * 10) = Math.trunc(0.43 * 10)
        Digito3 = Math.trunc(((n / 10) % 1) * 10); // Math.trunc((24.3 % 1) * 10) = Math.trunc((24.3 % 1) * 10) = Math.trunc(0.3 * 10)

        return Digito3 + "" + Digito2 + "" + Digito1;
    } else if (n >= 1000 && n <= 9999) {
        Digito1 = Math.trunc(n / 1000);
        Digito2 = Math.trunc(((n / 1000) % 1) * 10);
        Digito3 = Math.trunc(((n / 100) % 1) * 10);
        Digito4 = Math.round(((n / 10) % 1) * 10);

        return Digito4 + "" + Digito3 + "" + Digito2 + "" + Digito1;
    } else if (n >= 10000 && n < 99999) {
        Digito1 = Math.trunc(n / 10000);
        Digito2 = Math.trunc(((n / 10000) % 1) * 10);
        Digito3 = Math.trunc(((n / 1000) % 1) * 10);
        Digito4 = Math.trunc(((n / 100) % 1) * 10);
        Digito5 = Math.round(((n / 10) % 1) * 10);

        return Digito5 + "" + Digito4 + "" + Digito3 + "" + Digito2 + "" + Digito1;
    }
}

console.log(invertir(342));
console.log(invertir(7349));
console.log(invertir(20126));
