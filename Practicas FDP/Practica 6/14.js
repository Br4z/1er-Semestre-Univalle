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

const { cons, first, rest, isEmpty, isList, concat } = require("functional-light");

/*

Propósito: Encontrar el numero menor de una lista.
Contrato:  list -> number
Prototipo: menor(list)
Ejemplos: 
([3, 5, 3, 4]) -> 3
([4, 3, 2, 1]) -> 1

*/

function menor(lista) {
    if (isEmpty(rest(lista))) {
        return first(lista);
    } else {
        return Math.min(first(lista), menor(rest(lista)));
    }
}

/*

Propósito: Eliminar el numero menor de una lista, en caso de que esta repitió solo elimina uno de ellos.
Contrato:  list -> list
Prototipo: eliminarMenor(list)
Ejemplos: 
([3, 5, 3, 4]) -> [5, 3, 4]
([4, 3, 2, 1]) -> [4, 3, 2]

*/

function eliminarMenor(lista) {
    if (isEmpty(lista)) {
        return [];
    } else if (first(lista) == menor(lista)) {
        return rest(lista);
    } else {
        return cons(first(lista), eliminarMenor(rest(lista)));
    }
}

/*

Propósito: filtrar una lista según el modo que se le pida.
Contrato:  list, function -> list
Prototipo: clasificar(list, function)
Ejemplos: 
([3, 5, 3, 4], elementos)      -> [3, 5, 3, 4]
([[4, 3, 2, 1], 8], sublistas) -> [[1, 2, 3, 4]]

*/

function filtrar(lista, funcion){
    // Separamos elementos de sublistas porque un elemento no se puede comparar con una lista, ejemplo: 8 > [5, 3]
    if (isEmpty(lista)) {
    return [];
    } else if (funcion(first(lista))) { // Estamos usando abstracción
        return cons(first(lista), filtrar(rest(lista), funcion));
    } else {
        return filtrar(rest(lista), funcion);
    }

}

/*

Propósito: Ordenar de manera ascendente una lista, y si tiene sublistas también las ordena.
Contrato:  list -> list
Prototipo: ordenar(list)
Ejemplos: 
([3, 5, 3, 4])      -> [3, 3, 4, 5]
([[4, 3, 2, 1], 8]) -> [[1, 2, 3, 4], 8]

*/

function ordenar(lista) {
    if (isEmpty(lista)) {
        return [];
    // Siendo una sola lista la función nos devuelve una lista, entonces:
    } else if (isList(first(lista))) {
        // Es necesario que se comporten como variables
        let listaOrdenada = ordenar(first(lista))
        let primero = cons(listaOrdenada, [])
        let segundo = ordenar(rest(lista)) // Cuando llegue a la ultima lista se concatena con ese []
        return concat(primero, segundo); // Queremos que quede todo en una sola lista, por esp [[ ]]
    } else {
        return cons(menor(lista), ordenar(eliminarMenor(lista)));
    }
}

/*

Propósito: Concatenar la lista de elementos y sublistas ordenada por la función ordenar.
Contrato:  list -> list
Prototipo: ordenar(list)
Ejemplos: 
([3, 5, 3, 4])              -> [3, 3, 4, 5]
([[4, 3, 2, 1], 8, [7, 6]]) -> [[1, 2, 3, 4], [6, 7], 8]

*/

function listasOrdenadas(lista){
    // Tengo que repetir este procedimiento para ámbitos pequeños
    listaFinal = []
    // Debido a la naturaleza del problema, no sabemos que tan profundo estará la ultima lista
    for (let i of lista) {
        if(isList(i));

        sublistas = filtrar(i, x => isList(x));
        elementos = filtrar(i, x => !isList(x));

    }
    sublistas = filtrar(lista, x => isList(x));
    elementos = filtrar(lista, x => !isList(x));

    sublistasOrdenadas = ordenar(sublistas);
    elementosOrdenados = ordenar(elementos);

    return concat(sublistasOrdenadas, elementosOrdenados);
}


function quedaSublistas(lista){
    
    if(isEmpty(lista)) {
        return false;
    } else if (isList(lista)) {
        return true;
    } else {
        return quedaSublistas(rest(lista));
    }
}
// Hasta el momento solo trabaja en una profundidad de 2

function deepOrden(lista){
    listaFinal = []



}


let lista = [[2, 5]]

// console.log(deepOrden([[3, 5, 3, 4, [3, 2]], [7, 6], 9, [10, 8], 2]));

// console.log(listasOrdenadas([3, 5, 3, 4, [3, 2]]));

// console.log(listasOrdenadas([[3, 5, 3, 4], [7, 6], 9, [10, 8], 2]));

console.log(first(first(lista)))



