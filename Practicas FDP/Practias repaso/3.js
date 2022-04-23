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

Propósito: Convertir grados en radiants.
Contrato:  number -> number
Prototipo: radToDegrees(number)
Ejemplos: 
(360) -> 6.283185

*/

function radToDegrees(g) {
    return g * (Math.PI / 180);
}

/*

Propósito: Calcular la apotema de un polígono regular.
Contrato:  number -> number
Prototipo: apotema(number)
Ejemplos: 
(5, 6) -> 4.2

*/

function apotema(n, l) {
    return l / (2 * Math.tan(radToDegrees(360 / (2 * n))));
}

/*

Propósito: Calcular el perímetro de un polígono regular.
Contrato:  number, number -> number
Prototipo: perimetro(number, number)
Ejemplos: 
(2, 7)  -> 14
(19, 2) -> 38

*/

function perimetro(n, l) {
    return n * l;
}

/*

Propósito: Hallar el area de un polígono regular, dado su numero de lados (l) y la longitud de cada uno (x).
Contrato:  number, number -> number
Prototipo: areaP(number, number)
Ejemplos: 
(6, 5) -> 61.9
(5, 9) -> 154.5
(8, 6) -> 166.3

*/

function areaP(l, n) {
    return (perimetro(n, l) * apotema(n, l)) / 2;
}

console.log(areaP(6, 5).toFixed(1));
console.log(areaP(5, 9).toFixed(1));
console.log(areaP(8, 6).toFixed(1));
