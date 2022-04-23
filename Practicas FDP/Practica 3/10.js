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

Propósito: Hallar el cuadrante en el que se encuentran las coordenadas.
Contrato:  number, number -> string
Prototipo: cuandrante(number, number)
Ejemplos: 
(3, 4) -> 1 cuadrante
(5, 1) -> 1 cuadrante

*/

function cuadrante(x, y) {
    if (x > 0 && y > 0) {
        return "1 cuadrante";
    } else if (x > 0 && y < 0) {
        return "4 cuadrante";
    } else if (x < 0 && y < 0) {
        return "3 cuadrante";
    } else if (x < 0 && y > 0) {
        return "2 cuadrante";
    } else {
        return "El cuadrante no esta definido";
    }
}

console.log(cuadrante(3, 4));
console.log(cuadrante(3, -2));
console.log(cuadrante(-2, 5));
console.log(cuadrante(-3, -3));
console.log(cuadrante(5, 1));
