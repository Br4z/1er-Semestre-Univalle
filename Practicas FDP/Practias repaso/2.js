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

Propósito: Resolver una ecuación cuadrática, dado un punto "x".
Contrato:  number, number, number, number -> number
Prototipo: cuadratica(number, number, number, number)
Ejemplos: 
(2, 7, 5, 3)     -> -2
(19, 34, -20, 2) -> 144
(1, 0, 12, 3)    -> 21

*/

function cuadratica(a, b, c, x) {
  return a * Math.pow(x, 2) + b * x + c; // ax^2 + bx + c
}

console.log(cuadratica(2, 7, 5, 3));
console.log(cuadratica(19, 34, -20, 2));
console.log(cuadratica(1, 0, 12, 3));
