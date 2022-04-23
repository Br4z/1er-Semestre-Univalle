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

Propósito: Dadas tales condiciones, determinar que operación debe aplicarse a los datos dados.
Contrato:  number, number, number -> number
Prototipo: operacion(number,number,number)
Ejemplos: 
(9, 17, 1)  -> 16677181699666568
(52, 13, 3) -> 13

*/

function operacion(a, b, i) {
    if (i == 1) {
        return Math.pow(a, b);
    } else if (i == 2) {
        return Math.sqrt(a).toFixed(2) + " " + Math.pow(b, 1 / 3).toFixed(2);
    } else if (i == 3) {
        return Math.min(a, b);
    } else {
        return "No tengo operación para el número ingresado";
    }
}

console.log(operacion(7, 4, 3));
console.log(operacion(9, 17, 1));
console.log(operacion(7, 13, 3));
console.log(operacion(4, 9, 2));
console.log(operacion(13, 26, 2));
console.log(operacion(52, 13, 3));
console.log(operacion(19, 2, 7));
