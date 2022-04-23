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

# Calcular horas de llenado de un tanque de agua dado su volumen y el flujo de las mangueras que lo llenan.

try:
    capacidad_tanque = 50
    mang_1 = float(input("Ingrese la capacidad de su manguera 1 en L/min: "))
    mang_2 = float(input("Ingrese la capacidad de su manguera 2 en L/min: "))

# Como litros y metros cubicos son medidas de volumen hacemos la conversion

    capacidad_tanque_litros = capacidad_tanque * 1000 # Unidad de conversion dada

    tiempo_mang_1 = round((capacidad_tanque_litros / mang_1) / 60,2) # Ya sabemos que la unidad de esto dará en minutos, entonces dividimos entre 60 para obtener horas
    tiempo_mang_2 = round((capacidad_tanque_litros / mang_2) / 60,2)

    print("******RESULTADO******\n ")
    print("Llenando su tanque de 50m^3 con una manguera de: ", mang_1, " L/min, tomaria un timepo de: ", tiempo_mang_1, " horas \n ")
    print("Llenando su tanque de 50m^3 con una manguera de: ", mang_2, " L/min, tomaria un timepo de: ", tiempo_mang_2, " horas")

except:
    print("No ha ingresado un valor valido")