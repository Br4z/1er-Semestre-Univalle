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

Propósito: Concatenar dos listas.
Contrato:  list, list -> list
Prototipo: concatenar(list, list)
Ejemplos: 
([], [1, 2]) -> [1,2] 
([], [])     -> []

*/

function concatenar(list1, list2) {
    if (isEmpty(list1)) {
        return list2;
    } else {
        return cons(first(list1), concatenar(rest(list1), list2)); // Recordando cons(elemento, lista)
    }
}

console.log(concatenar([], []));
console.log(concatenar([], [1, 2]));
console.log(concatenar([3, 5], []));
console.log(concatenar([1, 2, true], ["FDP", 3, 8, 2, 7]));
