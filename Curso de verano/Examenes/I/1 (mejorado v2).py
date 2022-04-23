'''
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

'''

# Script que busque, hasta el número que el usuario indique, los números primos y los vaya imprimiendo

numero = input("Ingrese el numero hasta el que quiera hacer la impresion de los números primos: ")
repeticion = True

while repeticion:
    try:
        numero = int(numero)
        while numero < 1:
            numero = input("Has ingresado un numero fuera de las restricciones de los números primos, por favor ingresa uno valido: ")
        repeticion = False
    except:
        numero = input("No has ingresado un numero entero, por favor ingresa uno:")

primos = []

# Aprovechandonos que un numero primo no debe ser divisible por los anteriores, podemos declarar esto en esa estructura

for i in range(2,numero + 1):  # Empezando con el dos, la ejecución del siguiente for finaliza y lo incluye en la lista
    for j in primos:    
        if i % j == 0:
            break 
    else:
        primos.append(i)

print(primos)
