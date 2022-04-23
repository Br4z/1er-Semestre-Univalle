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

/*

Propósito: Hacer una lista con las hojas del árbol.
Contrato:  tree -> list 
Prototipo: listaHojas(tree)
Ejemplos: 
(null) -> 0
({ value: 5, left:{ value: 4 } }) -> [4]

*/

const tree = { 
    value: 5, 
        left:  { value: 4 }, 
        right: { value: 6 } 
};

function listaHojas(tree) {
    if (!tree) {
        return [];
    } else if (!tree.value) {
        return [];
    } else if (!tree.left && !tree.right) { // Recordemos que las hojas son las que no tienen nada a la derecha ni a la izquierda
        return [tree.value]; 
    } else {
        return listaHojas(tree.left).concat(listaHojas(tree.right));
    }
}

console.log(listaHojas(null));
console.log(listaHojas([]));
console.log(listaHojas({ value: 5 }));
console.log(listaHojas({ value: 5, left: { value: 4 } }));
console.log(listaHojas({ value: 5, right: { value: 6 } }));
console.log(listaHojas(tree));
