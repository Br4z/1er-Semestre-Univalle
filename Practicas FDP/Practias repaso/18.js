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

Propósito: Crear dos instancias para dos personas que cuentan con una serie de atributos.
Contrato:  number -> string
Prototipo: esMayor(json)
Ejemplos: 
(esMayor1) -> "Diana es mayor de edad"

*/

const esMayor1 = { name: "Diana", year: 18 };
const esMayor2 = { name: "Camilo", year: 15 };
const esMayor3 = { name: "Andres", year: 35 };

function esMayor(persona) {
    if (persona.year >= 18) {
        return persona.name + " es mayor de edad";
    } else {
        return persona.name + " no es mayor de edad";
    }
}

console.log(esMayor(esMayor1) == "Diana es mayor de edad");
console.log(esMayor(esMayor2) == "Camilo no es mayor de edad");
console.log(esMayor(esMayor3) == "Andres es mayor de edad");
console.log(esMayor(esMayor3) == "Diana no es mayor de edad");
