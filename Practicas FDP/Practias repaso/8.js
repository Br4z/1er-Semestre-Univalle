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

Propósito: Determinar si un valor está entre el intervalo (-5,-2],(7,10) o (5,6], si está en alguno de ellos, retorna true, si no está, retorna false.
Contrato:  number -> boolean
Prototipo: intervalo(number)
Ejemplos: 
(5)  -> false
(-2) -> false

*/

function intervalo(n) {
    if (n > -5 && n <= -2) {
        return true;
    } else if (n > 7 && n < 10) {
        return true;
    } else if (n > 5 && n <= 6) {
        return true;
    } else {
        return false;
    }
}

console.log(intervalo(-5));
console.log(intervalo(-2));
console.log(intervalo(5));
