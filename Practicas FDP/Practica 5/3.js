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

Propósito: Resolver la operación indicada del rango "i" hasta "f".
Contrato:  number, number -> number
Prototipo: operacion(number)
Ejemplos: 
(1, 3) -> 441
(2, 4) -> 906

*/

function operacion(i, f) {
    if (i == f) {
        return Math.pow(f * f + 7, 2);
    } else {
        return Math.pow(i * i + 7, 2) + operacion(i + 1, f);
    }
}

console.log(operacion(1, 3));
console.log(operacion(2, 4));
console.log(operacion(8, 9));
console.log(operacion(0, 100));
