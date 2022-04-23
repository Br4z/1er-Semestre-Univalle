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

Propósito: Calcular el numero de personas que compraran el juego basándonos en la inversion adicional de la IA.
Contrato:  number -> number
Prototipo: compradores(number)
Ejemplos: 
(600000) -> 120
(1200000) -> 240

*/

function compradores(p) {
    return (p / 600000) * 120;
}

/*

Propósito: Calcular los impuestos que deben pagar dependiendo del monto de la inversion adicional.
Contrato:  number -> number
Prototipo: impuestos(number)
Ejemplos: 
(550000) -> 0
(700000) -> 7000

*/

function impuestos(p) {
    if (p < 600000) {
        return 0;
    } else if (p > 600000 && p < 850000) {
        return (p * 1) / 100;
    } else if (p > 850000 && p < 1000000) {
        return (p * 1.5) / 100;
    } else {
        return (p * 2) / 100;
    }
}

/*

Propósito: Calcular las ganancias de los juegos vendidos a $15000 por unidad.
Contrato:  number -> number
Prototipo: ventas(number)
Ejemplos: 
(600000)  -> 1800000
(1200000) -> 3600000

*/

function ventas(p) {
    return compradores(p) * 15000;
}

/*

Propósito: Calcular los gastos del desarrollo del videojuego con un presupuesto agregado determinado.
Contrato:  number -> number
Prototipo: gastos(number)
Ejemplos: 
(550000) -> 1550000
(700000) -> 1707000

*/

function gastos(p) {
    return 10000000 + p + impuestos(p);
}

/*

Propósito: Calcular los ingresos netos del videojuego.
Contrato:  number -> number
Prototipo: obtenerGanancias(number)
Ejemplos: 
(300000) -> -9400000
(6000000) -> 1880000

*/

function obtenerGanancias(p) {
    return Math.round(ventas(p) - gastos(p));
}

console.log(obtenerGanancias(300000));
console.log(obtenerGanancias(700000));
console.log(obtenerGanancias(6000000));
console.log(obtenerGanancias(9000000));
console.log(obtenerGanancias(38000000));
console.log(obtenerGanancias(58000000));
console.log(obtenerGanancias(100000000));
