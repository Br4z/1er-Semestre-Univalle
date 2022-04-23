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

# Escriba un programa que solicite el nombre, peso (en kilogramos) y la altura (en metros) de dos 
# personas y que calcule su índice de masa corporal (IMC) de cada una.

print("Calculadora del Indice De Masa Corporal (IMC)")

try:
    nombre1 = input("Ingrese su nombre: ")
    peso1 = int(input("Ingrese su peso en kg: "))
    estatura1 = float(input("Ingrese su estatura en mts: "))
    IMC1 = round(peso1 / (estatura1 ** 2), 1)

    print("************************************************")

    nombre2 = input("Ingrese su nombre: ")
    peso2 = int(input("Ingrese su peso en kg: "))
    estatura2 = float(input("Ingrese su estatura en mts: "))
    IMC2 = round(peso2 / (estatura2 ** 2),1)

    precaucion = "\nLos valores del IMC dependen de la edad, del sexo, de la constitución física, etc. \nPor ello es importante que consulte con frecuencia a su medico"
    print("*****DATOS*****\n ")
    print(nombre1, "\nSu peso es:", peso1, "kgs\nSu estatura es:", estatura1, "mts\nSu IMC es:",IMC1,"kg/m^2", precaucion, "\n ")
    print("*****DATOS*****\n ")
    print(nombre2, "\nSu peso es:", peso2, "kgs\nSu estatura es:", estatura2, "mts\nSu IMC es:", IMC2, "kg/m^2", precaucion,"\n ")
except:
    print("No ha ingresado un valor valido")