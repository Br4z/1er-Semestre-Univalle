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

Propósito: Contar el numero de hojas que posee un árbol (recordando que las hojas son la de ultima 
instancia, donde no hay nada por izquierda ni por derecha).
Contrato:  tree -> number 
Prototipo: leafT(tree)
Ejemplos: 
(null)         -> 0
({ value: 5 }) -> 1

*/

const tree = { 
    value: 5, 
        left:  { value: 4 }, 
        right: { value: 6 } 
};

function leafT(tree) {
    if (!tree) {
        return 0;
    } else if (!tree.value) {
        return 0;
    } else if (!tree.left && !tree.right) {
        return 1;
    } else {
        return leafT(tree.left) + leafT(tree.right);// Recorremos todo el árbol
    }
}

console.log(leafT(null));
console.log(leafT({}));
console.log(leafT({ value: 5 }));
console.log(leafT({ value: 5, left: { value: 4 } }));
console.log(leafT({ value: 5, right: { value: 6 } }));
console.log(leafT(tree));
