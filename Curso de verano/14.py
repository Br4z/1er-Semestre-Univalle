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

# Pedirle un numero al usuario y mostrarle si es primo o no

numero = input("Ingrese un numero: ")
repeticion = True

while repeticion:
    try:
        numero = int(numero)
        while numero < 0:
            numero = input("Ha ingresado un numero negativo o fuera de las restricciones de los primos, por favor ingrese uno valido: ")
        repeticion = False
    except:
        numero = input("No ha ingresado un numero, por favor ingrese uno dato valido: ")

# Casos base, entre mas divisores tome, mas exacto sera el script
if numero == 1:
    print("El numero es primo.")
elif numero == 2:
    print("El numero es primo.")
elif numero == 3:
    print("El numero es primo.")
elif numero == 5:
    print("El numero es primo.")


# Excluyendo esos mismos divisores con la sentencia de arriba, estamos asegurando que no tengan estos números como divisores (si los tienen no son primos)

if ((numero % 2 == 0) or (numero % 3 == 0) or (numero % 5 == 0)):
    print(f"El numero {numero} no es primo.")
else:
    print(f"El numero {numero} es primo.")