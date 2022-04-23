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

Propósito: Comprobar si el año dado es bisiesto. 
Contrato:  number, number -> boolean
Prototipo: bisiesto(number,number)
Ejemplos: 
(2004) -> true
(2028) -> true

*/

/*

Un año es bisiesto en el calendario Gregoriano, si :
- Es divisible entre 4 y no divisible entre 100 
o
- Es divisible entre 400.

*/

function bisiesto(year) {
    if (year % 4 == 0 && year % 100 != 0) { // Si es divisible entre 4, pero no entre 100 no es bisiesto
        return true;
    } else if (year % 400 == 0) { // Es divisible entre 400
        return true;
    } else {
        return false;
    }
}

console.log(bisiesto(2004));
console.log(bisiesto(2028));
console.log(bisiesto(2021));
console.log(bisiesto(2016));
console.log(bisiesto(2020));
console.log(bisiesto(2032));
console.log(bisiesto(2007));
console.log(bisiesto(2012));
console.log(bisiesto(2036));
