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

Propósito: Saber cuantas personas asisten a la presentación en función del valor de la boleta.
Contrato:  number -> number
Prototipo: asistencia(number)

*/

function asistencia(a) {
    return 120 + ((5000 - a) / 100) * 15;
}

/*

Propósito: Saber cuanto dinero recibe de las asistencias.
Contrato:  number -> number
Prototipo: dinero(number)

*/

function dineroA(a) {
    return asistencia(a) * a;
}

/*

Propósito: Saber cual es el costo de tener un determinado numero de asistentes.
Contrato:  number -> number
Prototipo: costo(number)

*/

function costo(a) {
    return 180000 + 40 * asistencia(a);
}

/*

Propósito: Saber cual es la ganancia de tener cierto numero de asistentes a un precio de boleta determinado.
Contrato:  number -> number
Prototipo: ganancia(number)

*/

function ganancia(a) {
    return dineroA(a) - costo(a);
}
