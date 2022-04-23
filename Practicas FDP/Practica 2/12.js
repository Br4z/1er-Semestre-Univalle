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

Propósito: Hallar el area del circulo inscrito en ese terreno.
Contrato:  number -> number
Prototipo: areaCirculo(number)
Ejemplos: 
(20) -> 1256.63..
(30) -> 2827.43..

*/

function areaCirculo(r) {
    return Math.PI * r * r;
}

console.log(areaCirculo(20));
console.log(areaCirculo(30));
console.log(areaCirculo(40));

/*

Propósito: Hallar el area del rectángulo inscrito en el terreno.
Contrato: number, number -> number
Prototipo:  areaRectangulo(number, number)
Ejemplos: 
(10, 9)  -> 90
(20, 40) -> 800

*/

function areaRectangulo(largo, ancho) {
    return largo * ancho;
}

console.log(areaRectangulo(3, 4));
console.log(areaRectangulo(5, 8));
console.log(areaRectangulo(7, 9));

/*

Propósito: Hallar el area neto del terreno
Contrato:  number, number -> number
Prototipo: areaTerreno(number, number)
Ejemplos: 
(20, 9)  -> 260 - 254.47 = 3.63
(20, 10) -> 400 - 314.16 = 75.94

*/

function areaTerreno(a, r) {
    diametro = 2 * r;
    return areaRectangulo(diametro, a) - areaCirculo(r) / 2;
}

console.log(areaTerreno(10, 9).toFixed(4));
console.log(areaTerreno(40, 40).toFixed(4));
console.log(areaTerreno(100, 60).toFixed(4));
