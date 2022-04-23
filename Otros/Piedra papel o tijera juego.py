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

# Vamos a hacer un simple juego.
'''
Tijeras = 1
Piedra = 2
Papel = 3
'''
import random

print("Bienvenido a piedra, papel o tijeras v1.1\n1. Tijeras \n2. Piedra \n3. Papel \n")
menu ='''
1. Tijeras
2. Piedra
3. Papel

'''

def jugada_Maquina(opcion):
    decision_maquina = random.randrange(1,4)
    if opcion == 1 and decision_maquina == 2:
        print("Perdiste, Piedra aplasta tijera")
    elif opcion == 1 and decision_maquina == 3:
        print("Ganaste, Tijera corta papel")
    elif opcion == 2 and decision_maquina == 3:
        print("Perdiste, Papel envulve piedra")
    elif opcion == 2 and decision_maquina == 1:
        print("Ganaste, Piedra aplasta tijera")
    elif opcion == 3 and decision_maquina == 1:
        print("Perdiste, Tijera corta papel")
    elif opcion == 3 and decision_maquina == 2:
        print("Ganaste, Papel envulve piedra")
    else:
        print("Empate")
        print(menu)
        run()

def run():
    opcion = int(input("Seleccione una opcion: "))
    while opcion < 0 or opcion > 3:
        opcion = int(input("Ingrese una opcion valida: "))
    return jugada_Maquina(opcion)

if __name__ == "__main__":
    run()






