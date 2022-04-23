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

print("Bienvenido a piedra, papel o tijeras v1.2\n1. Tijeras \n2. Piedra \n3. Papel \n")

menu ='''
1. Tijeras
2. Piedra
3. Papel

'''

intentos = 0
victorias_usuario = 0
victorias_maquina = 0

# Vemos todos los posibles casos
while intentos <= 2:
    opcion = int(input("Seleccione una opcion: "))
    while opcion < 0 or opcion > 3:
        opcion = int(input("Ingrese una opcion valida: "))    
    decision_maquina = random.randrange(1,4)
    if opcion == 1 and decision_maquina == 2:
        victorias_maquina += 1
        intentos += 1        
        print("Perdiste esta ronda, Piedra aplasta tijera")
    elif opcion == 1 and decision_maquina == 3:
        victorias_usuario += 1
        intentos += 1
        print("Ganaste esta ronda, Tijera corta papel")
    elif opcion == 2 and decision_maquina == 3:
        victorias_maquina += 1
        intentos += 1
        print("Perdiste esta ronda, Papel envulve piedra")
    elif opcion == 2 and decision_maquina == 1:
        victorias_usuario += 1
        intentos += 1
        print("Ganaste esta ronda, Piedra aplasta tijera")
    elif opcion == 3 and decision_maquina == 1:
        victorias_maquina += 1
        intentos += 1
        print("Perdiste esta ronda, Tijera corta papel")
    elif opcion == 3 and decision_maquina == 2:
        victorias_usuario += 1
        intentos += 1
        print("Ganaste esta ronda, Papel envulve piedra")
    else:
        print("Empate")
        intentos += 1

if victorias_usuario > victorias_maquina:
    print("Ganaste el juego.")
else:
    print("Perdiste el juego.")
