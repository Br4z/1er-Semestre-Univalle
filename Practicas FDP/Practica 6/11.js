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

Propósito: Insertar un elemento en una lista ordenada de manera ascendente.
Contrato:  list, (number, string or boolean) -> array
Prototipo: insertarEnOrden(list, (number, string or boolean))
Ejemplos: 
([], -2.3)               -> [-2.3]
([-2, 3, 5, 5, 6 ], 5.2) -> [-2, 3, 5, 5, 5.2, 6 ]

*/

function insetarEnOrden(lista, elemento) {
    if (isEmpty(lista)) {
        return cons(elemento, []);
    } else if (first(lista) >= elemento) {
        return cons(elemento, lista); // No discriminamos elementos (-2 = -2)
    } else {
        return cons(first(lista), insetarEnOrden(rest(lista), elemento));
    }
}

console.log(insetarEnOrden([], -2.3));
console.log(insetarEnOrden([-2, 3, 5, 5, 6], 4));
console.log(insetarEnOrden([-2, 3, 5, 5, 6], 3));
console.log(insetarEnOrden([-2, 3, 5, 5, 6], 8));
console.log(insetarEnOrden([-2, 3, 5, 5, 6], -3));
console.log(insetarEnOrden([-2, 3, 5, 5, 6], -2));
console.log(insetarEnOrden([-2, 3, 5, 5, 6], 5.2));
