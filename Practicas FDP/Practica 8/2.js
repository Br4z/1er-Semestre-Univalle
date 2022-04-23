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

Propósito: Contar los nodos internos de un árbol (recordando que nodo es el que enlaza con otros valores,es decir, que
tiene valores por izquierda o por derecha).
Contrato:  tree -> number 
Prototipo: nodosInt(tree)
Ejemplos: 
(null)                              -> 0
({ value: 5, right: { value: 6 } }) -> 0

*/

const tree = { 
    value: 5, 
        left:  { value: 4 }, 
        right: { value: 6 } 
};

function nodosInt(tree) {
    if (!tree) {
        return 0;
    } else if (!tree.value) {
        return 0;
    } else if (!tree.left && !tree.right) {
        return 0;
    } else {
        const Nodos = 1 + nodosInt(tree.right) + nodosInt(tree.left); // Cada vez que llega a este else, se va sumando 1.
        // evaluá por izquierda y derecha al mismo tiempo.
        return Nodos - 1; // El - 1 es porque, no queremos que cuente la raíz.
    }
}

console.log(nodosInt(null));
console.log(nodosInt({}));
console.log(nodosInt({ value: 5, left: { value: 5, left: { value: 4 }, right: { value: 6 } }, right: { value: 6 } }));
console.log(nodosInt({ value: 5, right: { value: 6 } }));
console.log(nodosInt({ value: 5, right: { value: 6 } }));
console.log(nodosInt(tree));
