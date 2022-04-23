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

Propósito: Compara 2 personas y retorna la persona de mayor de edad.
Contrato:  json, json -> string
Prototipo: esMayor(json, json)
Ejemplos: 
(persona1, persona2) -> true

*/

const persona1 = { name: "Diana", year: 18 };
const persona2 = { name: "Camilo", year: 15 };
const persona3 = { name: "Andres", year: 35 };
const persona4 = { name: "Ophra", year: 18 };

function mayor(persona1, persona2) {
    if (persona1.year > persona2.year) {
        return persona1.name;
    } else if (persona1.year < persona2.year) {
        return persona2.name;
    } else {
        return "Tienen la misma edad";
    }
}

console.log(mayor(persona1, persona2) == "Diana");
console.log(mayor(persona2, persona3) == "Camilo");
console.log(mayor(persona1, persona4) == "Tienen la misma edad");
