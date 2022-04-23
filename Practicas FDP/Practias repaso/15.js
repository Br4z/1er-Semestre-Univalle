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

Propósito: Concatenar dos listas.
Contrato:  list, lista -> lista
Prototipo: concatenar(lista)
Ejemplos: 
([], []) -> []
([], [1, 2]) -> [1, 2]

*/

function concatenar(lista1, lista2) {
    if (isEmpty(lista1)) {
        return lista2;
    } else {
        return cons(first(lista1), concatenar(rest(lista1), lista2)); // Recordemos que cons(elemento, lista)
    }
}

console.log(concatenar([], []));
console.log(concatenar([], [1, 2]));
console.log(concatenar([3, 5], []));
console.log(concatenar([1, 2, true], ["FDP", 3, 8, 2, 7]));
