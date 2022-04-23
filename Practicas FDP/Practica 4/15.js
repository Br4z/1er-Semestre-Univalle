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

Propósito: Calcular I.M.C
Contrato:  number, number -> number
Prototipo: IMC(number)
Ejemplos: 
(85, 1.66) -> 30.84
(53, 1.55) -> 22.06

*/

function IMC(p, a) {
    return (p / (a * a)).toFixed(2);
}

/*

Propósito: Clasificar el IMC.
Contrato:  number, number -> string
Prototipo: clasificarIMC(number)
Ejemplos: 
(85, 1.66) -> "obesidad"
(53, 1.55) -> "peso es normal"

*/

function clasificarIMC(p, a) {
    if (IMC(p, a) < 18.5) {
        return "peso es inferior al normal";
    } else if (IMC(p, a) > 18.5 && IMC(p, a) < 24) {
        return "peso es normal";
    } else if (IMC(p, a) > 25 && IMC(p, a) < 29.9) {
        return;
    } else {
        return "obesidad";
    }
}

console.log(IMC(85, 1.66));
console.log(clasificarIMC(85, 1.66));
console.log(IMC(53, 1.55));
console.log(clasificarIMC(53, 1.55));
console.log(IMC(52, 1.8));
console.log(clasificarIMC(52, 1.8));
console.log(IMC(90, 2.0));
console.log(clasificarIMC(90, 2.0));
