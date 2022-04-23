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

Propósito: Determinar si el dato es un numero, de serlo que le sume 3, en caso contrario devuelve 3.
Contrato:  (number,string or boolean) -> number
Prototipo: numeroOString((number,string or boolean))
Ejemplos: 
("hola") -> 3
(3)      -> 6

*/

function numeroOString(d) {
    if (d === true || d === false || isNaN(d)) {
        return 3;
    } else {
        return d + 3;
    }
}

console.log(numeroOString("hola"));
console.log(numeroOString(true));
console.log(numeroOString(3));
console.log(numeroOString("khe"));
console.log(numeroOString(10));
console.log(numeroOString(false));
console.log(numeroOString(1));
