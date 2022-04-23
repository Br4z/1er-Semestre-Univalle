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
    value: 18,
    left: {
        value: 2,
        left: {
            value: 6,
            left: {
                value: 21,
            },
            right: {
                value: 5,
            },
        },
        right: {
            value: 3,
            left: {
                value: 15,
                left: {
                    value: 24,
                },
                right: {
                    value: null,
                },
            },
            right: {
                value: null,
            },
        },
    },
    right: {
        value: 3,
        left: {
            value: 7,
        },
        right: {
            value: 12,
            left: {
                value: 2,
            },
            right: {
                value: 3,
            },
        },
    },
};

/*

Propósito: Recorrer un árbol y decir cuantos números pares hay en los nodos.
Contrato:  tree -> number
Prototipo: pares(tree)
Ejemplos: 
(tree) -> 6

*/

function pares(tree) {
    if (!tree) {
        // Sirve para evaluar que no existan values.
        return 0;
    } else if (tree.value % 2 == 0 && tree.value != null) { // Un null da como cierto la primera afirmación, asi que 
        valor = tree.value; // hay que prever ese caso
        return 1 + pares(tree.left) + pares(tree.right); 
    } else {
        return pares(tree.left) + pares(tree.right);
    }
}

console.log(pares(tree));
