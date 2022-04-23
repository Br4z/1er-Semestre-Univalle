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

Propósito: Invertir la palabra ingresada.
Contrato:  string -> string
Prototipo: PInvertida(string)
Ejemplos: 
("ala") -> ala

*/

function PInvertida(palabra) {
    if (palabra.length == 1) {
        return palabra;
    } else {
        return PInvertida(palabra.substring(1)) + palabra.charAt(0); // Asi la letra queda al final de la llamada recursiva
    }
}

/*

Propósito: Comprobar si la palabra ingresada es palíndroma.
Contrato:  string -> boolean
Prototipo: palindromo(string)
Ejemplos: 
("ala") -> true

*/

function palindromo(palabra) {
    if (palabra == PInvertida(palabra)) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo("ala"));
console.log(palindromo("alambrala"));
console.log(palindromo("reconocer"));
