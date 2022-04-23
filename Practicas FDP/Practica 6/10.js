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

Propósito: Saber si un elemento se encuentra en la lista.
Contrato:  list, (number, string or boolean) -> boolean
Prototipo: estaEnLista(list, (number, string or boolean))
Ejemplos: 
([1, 2, 3, 4], 2) -> true
([2, 4, 6], 10)   -> false

*/

function estaEnLista(lista, elemento) {
    if (first(lista) == elemento) {
        return true; 
    } else if (isEmpty(lista)) {
        return false; 
    } else {
        return estaEnLista(rest(lista), elemento);
    }
}

/*

Propósito: Encontrar la posición de un elemento que se encuentra en la lista en n - 1 (indice).
Contrato:  list, (number, string or boolean) -> number
Prototipo: lookupxElementoEnlista(list, (number, string or boolean))
Ejemplos: 
([1, 2, 3, 4], 2)   -> 1
([2, 4, 6, 10], 10) -> 3

*/

function lookupxElementoEnlista(lista, elemento) {
    if (first(lista) == elemento) {
        return 0; // Para que se quede en el anterior
    } else {
        return 1 + lookupx(rest(lista), elemento);
    }
}

/*

Propósito: Encontrar la posición en la que debería estar un elemento que no se encuentra en la lista (orden ascendente).
Contrato:  list, (number, string or boolean) -> number
Prototipo: lookupxElementoFueraDelista(list, (number, string or boolean))
Ejemplos: 
([1, 2, 3, 4], 3.5) -> 3
([], 1.1))          -> 0

*/

function lookupxElementoFueraDelista(lista, elemento) {
    if (first(lista) > elemento) {
        return 0; // Para que se quede en el anterior
    } else if (isEmpty(lista)) {
        return 0;
    } else {
        return 1 + lookupxElementoFueraDelista(rest(lista), elemento);
    }
}

/*

Propósito: Si se encuentra el elemento en la lista arrojara la posición en la que sen encuentra un elemento en la lista, de lo
contrario arrojara un - (n + 1) donde "n" seria la posición donde tendría que estar el elemento para que la lista siga ordenada.
Contrato:  array, (number, text or boolean) -> number
Prototipo: lookupx(array, (number, text or boolean))
Ejemplos: 
([1, 2, 3, 4], 3.5) -> 3
([], 1.1))          -> 0

*/

function lookupx(lista, elemento) {
    if (estaEnLista(lista, elemento)) {
        return lookupxElementoEnlista(lista, elemento);
    } else {
        return -lookupxElementoFueraDelista(lista, elemento) - 1; // formula - (n + 1) =  - n - 1
    }
}

console.log(lookupx([1, 2, 3, 4], 2));
console.log(lookupx([1, 2, 3, 4], 3.5));
console.log(lookupx([], 1.1));
console.log(lookupx([2, 4, 6, 10], 10));
console.log(lookupx([2, 4, 6, 10], 11));
