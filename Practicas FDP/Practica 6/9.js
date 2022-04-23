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

Propósito: Reemplazar un elemento en la posición "x" de una lista si x > 0 y x < Longitud de la lista.
Contrato:  number, list ,(number, string or boolean) -> list
Prototipo: reemplazar(number, list, (number, string or boolean))
Ejemplos: 
(0, [1,2,3], 7) -> [7, 2, 3]
(7, 0, [])      -> [7]

*/

function reemplazar(posicion, lista, elemento) {
    if (posicion == 0 && !isEmpty(lista)) {
        return cons(elemento, rest(lista));
    } else if (isEmpty(lista)) {
        // Si la posición es negativa o mayor al numero de elementos va a llegar un punto en que el uso de rest(lista)
        return lista; // llegue a dar vació por la recursividad de abajo, lo que hace que retone la lista.
    } else {
        return cons(first(lista), reemplazar(posicion - 1, rest(lista), elemento));
    }
}

console.log(reemplazar(0, [1, 2, 3], 7));
console.log(reemplazar(1, [1, 2, 3], 7));
console.log(reemplazar(5, [1, 0, 3, 5, 9, 3], 8));
console.log(reemplazar(-1, [1, 0, 3, 5, 9, 3], 8));
console.log(reemplazar(0, [], 7));
