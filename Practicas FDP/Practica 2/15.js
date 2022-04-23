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

Propósito: Evaluar dos parámetros con el operador AND y negarlo.
Contrato:  (number or boolean), (number or boolean) -> boolean
Prototipo: AND((number or boolean), (number or boolean))
Ejemplos: 
(true, true) -> true
(1, 1)       -> 1

*/

function noAND(parametro1, parametro2) {
    return !(parametro1 && parametro2);
}

/*

Propósito: Evaluar dos parámetros en el operador OR.
Contrato:  (number or boolean), (number or boolean) -> boolean
Prototipo: OR((number or boolean), (number or boolean))
Ejemplos: 
(true, true) -> true
(1, 1)       -> 1

*/

function OR(parametro1, parametro2) {
    return parametro1 || parametro2;
}

/*

Propósito: Evaluar dos parámetros en el operador XOR, usando AND y OR.
Contrato:  (number or boolean), (number or boolean) -> boolean
Prototipo: OR((number or boolean), (number or boolean))
Ejemplos: 
(true, true) -> false
(1, 1)       -> 0

*/

function XOR(parametro1, parametro2) {
    return AND(parametro1, parametro2) && OR(parametro1, parametro2); // Negando el AND verificamos que los dos
    // no sean iguales y con el OR que al menos alguno lo sea
}

console.log(XOR(true, true));
console.log(XOR(1, 1));
console.log(XOR(0, 1));
