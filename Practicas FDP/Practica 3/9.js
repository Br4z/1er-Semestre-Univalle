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

Propósito: Categorizar a una persona según su estatura.
Contrato:  number -> string
Prototipo: estatura(number)
Ejemplos: 
(120) -> "estatura baja"
(128) -> "estatura baja"

*/

function estatura(e) {
    if (e < 130) {
        return "estatura baja";
    } else if (e > 130 && e <= 169) {
        return "estatura media";
    } else if (e > 170) {
        return "estatura alta";
    } else if (e > 0) {
        return "No entra en los parametros";
    }
}

console.log(estatura(120));
console.log(estatura(128));
console.log(estatura(165));
console.log(estatura(183));
console.log(estatura(190));
