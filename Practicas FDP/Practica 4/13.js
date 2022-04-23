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

Propósito: Hallar el siguiente estado partiendo de el estado actual y su verificación.
Contrato:  string, boolean -> string
Prototipo: semaforo(string, boolean)
Ejemplos: 
("amarillo", true) -> "verde"
("rojo", true)     -> "amarillo"

*/

function semaforo(c, e) {
    if (c == "amarillo" && e === true) {
        return "verde";
    } else if (c == "amarillo" && e === false) {
        return "rojo";
    } else if ((c == "verde" || c == "rojo") && e == true) {
        return "amarillo";
    } else {
        return "color no válido";
    }
}

console.log(semaforo("amarillo", true));
console.log(semaforo("verde", true));
console.log(semaforo("rojo", true));
console.log(semaforo("amarillo", false));
console.log(semaforo("azul", false));
