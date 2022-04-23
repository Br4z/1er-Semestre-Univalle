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

Propósito: Calcular el numero de citas de Penny por año basándonos en las vistas por Sheldoon.
Contrato:  number -> number
Prototipo: numeroCitas(number)
Ejemplos: 
() -> 47


*/

function numeroCitas() {
    return Math.round((100 * 17) / 18 / 2);
}

/*

Propósito: Calcular la edad de Penny basándonos en el numero de citas que ha tenido y la edad con la que empezó 
(estableciendo una relación lineal).
Contrato:  number -> number
Prototipo: edadPenny(number)
Ejemplos: 
() -> 


*/

function edadPenny(n) {
    return Math.round(14 + n / 22);
}

/*

Propósito: Calcular las parejas intimas que ha tenido Penny.
Contrato:  number -> number
Prototipo: parejasIntimas(number)
Ejemplos: 
() -> 
() -> 

*/

function parejasIntimas(n) {
    return Math.round((n - 21) * 0.18);
}

console.log(numeroCitas());
console.log(edadPenny(193));
console.log(parejasIntimas(193));

console.log(numeroCitas());
console.log(edadPenny(300));
console.log(parejasIntimas(300));
