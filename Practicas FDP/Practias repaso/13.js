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

const { cons, first, rest, isEmpty, isList, length } = require("functional-light");

/*

Propósito: Encontrar el numero mayor en una lista.
Contrato:  list -> number
Prototipo: mayorL(lista)
Ejemplos: 
([])        -> null
([1, 6, 2]) -> 6

*/

function mayorL(lista) {
    if (isEmpty(lista)) {
        return null;
    } else if (isEmpty(rest(lista))) {
        return first(lista);
    } else {
        return Math.max(first(lista), mayorL(rest(lista))); // Al final tendríamos varios max anidados
    }
}

console.log(mayorL([]));
console.log(mayorL([1, 6, 2]));
console.log(mayorL([-9]));
console.log(mayorL([1, 6, 20, 3, -6, 8, 9]));
