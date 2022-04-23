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

Propósito: Saber cuanto gasta normalmente.
Contrato:  number, number, number -> number
Prototipo: gastos(number, number, number)

*/

function gastos(t, c, f) {
    return 3000 * t + 5000 * c + 3000 * f;
}

/*

Propósito: Saber cuanto ahorra en una semana.
Contrato:  number, number, number -> number
Prototipo: ahorro(number, number, number)

*/

function ahorro(d, t, c) {
    return gastos(d, d, d) - gastos(d - t, d - c, d);
}

/*

Propósito: Saber cuanto ahorra en un mes.
Contrato:  number,number, number -> number
Prototipo: ahorroMensual(number,number, number)

*/

function ahorroMensual(d, t, c) {
    return 4 * ahorro(d, t, c);
}

console.log(ahorroMensual(5, 2, 5));
