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

Propósito: Insertar un elemento en "x" posición de una lista si x >= 0 y x <= Longitud de la lista.
Contrato:  (number, string or boolean), list, number -> list
Prototipo: insertar((number, string or boolean), list, number)
Ejemplos: 
(7, 0, [1,2,3]) -> [7, 1, 2, 3]
(7, 0, [])      -> [7]

*/

function insetar(elemento, posicion, lista) {
    if (posicion == 0) {
        return cons(elemento, lista);
    } else if (isEmpty(lista)) {
        // Si la posición es negativa o mayor al numero de elementos va a llegar un punto en que el uso de rest(lista)
        return lista; // llegue a dar vació por la recursividad de abajo, lo que hace que retorne la lista.
    } else {
        return cons(first(lista), insetar(elemento, posicion - 1, rest(lista)));
    }
}

console.log(insetar(7, 0, [1, 2, 3]));
console.log(insetar(7, 1, [1, 2, 3]));
console.log(insetar(8, 6, [1, 0, 3, 5, 9, 3]));
console.log(insetar(8, 7, [1, 0, 3, 5, 9, 3]));
console.log(insetar(8, -1, [1, 0, 3, 5, 9, 3]));
console.log(insetar(7, 0, []));
