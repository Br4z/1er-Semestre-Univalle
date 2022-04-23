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

# Crear un script donde se pregunte al usuario por dos números y se le dé varias operaciones para seleccionar

print("Bienvenido a Calc v1.2 \n Las opciones que tine esta calculadora son:")


opcion = input(" 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir \n")
repeticion = True


while repeticion:
    try:
        opcion = int(opcion)
        validez = opcion > 0 and opcion < 5
        if validez:
            repeticion = False
        else:
            opcion = input("No ha ingresado un numero valido, ingrese uno valido ahora: ")    
    except:
        print("No ha ingresado un numero.")

repeticion = True

numero1 = input("Ingrese el primer numero: ")
# Este while pudo estar anidado con el anterior, pero para mas comprensión lo dejo asi (en el caso de anidarlo era necesaria otra variable para emepezarlo)
while repeticion:
    try:
        numero1 = float(numero1)
        repeticion = False
        repeticion2 = True
        numero2 = input("Ingrese el otro numero: ")
        while repeticion2:
            try:
                numero2 = float(numero2)
                repeticion2 = False
                if opcion == 1: 
                    print(numero1 + numero2)
                elif opcion == 2:
                    print(numero1 - numero2)
                elif opcion == 3:
                    print(numero1 * numero2)
                else:
                    print(numero1 / numero2)
            except: 
                numero2 = input("No ha ingresado un numero valido,por favor ingrese uno valido ahora: ") 
    except:
        numero1 = input("No ha ingresado un numero valido, por favor ingrese uno valido ahora: ")          









