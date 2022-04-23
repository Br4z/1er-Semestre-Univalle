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

Propósito: Calcular la base del triangulo que se forma con los puntos dados (eje "horizontal" x).
Contrato:  number, number -> number
Prototipo: longitudBase(number, number)
Ejemplos: 
({ x: 0, y: 0 }, { x: 3, y: 4 }) -> 3


*/

function longitudBase(p1, p2) {
    return Math.abs(p1.x - p2.x);
}

/*

Propósito: Calcular la altura del triangulo que se forma con los puntos dados (eje "vertical" y).
Contrato:  number, number -> number
Prototipo: longitudAltura(number, number)
Ejemplos: 
({ x: 0, y: 0 }, { x: 3, y: 4 }) -> 4


*/

function longitudAltura(p1, p2) {
    return Math.abs(p1.y - p2.y);
}

/*

Propósito: Calcular la hipotenusa del triangulo que se forma con los puntos dados (deducción del teorema de pitagoras).
Contrato:  number, number -> number
Prototipo: distaciaEuclidiana(number)
Ejemplos: 
({ x: 0, y: 0 }, { x: 3, y: 4 }) -> 5

*/

function distaciaEuclidiana(p1, p2) {
    return Math.sqrt(Math.pow(longitudAltura(p1, p2), 2) + Math.pow(longitudBase(p1, p2), 2));
}

console.log(distaciaEuclidiana({ x: 0, y: 0 }, { x: 3, y: 4 }));
