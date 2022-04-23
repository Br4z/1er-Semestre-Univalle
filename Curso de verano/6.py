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
import time
from os import system

def clearConsole():
    _ = system('cls')

print("Temporizador v1.1 \nLas unidades se convierten si excediste las 60 unidades. ")

repeticion = True

horas = input("Ingrese la cantidad de horas: ")

# 1er validación de todos los datos (que sean enteros)

while repeticion:
    try:
        horas = int(horas)
        repeticion = False
        repeticion2 = True
        minutos = input("Selecciona la cantidad de minutos: ")
        while repeticion2:
            try:
                minutos = int(minutos)
                repeticion2 = False
                repeticion3 = True
                segundos = input("Ingrese la cantidad de segundos: ")
                while repeticion3:
                    try:
                        segundos = int(segundos)
                        repeticion3 = False
                    except:
                        segundos = input("No ha ingresado un valor valido, por favor selecciona uno valido, ahora: ")     
            except:
                minutos = input("No ha ingresado un valor valido, por favor selecciona uno valido, ahora: ")  
    except:
        horas = input("No ha ingresado un valor valido, por favor selecciona uno valido, ahora: ")

# Segunda validación

validezHoras = horas >= 0
validezMinutos = minutos >= 0 
validezSegundos =  segundos >= 0 

# Conversion de unidades, en el caso de exceder las 60 unidades

print("Verificando los datos ingresados...")

if segundos >= 60 or minutos >=60:
    print("Convirtiendo datos...") 
    horas = horas + minutos // 60
    minutos = minutos % 60 + segundos // 60
    segundos = segundos % 60
    time.sleep(1)

if validezHoras and validezMinutos and validezSegundos:
    hayTiempo = horas > 0 or minutos > 0 or segundos > 0
    while hayTiempo:
        print("Temporizador v1.1 \n ") 
        print("Horas: ", horas, "Minutos: ", minutos, "Segundos: ", segundos)
        if minutos == 0:
                if horas != 0:
                    horas = horas - 1
                    minutos = 60        
        if segundos == 0:
            if minutos != 0:
                minutos = minutos -1
                segundos = 60
        segundos = segundos - 1                      
        hayTiempo = horas > 0 or minutos > 0 or segundos > 0  
        time.sleep(1)
        clearConsole()
else:
    print("Cometiste algún error en la digitacion de los datos. ")


print("La cuenta ha terminado.")