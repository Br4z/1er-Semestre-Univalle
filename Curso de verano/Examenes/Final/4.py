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
import time

DEPARTAMENTOS = [
    "Cauca", 
    "Choco", 
    "Nariño", 
    "Putumayo", 
    "Valle"
    ]
MESES = [
    "Enero", 
    "Febrero", 
    "Marzo", 
    "Abril", 
    "Mayo", 
    "Junio"
    ]

lluvias = []

def randomizer():
    for i in range(len(DEPARTAMENTOS)):
        numeros = []
        for j in range(len(MESES)):
            numero_aleatorio =  round(random.random() * 100, 1 )
            numeros.append(numero_aleatorio)
        lluvias.append(numeros)
        print(lluvias)


def promedio_meses(mes):
    mes_escogido = mes - 1
    suma = 0
    for i in lluvias[mes_escogido]:
        suma += i
    promedio = suma / len(DEPARTAMENTOS) # Se divided por la cantidad de departamentos
    return promedio

def promedio_departamento(departamento):
    departamento_escogido = departamento - 1
    suma = 0
    for i in lluvias:
        suma += i[departamento_escogido]
    promedio = suma / len(MESES) # Se divide por la cantidad de meses
    return promedio

def menu_promedio(modo):
    if modo == 1:
        print("Seleccione el departamento:")
        print("1.Cauca \n2.Choco \n3.Nariño \n4.Putumayo \n5.Valle")
        departamento = int(input())
        print(f"El promedio del departamento {departamento} es: {promedio_departamento(departamento)}")
    else:
        print("Seleccione el mes:")
        print("1.Enero \n2.Febrero \n3.Marzo \n4.Abril \n5.Mayo")
        mes = int(input())
        print(f"El promedio del mes {mes} es: {promedio_meses(mes)}")

def llenar():
    randomizer()
    print("Llenando matriz de lluvias..")
    time.sleep(2)
    print("Matriz llena !")

def imprimir_matriz():
    print(lluvias)
    print("\tEnero" + "\tFebrero" + "\tMarzo" + "\tAbril" + "\tMayo" + "\tJunio")
    enumeracion = 0
    for i in DEPARTAMENTOS:
        print(i, end = "   ") # Imprimo el departamento
        for j in lluvias[enumeracion]: # Cada lista generada tiene 6 elementos que corresponden a los 6 meses de cada departamento
            print(j, end = "\t") # Imprimo el numero
        enumeracion += 1
        print("")

opcion = 0 # Inicializamos la opción

while opcion != 5:
    print("-------------------------")
    print("Seleccione una opcion:")
    print("1. llenar matriz de lluvias \n2. Imprimir matriz\n3. Promedio de lluvias por departamento\n4. Promedio de lluvias por mes\n5. Salir")
    opcion = int(input())
    print("-------------------------")
    if opcion == 1:
        llenar()
    elif opcion == 2:
        imprimir_matriz()
    elif opcion == 3:
        menu_promedio(1)
    elif opcion == 4:
        menu_promedio(2)


