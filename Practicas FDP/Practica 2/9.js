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

Propósito: Resolver un polinomio cuadrático.
Contrato:  number, number, number, number -> number
Prototipo: polinomioC(number, number, number, number)
Ejemplos: 
(2, 7, 5, 3)     -> 44
(19, 34, -20, 2) -> 124

*/

function polinomioC(a, b, c, x) {
    return a * Math.pow(x, 2) + b * x + c; // La forma ax^2 + bx + c
}

console.log(polinomioC(2, 7, 5, 3));
console.log(polinomioC(19, 34, -20, 2));
console.log(polinomioC(1, 0, 12, 3));
