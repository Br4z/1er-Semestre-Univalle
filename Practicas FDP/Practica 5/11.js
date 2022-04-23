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

Propósito: Calcular el resto / residuo de la división entre "a" y "b".
Contrato:  number, number -> number
Prototipo: MOD(number, number)
Ejemplos: 
(6, 18) -> 6

*/

// Estamos usando la definición de division (restas sucesivas)
// De la forma a / b
function MOD(a, b) {
    if (a < 0) { // Un residuo por definición no puede ser negativo
        return MOD(a + b, b);
    } else if (0 <= a && a < b) { // Cuando "b" ya no puede dividir mas a "a"
        return a;
    } else {
        return MOD(a - b, b); // Después del return los llamados en la cola son procesados (sin retornar nada)
    }
}

/*

Propósito: Calcular el MCD (mínimo común divisor) entre dos números ("a" y "b").
Contrato:  number, number -> number
Prototipo: MCD(number, number)
Ejemplos: 
(25, 45) -> 5

*/

// Estamos usando el algoritmo de Euler

function MCD(a, b) {
    if (b == 0) {
        return a;
    } else {
        return MCD(b, MOD(a, b)); // El mínimo común, divisor entre a y b, es el mismo de a y (a - xb)
        // x perteneciendo a los naturales, con el modulo hacemos restas
    }
}

console.log(MCD(10, 8));
console.log(MCD(25, 45));
console.log(MCD(110, 180));
