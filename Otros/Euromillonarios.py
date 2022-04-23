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
import random

def generador(numero_combinaciones):
    numeros = []
    for i in range(numero_combinaciones):
        primero_numero = str(random.randint(0,9))
        segundo_numero = str(random.randint(0,9))
        tercer_numero = str(random.randint(0,9))
        cuarto_numero = str(random.randint(0,9))
        numero = primero_numero + segundo_numero + tercer_numero + cuarto_numero 
        numeros.append(numero)
    return numeros


opcion = int(input("Bienvenido al generador de combinaciones para chontico \nquieres generar combinaciones si (1) o no(0) ? : "))

while opcion == 1:
    numero_combinaciones = int(input("Cuantas combinaciones quiere generar ? : "))
    enumeracion = 0
    for i in generador(numero_combinaciones):
        enumeracion += 1
        combinacion = int(i)
        print(f"La combinacion numero {enumeracion} es: {combinacion}")
    opcion = int(input("Quiere generar mas combinaciones,si (1) o no(0) ? : "))

print("Gracias por usarme, espero hayas ganado !")

