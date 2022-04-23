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

Propósito: Sumar todos los numero naturales de i hasta n.
Contrato:  number,number -> number
Prototipo: sumatoria(number, number)
Ejemplos: 
(1, 4) -> 10

*/

function sumatoria(i, n) {
    if (i < 0 || n < 0 || n < i) {
        return "Parámetro invalido";
    } else if (i == n) {
        return i;
    } else {
        return n + sumatoria(i, n - 1);
    }
}

console.log(sumatoria(1, 4));
console.log(sumatoria(2, 4));
console.log(sumatoria(8, 9));
console.log(sumatoria(0, 100));
