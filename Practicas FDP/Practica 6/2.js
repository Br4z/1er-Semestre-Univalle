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

Propósito: Hacer la suma de los números que se encuentran en la lista.
Contrato:  list -> number
Prototipo: suma(list)
Ejemplos: 
([3, 2]) -> 5 
([4, 4]) -> 8

*/

function suma(lista) {
    if (isEmpty(lista)) {
        return 0;
    } else {
        return first(lista) + suma(rest(lista));
    }
}

/*

Propósito: Calcular el promedio de los elementos (en este caso números) que tiene la lista.
Contrato:  list -> number
Prototipo: promedio(list)
Ejemplos: 
([3, 2]) -> 2.5 
([])     -> null

*/

function promedio(lista) {
    if (isEmpty(lista)) {
        return null;
    } else {
        return (suma(lista) / longitud(lista)).toFixed(0);
    }
}

console.log(promedio([]));
console.log(promedio([5]));
console.log(promedio([0, 1, 8]));
console.log(promedio([10, 2, 3, 1, 4, 4, 4]));
