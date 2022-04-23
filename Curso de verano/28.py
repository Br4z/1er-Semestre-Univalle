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

# Ya que tenemos creado el archivo nombres.txt vamos a manipularlo

nombres = []
opcion = input("¿Quieres introducir mas nombres en la lista existente o quieres \n empezar una nueva lista (1: Más nombres, 2: Nueva lista): ")
cantidad_nombres = int(input("Digite la cantidad de nombres que quiere introducir: "))


for i in range(cantidad_nombres): # Como empieza a contar desde cero, o recorre la lista [0, 1, 2, 3, 4] entonces debemos sumar 1
    enumeracion = i + 1
    nombreElegido = input(f"Nombre numero {enumeracion}: ")
    nombres.append(nombreElegido)
print(nombres)

if opcion == "1":
    archivo = open("nombres.txt", "a") # El a viene de appened, que es agregar.
    for j in nombres:
        archivo.write(j + "\n")
    archivo.close()

elif opcion == "2":
    archivo = open("nombres.txt", "w") # Aquí abrimos el archivo em modo escribir
    for k in nombres:
        archivo.write(k + "\n")
    archivo.close()
