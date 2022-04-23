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
([1,5]) ->2 
([]) -> 0

*/

function longitud(lista) {
    if (isEmpty(lista)) {
        return 0;
    } else {
        return 1 + longitud(rest(lista));
    }
}

/*

Propósito: Concatenar dos listas.
Contrato:  list, list -> list
Prototipo: concatenar(list, list)
Ejemplos: 
([1,5]) ->2 
([]) -> 0

*/

function concatenar(list1, list2) {
    if (isEmpty(list1)) {
        return list2;
    } else {
        return cons(first(list1), concatenar(rest(list1), list2));
    }
}

/*

Propósito: Invertir el orden de los elementos en la lista.
Contrato:  list -> list
Prototipo: invertir(list)
Ejemplos: 
([1, 5]) -> [5, 1]
([])     -> []

*/

function invertir(lista) {
    if (isEmpty(lista)) {
        return [];
    } else if (longitud(lista) == 1) {
        return lista;
    } else {
        return concatenar(invertir(rest(lista)), cons(first(lista), [])); // Estamos apilando los elementos en la izquierda
    }
}

console.log(invertir([]));
console.log(invertir([1]));
console.log(invertir([4, 1, 2, 7, 4, 1]));
console.log(invertir([1, 2, 1]));
