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

Propósito: Hallar area de un polígono regular.
Contrato:  number, number -> number
Prototipo: areaPoligono()
Ejemplos: 
(6, 5) -> 61.9
(5, 9) -> 154.5

*/

function areaPoligono(Longitud, Lados) {
    return (Lados * Longitud * Longitud) / (4 * Math.tan(Math.PI / Lados)); // Partiendo de la formula A = (perímetro * apotema) / 2
} // De ahi la apotema = l / (2 * tan(360 / 2 * lados)), respetando ademas que el argumento de tan sean radianes

console.log(areaPoligono(6, 5).toFixed(1));
console.log(areaPoligono(5, 9).toFixed(1));
console.log(areaPoligono(8, 6).toFixed(1));
