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

Propósito: Saber cuantos elementos contiene una lista.
Contrato:  list -> number
Prototipo: elementos(lista)
Ejemplos: 
([])      -> null
([1, 6, 2]) -> 3

*/

function elementos(lista) {
    if (isEmpty(lista)) {
        return 0;
    } else if (isEmpty(rest(lista))) {
        return 1;
    } else {
        return 1 + elementos(rest(lista));
    }
}

/*

Propósito: Sumar los elementos de una lista.
Contrato:  list -> number
Prototipo: sumaE(lista)
Ejemplos: 
([])      -> null
([1, 6, 2]) -> 9

*/

function sumarE(lista) {
    if (isEmpty(lista)) {
        return 0;
    } else if (isEmpty(rest(lista))) {
        return first(lista);
    } else {
        return first(lista) + sumarE(rest(lista));
    }
}

/*

Propósito: Hallar el promedio de los elementos de una lista.
Contrato:  list -> number
Prototipo: promedio(lista)
Ejemplos: 
([])      -> null
([1, 6, 2]) -> 3

*/

function promedio(lista) {
    if (isEmpty(lista)) {
        return null;
    } else {
        return sumarE(lista) / elementos(lista);
    }
}

console.log(promedio([]));
console.log(promedio([5]));
console.log(promedio([0, 1, 8]));
console.log(promedio([10, 2, 3, 1, 4, 4, 4]));
