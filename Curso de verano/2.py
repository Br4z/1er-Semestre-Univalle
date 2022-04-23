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

print("Bienvenido a Calc v1.1 \n Las opciones que tine esta calculadora son:")


try:
    opcion = int(input(" 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir \n"))

# Apartado de las operaciones que puede realizar la calculadora

    def operacion():
        a = float(input("Ingrese el primer numero: "))
        b = float(input("Ingrese el otro numero: "))
        if opcion == 1: 
            print(a + b)
        elif opcion == 2:
            print(a - b)
        elif opcion == 3:
            print(a * b)
        else:
            if b == 0:
                print("Recuerde que la division por cero es indefinida.")
            print(a / b)

# Validación de la opción escogida

    if opcion > 0 and opcion < 5:
        operacion() 
    else: 
        print("No ha ingresado una opcion valida.")     


# En caso de presentarse algún error salta el except

except:
    print("No ha ingresado una opcion valida.") 






