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

const tree = {
    value: 5,
    left: { value: 4 },
    right: { value: 6 },
};

/*

Propósito: Enlistar los values de una lista.
Contrato:  tree -> list 
Prototipo: listaValores(tree)
Ejemplos: 
(null)                          -> 0
({ value: 5, left:{ value: 4 } }) -> [4]

*/

function listaVores(tree) {
    if (!tree) {
        // Sirve para evaluar que no existan values.
        return [];
    } else {
        valor = tree.value;
        return [valor].concat(listaVores(tree.left).concat(listaVores(tree.right))); //Aca planeo poner la recursion, pero no se como proceder seria concatenar valores por derecha y izquierda
    }
}

/*

Propósito: Indicar si se puede construir un árbol a partir de una lista dada (comparando los values dentro del árbol y la lista).
Contrato:  tree -> list 
Prototipo: listaHojas(tree)
Ejemplos: 
(null) => 0
({ value: 5, left:{ value: 4 }}) => [4]

*/

function compararListas(tree, lista) {
    if (lista.length == 0) {
        return false;
    } else if (listaVores(tree).length == lista.length) {
        return true;
    } else {
        return false;
    }
}

console.log(compararListas({}, []));
console.log(compararListas(null, []));
console.log(compararListas({ value: 5 }, null));
console.log(compararListas({ value: 5 }, [5]));
console.log(compararListas(tree, [4, 5, 6]));
