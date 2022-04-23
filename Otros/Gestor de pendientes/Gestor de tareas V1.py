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

# Script lista de tareas con archivos de texto.
# Conclusion usar variables globales es un dolor de cabeza.

decoracion = "--------------------------------------"


def normalizador(pendientes): # Enumera las lineas de pendientes y completados
    enumeracion = 0
    enumeracion2 = 1
    for i in pendientes:
        dato_original = i
        numero = dato_original.split()
        numero[0] = str(enumeracion2)
        dato_modificado = " ".join(numero) 
        pendientes[enumeracion] = dato_modificado
        enumeracion += 1
        enumeracion2 += 1
    return pendientes

def actualizar_contenido(): # Estructura para actualizar el contenido del archivo cada vez que otra funcion lo modifique
    global contenido
    global contenido2
    archivo = open("pendientes.txt","r")
    contenido = archivo.readlines()
    archivo2 = open("completados.txt","r")
    contenido2 = archivo2.readlines()
    archivo.close()

def ver_completados():
    print(decoracion)
    print("Completados:")
    archivo = open("completados.txt","r")
    for i in archivo:
        print(i)
    print(decoracion)
    archivo.close()

def ver_pendientes():
    print(decoracion)
    print("Pendientes:")
    archivo = open("pendientes.txt","r")
    for i in archivo:
        print(i)
    print(decoracion)
    archivo.close()

def quitar_pendiente():
    ver_pendientes()
    archivo = open("pendientes.txt","w")
    archivo2 = open("completados.txt","w")
    pendiente = int(input("Que pendiente desea quitar ?: "))

    pendiente_a_quitar = pendiente - 1 # Esto lo hago aprovechando el indice de las listas
    pendiente_a_quitar_contenido = contenido[pendiente_a_quitar]

    contenido2.append(pendiente_a_quitar_contenido)
    contenido.remove(pendiente_a_quitar_contenido)
    
    for j in normalizador(contenido): # Guardar en el archivo los pendientes correctamente enumerados
        archivo.write(f"{j} \n")
    for k in normalizador(contenido2):
        archivo2.write(f"{k} \n")
    archivo.close()
    archivo2.close()


def agregar_pendiente():
    print(decoracion)
    archivo = open("pendientes.txt","a")
    if contenido == []:
        numero = 1
    else:
        ultima_tarea = contenido[-1] # Ultimo elemento.
        ultimo_Numero = int((ultima_tarea.split())[0])
        numero = ultimo_Numero + 1
    pendiente = input("Agregue el pendiente: \n")
    archivo.write(f"{numero} {pendiente} \n")
    print(decoracion)
    archivo.close()

opcion = 0

print("Bienvenido a To-do list v1.1")

while opcion != 5: # Inicializamos el menu del script con la declaración de opción
    actualizar_contenido()
    print("Opciones:")
    opcion = int(input("1.Agregar un pendiente \n2.Quitar un pendiente \n3.Ver pendientes \n4.Ver pendientes hechos \n5.Salir \n"))
    if opcion == 1:
        agregar_pendiente()
    elif opcion == 2:
        quitar_pendiente()
    elif opcion == 3:
        ver_pendientes()
    elif opcion == 4:
        ver_completados()