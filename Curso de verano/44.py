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

''' 
Resumen

#Crear una clase
class Clase:
#Utilizar una clase
objeto = Clase()
#Definir el constructor de una clase
def __init__(self,parametros):
#Usar una variable propia de un objeto
objeto.variable
#Definir un método de una clase
def nombre(parametros):

'''

# Vamos a introducirnos a la programación orientada a objetos

class Soldado: # Por convención a las clases se les pone la primera letra en mayúscula
    def __init__(self,nombre,raza): # Obligatoriamente hay que llamar a self como argumento, la funcion init se ejecuta sin tener que llamarla
        self.nombre = nombre # Para pasar un parametro y aplicárselo al objeto debemus usar self
        self.raza = raza
        if raza == "Elfo": # Damos mas atributos dependiendo de la raza que sea el soldado
            self.vida = 80
            self.velocidad = 10
            self.coste = 200
        elif raza == "Humano":
            self.vida = 100
            self.velocidad = 7
            self.coste = 100
        elif raza == "Enano":
            self.vida = 120
            self.velocidad = 3
            self.coste = 180
    def arma(self,arma): # Una funcion a parte de la que se inicializa, tiene la misma jerarquía que la funcion init
        self.arma = arma
ejercito = [] # Las listan son una buena opción para guardar objetos
# Probemos

# primer_Soldado = Soldado("Enano1","Enano") # Estamos creando nuestro primer objeto.
# print("Nombre del primer soldado: ",primer_Soldado.nombre)
# print("Raza del primer soldado: ",primer_Soldado.raza)
# print("Coste del primer soldado: ",primer_Soldado.coste)
# print("Velocidad del primer soldado: ",primer_Soldado.velocidad)
# print(type(primer_Soldado)) # Aca vemos que efectivamente es un objeto

# Agreguemos un arma a nuestro primer soldado

# primer_Soldado.arma("Espada")
# print(primer_Soldado.arma)


# Automaticemos la cracion de soldados con un bucle

numero_Soldados = int(input("Cuantos soldados quiere en su ejercito: "))

# Hagamos que el usuario ingrese el dinero disponible para crear sordados

dinero = int(input("Ingrese el dinero que tiene disponible para el entrenamiento: "))

for i in range(numero_Soldados):
    while dinero > 0: 
    # Preguntamos las características obligatorias de cada soldado
        i += 1 # Esta es la enumeración
        nombre = input(f"Cual va a ser el nombre del soldado numero {i}: ")
        raza = input(f"Cual va a ser la raza del soldado numero {i}: ")
        soldado = Soldado(nombre, raza)
        if dinero - soldado.coste < 0: # Para arreglar la creación del primer soldado, estableceremos la siguiente estructura
            print("No tienes dinero suficiente para crear a este soldado")
            break # Este break es para hacer que el while termine
        ejercito.append(soldado) # Lo guardamos en la lista
        dinero -= soldado.coste
        break  # Este break hace que el for se termine cuando el dinero se acabe o no sea suficiente (si logra salir del while, esto es lo que significa)

print("Su entrenamiento ha acabado, quedo con: $",dinero)


# print(ejercito) # La impresion de este modo no es muy bonita pues presenta los detalles de los objetos (cosa que no nos interesa)

# Hagamos un bucle para imprimirlos
print("Sus soldados son: ")
for i in range(len(ejercito)):
    print(ejercito[i].nombre) # Aca solo imprimimos el nombre pero podemos imprimir otras características

# El recorrido de las listas sirven para varios fines en la creación de un videojuego.


