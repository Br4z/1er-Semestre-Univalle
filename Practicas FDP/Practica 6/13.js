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

Propósito: Eliminar el elemento que se encuentra en el indice "n", si no se encuentra ese indice retorna la misma lista.
Contrato:  list, number -> list
Prototipo: eliminar(list, number)
Ejemplos: 
([1, 2, 3], 7)          -> [1, 2, 3]
([1, 0, 3, 5, 9, 3], 0) -> [0, 3, 5, 9, 3]

*/

function eliminar(lista, indice) {
    if (isEmpty(lista)) {
        // Esta condición también sirve para cuando el indice exceda al numero de elementos de la lista, junto
        return []; // con el rest, si el indice se pasa entonces la lista llegara a estar vaciá, por lo que devuelve la misma lista
    } else if (indice == 0) {
        return rest(lista);
    } else {
        return cons(first(lista), eliminar(rest(lista), indice - 1));
    }
}
console.log(eliminar([1, 2, 3], 7));
console.log(eliminar([1, 2, 3], 1));
console.log(eliminar([1, 0, 3, 5, 9, 3], 5));
console.log(eliminar([1, 0, 3, 5, 9, 3], 0));
console.log(eliminar([], 0));
console.log(eliminar([2, 4], -1));
