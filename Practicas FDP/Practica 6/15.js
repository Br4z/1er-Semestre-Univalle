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

Propósito: Retornar los elementos de la lista que cumplan con unas condiciones, retornando una lista.
Contrato:  list, function -> list
Prototipo: filtro(list, function)
Ejemplos: 
([1, 3, 4, 6, 0, 1], (a) => a > 3)                    -> [ 4, 6 ]
(["ab", "acv", "gggg", "cds"], (a) => a.length == 3 ) -> [ 'acv', 'cds' ]

*/

function filtro(lista, condicion) {
    if (isEmpty(lista)) {
        return [];
    } else if (condicion(first(lista))) {
        return cons(first(lista), filtro(rest(lista), condicion));
    } else {
        return filtro(rest(lista), condicion);
    }
}

console.log(filtro([1, 3, 4, 6, 0, 1], (a) => a > 3));
console.log(filtro(["ab", "acv", "gggg", "cds"], (a) => a.length == 3));
