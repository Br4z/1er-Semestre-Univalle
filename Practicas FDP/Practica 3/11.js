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

Propósito: Comprobar si los ángulos recibidos tienen la posibilidad de ser los de un triangulo.
Contrato:  number, number, number -> boolean
Prototipo: triangulo(number, number, number)
Ejemplos: 
(100, 50, 30) -> true
(128, 33, 18) -> false

*/

function triangulo(a, b, c) {
    if (a + b + c == 180) {
        return true;
    } else {
        return false;
    }
}

console.log(triangulo(100, 50, 30));
console.log(triangulo(128, 33, 18));
console.log(triangulo(76.7, 69.7, 33.6));
console.log(triangulo(10, 80, 130));
