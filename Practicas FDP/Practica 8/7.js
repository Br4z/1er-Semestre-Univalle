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

Propósito: Encontrar la profundidad de un árbol sin contar la raíz.
Contrato:  tree -> number
Prototipo: deepTree(tree)
Ejemplos: 
(tree) -> 4

*/

function nivelNodos(tree) {
    if (!tree) {
        return 0;
    } else if (tree.left || tree.right) { // Mientras no sean null
        // Mientras haya algo sigue bajando el árbol, lo que hace que baje de nivel
        return 1 + Math.max(nivelNodos(tree.left), nivelNodos(tree.right)); // Inicialmente recorre las dos partes del árbol, y se escoge el nivel mas profundo
    } else {
        return 0;
    }
}

/*

Propósito: Encontrar la profundidad de un árbol.
Contrato:  tree -> number
Prototipo: deepTree(tree)
Ejemplos: 
(tree) -> 5

*/

function deepTree(tree) {
    return nivelNodos(tree) + 1;
}

console.log(deepTree(tree));
