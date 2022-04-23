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

Propósito: Encontrar la mitad entera entre dos parámetros a y b.
Contrato:  number, number -> number
Prototipo: adivino(number, number)
Ejemplos: 
(0, 25) -> "El número es: 12"

*/

function adivino(a, b) {
    return "El número es:" + Math.trunc((a + b) / 2); // Extraemos la parte entera
}

/*

Propósito: Proponer el el rango mayor respecto al rango que ya dio la función adivino.
Contrato:  number, number -> number
Prototipo: rangoMayor(number, number)
Ejemplos: 
(0, 15) -> "El número es: 7"
(7, 15) -> "El número es: 11"

*/

function rangoMayor(a, b) {
    return Adivino(a, b);
}

/*

Propósito: Proponer el el rango menor respecto al rango que ya dio la función adivino.
Contrato:  number, number -> number
Prototipo: rangoMenor(number, number)
Ejemplos: 
(7, 11) -> "El número es: 9"
(9, 11) -> "El número es: 10"

*/

function rangoMenor(a, b) {
    return adivino(a, b);
}

console.log(adivino(0, 25));
console.log(rangoMayor(0, 15));
console.log(rangoMayor(7, 15));
console.log(rangoMenor(7, 11));
console.log(rangoMayor(9, 11));
