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

# Hace un bucle que se detenga cuando el usuario digite números (en este caso es una suma)

print ("Vamos a sumar dos números")

primerWhile = True
numero1 = input("Cual es el primer numero? :")

while primerWhile :
    try:
        numero1 = float(numero1)
        primerWhile = False
        segundoWhile = True
        numero2 = input("Cual es el segundo numero? :")
        while segundoWhile:  
            try: # Los try van dentro del while para multiples ejecuciones
                numero2 = float(numero2)
                segundoWhile = False
                suma = numero1 + numero2
                print("La suma de los números es: ",suma)
            except:
                numero2 = input("No ha ingresado una opción valida en el segundo numero, digite un numero: ")
    except:  
        numero1 = input("No ha ingresado una opción valida en el primer numero, digite un numero: ")                                           


