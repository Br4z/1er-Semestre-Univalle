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

Propósito: Ordenar los valores de entrada de mayor a menor.
Contrato:  number,number,number -> string
Prototipo: ordenar(number,number,number)
Ejemplos: 
(4, 12, -12)       -> 12 4 -12 
(1782, 3999, 8523) -> 8523 3999 1782
(0, -3, -9)        -> 0 -3 -9

*/

function ordenar(numero1, numero2, numero3) {
    // Comprobamos todas las posibles situaciones 3! = 3 * 2 * 1 = 6
    if (numero3 > numero2 && numero2 > numero1) {
        return numero3 + " " + numero2 + " " + numero1;
    } else if (numero3 > numero1 && numero1 > numero2) {
        return numero3 + " " + numero1 + " " + numero2;
    } else if (numero2 > numero3 && numero3 > numero1) {
        return numero2 + " " + numero3 + " " + numero1;
    } else if (numero2 > numero1 && numero1 > numero3) {
        return numero2 + " " + numero1 + " " + numero3;
    } else if (numero1 > numero2 && numero2 > numero3) {
        return numero1 + " " + numero2 + " " + numero3;
    } else {
        return numero1 + " " + numero3 + " " + numero2;
    }
}
console.log(ordenar(4, 12, -12));
console.log(ordenar(1782, 3999, 8523));
console.log(ordenar(0, -3, -9));
