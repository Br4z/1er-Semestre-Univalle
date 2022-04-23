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

Propósito: Comprobar si un numero es primo.
Contrato:  number -> boolean
Prototipo: esPrimo(number)
Ejemplos: 
(2)     -> true
(12000) -> false

*/

function esPrimo(numero, divisor = 2) { // Si no recibe su divisor, por defecto es 2
    if (numero / 2 < divisor) { // Matemáticamente es una propiedad, siendo m = n / 2, m + n, n perteneciendo a los naturales
        return true; // entonces m + n, no puede ser divisor de n. También pudimos buscar divisores hasta el mismo numero, pero es menos eficiente
    } else if (numero % divisor == 0) { // Si encontró un divisor, entonces no es primo
        return false;
    } else {
        return esPrimo(numero, divisor + 1);
    }
}

console.log(esPrimo(2));
console.log(esPrimo(12000));
console.log(esPrimo(853));
console.log(esPrimo(997));
console.log(esPrimo(11));
