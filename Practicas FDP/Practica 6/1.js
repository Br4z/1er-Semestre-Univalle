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

const { cons, first, rest, isEmpty, isList } = require("functional-light");

/*

Propósito: Calcular el numero de elementos que tiene la lista (longitud).
Contrato:  list -> number
Prototipo: longitud(list)
Ejemplos: 
([1, 5]) -> 2 
([])     -> 0

*/

function longitud(lista) {
    if (isEmpty(lista)) {
        return 0;
    } else {
        return 1 + longitud(rest(lista));
    }
}

/*

Propósito: Encontrar el numero mayor en una lista.
Contrato:  list -> number
Prototipo: mayor(list)
Ejemplos: 
([3,2]) -> 3 
([4,4]) -> 4

*/

function mayor(lista) {
    if (isEmpty(lista)) {
        return null;
    } else if (longitud(lista) == 1) {
        return first(lista);
    } else {
        return Math.max(first(lista), mayor(rest(lista)));
    }
}

console.log(mayor([]));
console.log(mayor([1, 6, 2]));
console.log(mayor([-9]));
console.log(mayor([1, 6, 20, 3, -6, 8, 9]));
