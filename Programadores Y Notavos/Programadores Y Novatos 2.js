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

Propósito: Calcular el crecimiento en la población de lobos durante una temporada.
Contrato: number, number -> number
Prototipo: crecimientoLobosEnTemporada(number, number)
Ejemplos: 
() -> 


*/

function crecimientoLobosEnTemporada(l, c) {
    if (l < c) {
        return Math.round(l + l * 0.6);
    } else {
        return 60 * (1 + 0.6);
    }
}

/*

Propósito: Calcular la población final de la temporada.
Contrato: number, number -> number
Prototipo: lobosAlFinalDeTemporada(number, number)
Ejemplos: 
() -> 

*/

function lobosAlFinalDeTemporada(l, c) {
    return Math.round(crecimientoLobosEnTemporada(l, c) * (1 - 0.3));
}

/*

Propósito: Calcular el numero de lobos en la temporada 2.
Contrato: number, number -> number
Prototipo: lobosTemporada2(number, number)
Ejemplos: 
() -> 

*/

function lobosTemporada2(l, c) {
    if (l >= c) {
        return Math.round(crecimientoLobosEnTemporada(l, c) * (1 - 0.3));
    } else {
        return Math.round(lobosAlFinalDeTemporada(l, c) * (1 + 0.6) * (1 - 0.3));
    }
}

/*

Propósito: Calcular el crecimiento o la reproducción que tuvieron los lobos en la temporada 2.
Contrato: number, number -> number
Prototipo: CrecimientoLobosEnTemporada2(number, number)
Ejemplos: 
() -> 

*/

function crecimientoLobosEnTemporada2(l, c) {
    if (l < c) {
        return Math.round(lobosTemporada2(l, c) / 0.7);
    } else {
        return 60 * (1 + 0.6);
    }
}

console.log(lobosTemporada2(250, 300)); // 67  // 57
console.log(crecimientoLobosEnTemporada2(250, 300)); // 96  // 40
