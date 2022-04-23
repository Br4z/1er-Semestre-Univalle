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

Propósito: Eliminar el ultimo elemento de una lista.
Contrato:  list -> list
Prototipo: eliminarUltimo(lista)
Ejemplos: 
([])     -> null
([1, 2]) -> [1]

*/

function eliminarUltimo(lista) {
    if (isEmpty(rest(lista))) {
        return rest(lista);
    } else {
        return cons(first(lista), eliminarUltimo(rest(lista)));
    }
}

/*

Propósito: Encontrar el ultimo elemento de una lista.
Contrato:  list -> elemento
Prototipo: ultimoL(lista)
Ejemplos: 
([])     -> null
([1, 2]) -> 2

*/

function ultimoL(lista) {
    if (isEmpty(rest(lista))) {
        return first(lista);
    } else {
        return ultimoL(rest(lista));
    }
}

/*

Propósito: Invertir una lista.
Contrato:  lista -> lista
Prototipo: invertir(lista)
Ejemplos: 
([1, 2, 1]) -> [1, 2 ,1]
([1])       -> [1]

*/

function invertir(lista) {
    if (isEmpty(lista)) {
        return lista;
    } else {
        return cons(ultimoL(lista), invertir(eliminarUltimo(lista))); // Cuando eliminamos el ultimo elemento, lo eliminamos
    }
}

console.log(invertir([]));
console.log(invertir([1]));
console.log(invertir([4, 1, 2, 7, 4, 1]));
console.log(invertir([1, 2, 1]));


