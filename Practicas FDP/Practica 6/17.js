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

Propósito: Aplicar una función a una lista genérica, dejando en la salida solo el valor acumulado.
Contrato:  list, function, (number or string) -> (number or string)
Prototipo: reduce(list, function, (number or sting))
Ejemplos: 
([1, 2, 3, 4, 5], (val, acum) => acum + val, 0) -> 15
([1, 2, 3, 4, 5], (val, acum) => acum * val, 1) -> 120

*/

function reduce(lista, funcion, valorAcumulado) {
    if (isEmpty(lista)) {
        return valorAcumulado;
    } else {
        return reduce(rest(lista), funcion, funcion(first(lista), valorAcumulado));
    }
}

console.log(reduce([1, 2, 3, 4, 5], (val, acum) => acum + val, 0));
console.log(reduce([1, 2, 3, 4, 5], (val, acum) => acum * val, 1));
console.log(reduce([1, 7, 3, 14, 5], (val, acum) => Math.max(val, acum), 0));
console.log(reduce([1, 7, 3, 14, 5], (val, acum) => Math.min(val, acum), 9999));
console.log(reduce([{ a: "María" }, { a: "Carlos" }], (val, acum) => acum + "-" + val.a, ""));
