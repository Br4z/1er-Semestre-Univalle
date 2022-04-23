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

Propósito: Calcular la suma de los números impares en el intervalo "a" y "b" .
Contrato:  number, number -> number
Prototipo: sumaImparesRecursivo(number, number)
Ejemplos: 
(1,11) -> 36
(3,8)  -> 15

*/

function sumaImparesRecursivo(a, b) {
    // Por el orden en que entre los argumentos tendríamos un problema, si no fuera de inicio a fin
    if (a > b) {
        return 0;
    } else if (a % 2 != 0) {
        return a + sumaImparesRecursivo(a + 1, b);
    } else {
        return sumaImparesRecursivo(a + 1, b);
    }
}

console.log(sumaImparesRecursivo(1, 11));
console.log(sumaImparesRecursivo(3, 8));
console.log(sumaImparesRecursivo(12, 12));
console.log(sumaImparesRecursivo(10, 11));
