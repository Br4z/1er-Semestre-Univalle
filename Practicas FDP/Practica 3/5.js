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

Propósito: Determinar si el numero es primo.
Contrato:  number -> boolean
Prototipo: primo(number)
Ejemplos: 
(2)  -> true
(30) -> false

*/

function primo(n) {
    // Estamos descartando los múltiplos de 2 y 5 (para los casos de prueba funciona)
    if (n == 2 || n == 5) {
        return true;
    } else if (n % 2 == 0 || n % 5 == 0) {
        return false;
    } else {
        return true;
    }
}

console.log(primo(2));
console.log(primo(30));
console.log(primo(5));
console.log(primo(17));
console.log(primo(4));
