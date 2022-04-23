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

Propósito: Devolver el precio de un helado correspondiente al menu de una heladería.
Contrato:  string -> number or string
Prototipo: opcionHelado(string)
Ejemplos: 
("Helado 1") -> 1.90
("Helado 2") -> 1.50

*/

function opcionHelado(n) {
    if (n == "Helado 1") {
        return (1.9).toFixed(2);
    } else if (n == "Helado 2") {
        return 1;
    } else if (n == "Helado 3") {
        return (1.5).toFixed(2);
    } else if (n == "Helado 4") {
        return 0.75;
    } else if (n == "Helado 5") {
        return 0.95;
    } else {
        return "no tenemos este helado, lo sentimos." + "\n1.90";
    }
}

console.log(opcionHelado("Helado 1"));
console.log(opcionHelado("Helado 3"));
console.log(opcionHelado("Helado 8"));
console.log(opcionHelado("Helado 4"));
