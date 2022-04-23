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
import os

# Hacer una cuenta regresiva ingresando segundos

def clearConsole():
    command = 'clear'
    os.system(command)

print("Temporizador v1.1 \nLas unidades se convierten si excediste las 60 unidades. ")

repeticion = True

segundos = input("Ingrese la cantidad de segundos: ")

# 1er validación de todos los datos (que sean enteros)

while repeticion:
    try:
        segundos = int(segundos)
        repeticion = False       
    except:
        horas = input("No ha ingresado un valor valido, por favor selecciona uno valido, ahora: ")

# Segunda validación

validezSegundos =  segundos >= 0 

# Conversion de unidades, en el caso de exceder las 3600 o 60 unidades

print("Verificando los datos ingresados...")

if segundos >= 3600:
    horas = segundos // 3600
    segundos = segundos % 3600

if segundos >= 60 :
    print("Convirtiendo datos...") 
    minutos = segundos // 60
    segundos = segundos % 60
    time.sleep(1)
else:
    minutos = 0 # En el caso de que segundos sea menor que 60 no habrá minutos   

if validezSegundos:
    hayTiempo = horas > 0 or minutos > 0 or segundos > 0
    while hayTiempo:
        print("Temporizador v1.1 \n ") 
        print("Horas: ",horas,"Minutos: ",minutos,"Segundos: ", segundos)
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