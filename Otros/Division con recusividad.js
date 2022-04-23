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

// Función que pregunta al usuarios dos números y verifica si el primero es divisible por el segundo.

console.log("Bienvenido a calculadora de divisibilidad v1.1 \n");

a = prompt("Ingrese el numero al que quiere comprobarle la divisibilidad:");
n = prompt("Ingrese el divisor que quiere probar:");

function esDivisible(n) {
    if (n == 0) {
        return true;
    } else if (n < 0) {
        return false;
    } else {
        return SiEsDivisible2(a - 2);
    }
}

if (esDivisible) {
    console.log("El numero: ", a, " es divisible por: ", n);
} else {
    console.log("El numero: ", a, " no es divisible por: ", n);
}
