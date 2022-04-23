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

Propósito: Hallar el interés para un monto dado según las condiciones del banco.
Contrato:  number -> number
Prototipo: intereses(number)
Ejemplos: 
(100)  -> 5
(2000) -> 100
(5000) -> 250

*/

function intereses(m) {
    if (m > 1000 && m < 5000) {
        return m * 0.045;
    } else if (m <= 1000 && m >= 0) {
        return m * 0.04;
    } else if (m >= 5000) {
        return m * 0.05;
    } else {
        return "El monto ingresado en invalido !";
    }
}

console.log(intereses(500));
console.log(intereses(2000));
console.log(intereses(10000));
