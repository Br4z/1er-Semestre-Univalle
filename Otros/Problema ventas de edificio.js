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
financiado durante "x" periodo de tiempo y a "z" condiciones.

*/

/*

Propósito: Hallar el valor final de la hipoteca durante x intervalo de tiempo a un interés simple 
determinado sobre el valor que queda debiendo del inmueble (lo que llamamos cuota inicial).
Contrato:  number, number, number, number -> number
Prototipo: financiacion(number, number, number, number)
Ejemplos: 
(500, 1000, 8, 30) -> 1700

*/
// financiacion(cuota inicial, monto, porcentaje, años)
function financiacion(c, m, p, a) {
    return m - c + (m - c) * (p / 100) * a;
}

/*

Propósito: Hallar los gastos de representación.
Contrato:  number, number -> number
Prototipo: gastosR(number, number)
Ejemplos: 
(45000, 40) -> 3600

*/
// gastosR(cuota inicial, años)
function gastosR(m, a) {
    return ((m * 0.2) / 100) * a;
}

/*

Propósito: Hallar el crédito total con el que saldría la casa.
Contrato:  number, number, number, number -> number
Prototipo: credito(number, number, number, number)
Ejemplos: 
(500, 1000, 8, 30) -> 1760

*/
// credito(cuota inicial, monto, porcentaje, años)
function credito(c, m, p, a) {
    return financiacion(c, m, p, a) + gastosR(m, a);
}

console.log(credito(500, 1000, 8, 30));

