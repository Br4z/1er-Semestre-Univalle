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
    value: 8,
    left: {
        value: 5,
        left: {
            value: 3,
        },
        right: {
            value: 6,
        },
    },
    right: {
        value: 10,
        left: null,
        right: {
            value: 12,
        },
    },
};

const treeOne = {
    value: 5,
    left: {
        value: 2,
        left: {
            value: 1,
        },
        right: {
            value: 7,
        },
    },
    right: {
        value: 7,
        left: {
            value: 6,
        },
        right: null,
    },
};

/*

Propósito: Determinar si un elemento esta en la lista.
Contrato:  tree, (number or string) -> boolean 
Prototipo: searchTree(tree,elemento)
Ejemplos: 
(tree, 12) -> true
(tree, 8)  -> true

*/

function searchTree(tree, elemento) {
    if (!tree) {
        return false;
    } else if (tree.value == elemento) {
        return true;
    } else {
        return searchTree(tree.left, elemento) || searchTree(tree.right, elemento); // Recorremos todo el árbol
    }
}

console.log(searchTree(tree, 12));
console.log(searchTree(tree, 8));
console.log(searchTree(tree, 0));
console.log(searchTree(treeOne, 2));
console.log(searchTree(treeOne, 1));
console.log(searchTree(treeOne, 4));
