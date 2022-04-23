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
# Hacer una funcion para sumar dos números

terminamos = 0

# Declaramos la funcion antes por el orden de ejecución (no podemos llamar nada sin declararlo antes)

def funcionSuma():
    global suma # Lo declaramos global para poder acceder a el en otras estructuras
    # Pregunto los números a sumar:
    numero1 = int(input("Primer numero : "))
    numero2 = int(input("Segundo numero : "))
    # Voy a sumarlos y a imprimirlos:
    suma = numero1 + numero2
    print(suma)

while terminamos == 0:
    print ("Nuestras opciones : \n1. Realizar una suma \n2. Terminar  ")
    pregunta = input("¿Que quieres hacer? (1 o 2) :")
    if pregunta == "1":
        funcionSuma()
    elif pregunta == "2":
        # Voy a imprimir la variable suma de la funcion:
        print(suma,"\nAdios")
        terminamos = 1