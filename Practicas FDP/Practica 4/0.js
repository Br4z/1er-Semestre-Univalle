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

Propósito: Determinar el estado del adulto con base a su presión (incluyendo acciones a tomar).
Contrato:  number -> string
Prototipo: estadoSalud(number)
Ejemplos: 
(121 / 80)  -> "adulto sano"
(172 / 180) -> "adulto sano"

*/

function estadoSalud(p) {
    if (p > 120 / 80 && p < 180 / 80) {
        return "adulto sano";
    } else if (p < 120 / 80 && p >= 0) {
        return "debe tomar medicina";
    } else if (p > 120 / 80) {
        return "debe ir al médico";
    } else {
        return "parámetro invalido";
    }
}

console.log(estadoSalud(121 / 80));
console.log(estadoSalud(172 / 80));
console.log(estadoSalud(119 / 80));
console.log(estadoSalud(7 / 80));
console.log(estadoSalud(181 / 80));
console.log(estadoSalud(199 / 80));
