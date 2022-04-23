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

Propósito: Simular el menu de una heladería; recibe como parámetro un tipo de helado y retorna el valor del mismo, del caso de no 
encontrarse el helado se retorna un mensaje junto con el precio del helado sencillo.
Contrato:  string -> number or string
Prototipo: heladeria(number)
Ejemplos: 
("Helado 1") -> 1.90
("Helado 8") -> 1.90

*/

function heladeria(opcion) {
    if (opcion == "Helado 1") {
        return 1.9;
    } else if (opcion == "Helado 2") {
        return 1;
    } else if (opcion == "Helado 3") {
        return 1.5;
    } else if (opcion == "Helado 4") {
        return 0.75;
    } else if (opcion == "Helado 5") {
        return 0.95;
    } else {
        return "no tenemos este helado, lo sentimos." + "\n1.90";
    }
}

console.log(heladeria("Helado 1").toFixed(2));
console.log(heladeria("Helado 3").toFixed(2));
console.log(heladeria("Helado 8"));
console.log(heladeria("Helado 4"));
