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

# Script que busque, hasta el número que el usuario indique, los números primos y los vaya imprimiendo.

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

for i in range(2,numero + 1): 
    if i == 2:
        print(2, end = ", ")
    elif i == 3:
        print(3, end = ", ")
    elif i == 5:
        print(5, end = ", ")
    elif i == 7:
        print(7, end = ", ")
    elif i == 11:
        print(11, end = ", ")
    elif i == 13:
        print(13, end = ", ")
    elif not ((i % 2 == 0) or (i % 3 == 0) or (i % 5 == 0) or (i % 7 == 0) or (i % 11 ==0) or (i % 13 == 0)):
        print(i, end = ",  ")                             
