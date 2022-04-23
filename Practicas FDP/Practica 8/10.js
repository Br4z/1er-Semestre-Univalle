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
    value: 6,
    left: {
        value: 3,
        left: {
            value: 1,
        },
        right: {
            value: 5,
            left: {
                value: 4,
            },
        },
    },
    right: {
        value: 9,
        left: {
            value: 8,
        },
        right: {
            value: 13,
            left: {
                value: 11,
                left: {
                    value: 10,
                },
                right: {
                    value: 12,
                },
            },
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
            value: 3,
        },
    },
    right: {
        value: 7,
        left: {
            value: 6,
        },
    },
};

/*

Propósito: Recorrer una árbol binario en inorder y arrojar una lista.
Contrato:  tree -> list 
Prototipo: inOrder(tree)
Ejemplos: 
(treeOne) -> [ 1, 2, 3, 5, 6, 7 ]

*/

function inOrder(tree) {
    if (!tree) {
        return [];
    } else if (!tree.left && !tree.left) {
        return [tree.value];
    } else {
        return inOrder(tree.left).concat([tree.value].concat(inOrder(tree.right)));
    }
}

console.log(inOrder(tree));
console.log(inOrder(treeOne));
