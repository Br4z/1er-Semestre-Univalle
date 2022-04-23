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

Propósito: Calcular el area del circulo pequeño.
Contrato:  number -> number
Prototipo: areaCP(number)
Ejemplos: 
(19) -> 1134.1149

*/

function areaCP(r1) {
    return (Math.pow(r1, 2) * Math.PI).toFixed(4);
}

/*

Propósito: Calcular el area del circulo grande.
Contrato:  number -> number
Prototipo: areaCG(number)
Ejemplos: 
(19) -> 1134.1149

*/

function areaCG(r2) {
    return (Math.pow(r2, 2) * Math.PI).toFixed(4);
}

/*

Propósito: Calcular la resta del area del circulo grande y el pequeño.
Contrato:  number, number -> number
Prototipo: areaR(number)
Ejemplos: 
(19,16) -> 329.8672

*/

function areaR(r2, r1) {
    return areaCG(r2) - areaCP(r1);
}

console.log(areaCG(19));
console.log(areaCP(16));
console.log(areaR(19, 16));
