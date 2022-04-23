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

Propósito: Calcular el numero que se encuentra en "p" posición de la sucesión de Fibonacci.
Contrato:  number -> number or string
Prototipo: fibonacci(number)
Ejemplos: 
(1) -> 0
(2) -> 1

*/

function fibonacci(p) {
    if (p < 0) {
        return "Posición invalida";
    } else if (p <= 2) { // La sucesión respectivamente comienza asi: 1, 1, 2, 3..
        return 1;
    } else {
        return Fibonacci(p - 1) + Fibonacci(p - 2);
    }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(9));
console.log(fibonacci(15));
