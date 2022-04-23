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

const persona1 = { apellido1: "Melo", apellido2: "Castillo" };
const persona2 = { apellido1: "Gonzales", apellido2: "Pantoja" };
const persona3 = { apellido1: "Caicedo", apellido2: "Castillo" };
const persona4 = { apellido1: "Lopez", apellido2: "Cardenas" };

/*

Propósito: Determinar si dos personas son parientes, partiendo de la suposición de que los parientes comparten apellidos.
Contrato:  string, string -> string
Prototipo: sonParientes(string, string)
Ejemplos: 
(persona1, persona3) -> "Son parientes" 


*/

function sonParientes(persona1, persona2) {
    if (persona1.apellido2 == persona2.apellido2) {
        return "Son parientes";
    } else {
        return "No son parientes";
    }
}

console.log(sonParientes(persona1, persona3) == "Son parientes");
console.log(sonParientes(persona3, persona4) == "No son parientes");
