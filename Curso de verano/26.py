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

# Vamos a ver como incluimos otros archivos en nuestras ejecuciones

# Reciclando código del ejercicio 16

nombres = []
numeroNombres = int(input("Ingrese el numero de nombres que quiere en la lista : "))

# Como empieza a contar desde cero, o recorre la lista [0, 1, 2, 3, 4] entonces debemos sumar 1
for i in range(numeroNombres):
    enumeracion = i + 1
    nombreElegido = input(f"Nombre numero {enumeracion}: ")
    nombres.append(nombreElegido)
print(nombres)

# Hasta aca es la ejecución convencional

# Especificamos el archivo y en modo en que entramos a el (en este caso write)
archivo = open("nombres.txt", "w")

for i in nombres:
    archivo.write(f"{i} \n")  # \n Para dejar espacios
archivo.close()
