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

Planteamiento del problema: Queremos encontrar el valor total del crédito, téngase en cuenta que llamamos crédito a el dinero que sera
financiado durante 30 años y a "z" condiciones.

*/

/*

Propósito: Hallar el valor final de la hipoteca de durante 30 años a un interés simple del 8% de la deuda final 
(el valor del inmueble menos la cuota inicial).
Contrato:  number, number -> number
Prototipo: hipoteca(number, number )
Ejemplos: 
(150000000, 35000000) -> 391000000

*/

function hipoteca(m, c) {
    return m - c + (m - c) * (8 / 100) * 30;
}

/*

Propósito: Hallar los gastos de representación durante esos 30 años.
Contrato:  number -> number
Prototipo: gastosR(number)
Ejemplos: 
(45000000) -> 2700000

*/

function gastosR(m) {
    return ((m * 0.2) / 100) * 30;
}

/*

Propósito: Hallar el crédito total con el que saldría la casa.
Contrato:  number -> number
Prototipo: credito(number)
Ejemplos: 
(50000000, 5000000) -> 156000000

*/

function credito(m, c) {
    return hipoteca(m, c) + gastosR(m);
}

console.log(credito(50000000, 5000000));
