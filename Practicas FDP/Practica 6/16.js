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

Propósito: Aplicar una función a cada elemento de una lista, retornando una lista.
Contrato:  list, function -> list
Prototipo: map(list, function)
Ejemplos: 
([1, 2, 3, 4], (x) => x * x)                              -> [ 1, 4, 9, 16 ]
([{ a: "María" }, { a: "Carlos" }], (v) => "Hola " + v.a) -> [ 'Hola María', 'Hola Carlos' ]

*/

function map(lista, condicion) {
    if (isEmpty(lista)) {
        return [];
    } else {
        return cons(condicion(first(lista)), map(rest(lista), condicion));
    }
}

console.log(map([1, 2, 3, 4], (x) => x * x));
console.log(map([{ a: "María" }, { a: "Carlos" }], (v) => "Hola " + v.a));
