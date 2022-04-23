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

Propósito: Adjuntar una afirmación a determinados rangos de temperatura.
Contrato:  number -> string
Prototipo: temperatura(number)
Ejemplos: 
(8)  -> "muy frio"
(-3) -> "helado"

*/

function temperatura(t) {
    if (t < 0) {
        return "helado";
    } else if (t > 0 && t < 10) {
        return "muy frío";
    } else if (t > 10 && t < 20) {
        return "frío";
    } else if (t > 20 && t < 30) {
        return "normal";
    } else if (t > 30 && t < 40) {
        return "caliente";
    } else if (t >= 40) {
        return "muy caliente";
    }
}

console.log(temperatura(8));
console.log(temperatura(-3));
console.log(temperatura(22));
console.log(temperatura(38));
console.log(temperatura(41));
console.log(temperatura(11));
