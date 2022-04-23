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
# Script que simula la formulacion de una lista de compras

articulos = []
cantidades = []
intencion = print("Bienvenido a My Shooping List v 1.1")

ingresar = input("Desea ingresar un producto, si(1) o no (0): ")

# Estructura para el ingreso de datos

while ingresar == "1":
    articulo = input("Ingrese el nombre del producto que desea comprar: ")
    articulos.append(articulo)

    cantidad = int(input("Ingrese la cantidad: "))
    cantidades.append(cantidad)

    ingresar = input("Desea ingresar un producto,si(1) o no (0): ")

archivo_articulos = open("articulos.txt", "w")

for i in articulos:
    archivo_articulos.write(f"{i} \n")

archivo_cantidades = open("cantidades.txt","w")
for j in cantidades:
    archivo_cantidades.write(f"{j} \n")

# diccionario = {"Articulos":[], "Cantidades":[]}
diccionario = {}

for k in range(len(articulos)): # También podia poner la longitud de las cantidades, que en teoría deberia ser igual.
    diccionario[articulos[k]] = cantidades[k]
    # diccionario["Articulos"].append(articulos[k])
    # diccionario["Cantidades"].append(cantidades[k])

print("Lista de compras \n", diccionario)

print("\nGracias por usarme :)")



