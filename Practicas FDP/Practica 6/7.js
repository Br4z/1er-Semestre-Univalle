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

Propósito: Eliminar de una lista todos los elementos que no sean numéricos.
Contrato:  list -> list
Prototipo: soloNumb(list)
Ejemplos: 
(["a"])   -> [] 
(["a",1]) -> [1]

*/

function soloNumb(lista) {
    if (isEmpty(lista)) {
        return [];
    } else if (isNaN(first(lista)) || first(lista) === true || first(lista) === false) { // Todas la condiciones necesarias para filtrar
        return soloNumb(rest(lista));
    } else {
        return cons(first(lista), soloNumb(rest(lista)));
    }
}

console.log(soloNumb([]));
console.log(soloNumb(["a"]));
console.log(soloNumb(["a", 1]));
console.log(soloNumb([6, "b"]));
console.log(soloNumb([6, "b", 1, 2, true, "b", false, -2]));
