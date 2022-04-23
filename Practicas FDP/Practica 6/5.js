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

Propósito: Calcular el numero que se encuentra en "p" posición de la sucesión de Fibonacci, modificando las posiciones
en n + 1 (empezando por 0).
Contrato:  number -> number
Prototipo: fibonacci(number)
Ejemplos: 
(1) -> 0
(2) -> 1

*/

function fibonacci(p) {
    if (p == 1) {
        return 0;
    } else if (p <= 2) {
        return 1;
    } else {
        return fibonacci(p - 1) + fibonacci(p - 2);
    }
}

/*

Propósito: Concatenar dos listas.
Contrato:  list -> list
Prototipo: concatenar(list)
Ejemplos: 
([1, 5], [2, 5]) -> [1, 5, 2 ,5] 
([])             -> []

*/

function concatenar(list1, list2) {
    if (isEmpty(list1)) {
        return list2;
    } else {
        return cons(first(list1), concatenar(rest(list1), list2));
    }
}

/*

Propósito: Hacer una lista de las números hasta n posición de la sucesión de Fibonacci.
Contrato:  list -> list
Prototipo: listaF(list)
Ejemplos: 
(0) -> [] 
(1) -> [0]

*/

function listaF(n) {
    if (n == 0) {
        return [];
    } else {
        return concatenar(listaF(n - 1), [fibonacci(n)]); 
    }
}

console.log(listaF(0));
console.log(listaF(1));
console.log(listaF(2));
console.log(listaF(3));
console.log(listaF(6));
