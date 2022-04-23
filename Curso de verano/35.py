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

# Reciclando otra vez el ejercicio anterior, veamos que pasa si queremos almacenar las sumas anteriores

terminamos = 0
sumas = [] # En esta lista vamos a tener registro de las sumas realizadas

def funcionSuma():
    global suma 
    numero1 = int(input("Primer numero : "))
    numero2 = int(input("Segundo numero : "))
    return numero1 + numero2

while terminamos == 0:
    print ("Nuestras opciones : \n1. Realizar una suma \n2. Terminar  ")
    pregunta = input("¿Que quieres hacer? (1 o 2) :")
    if pregunta == "1":
        suma = funcionSuma()
        sumas.append(suma)
    elif pregunta == "2":
        print("La ultima suma da como resultado: ", suma, "\nAdios")
        terminamos = 1

print("Estos son los resultados de las sumas anteriormente realizadas: ", sumas)        