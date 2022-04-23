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

# Script para asignarle a nombres números aleatorios

import random

cantidad = int(input ("Cuantos nombres quieres introducir aleatoriamente en la lista? : "))


aleatorios = []

for numero in range (cantidad):
    aleatorio = random.randint(1, cantidad)
    while aleatorio in aleatorios: # Este while es para asegurar que los aleatorios no se repitan
        aleatorio = random.randint(1, cantidad)
    aleatorios.append(aleatorio)
nombres = []

for i in range (cantidad):
    nombreNumero = i + 1
    nombre = input (f"nombre {nombreNumero}: ")
    nombres.append(nombre)

diccionario ={}

for i in range(len(aleatorios)):
    diccionario[nombres[i]] = aleatorios[i] # A cada nombre le correspondera un solo numero
print(diccionario)