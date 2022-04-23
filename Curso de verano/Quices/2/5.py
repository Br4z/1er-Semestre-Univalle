# Brandon Calderon Prieto (202125974) y Carlos Daniel Corrales Arango (202122878)

import math

def grades_To_Rad(grades):
    return round(grades * math.pi / 180,2)

def inicializador(opcion):
    if opcion == 1:
        v = float(input("Ingrese la valocidad incial (metros / s): "))
        angulo = float(input("Ingrese los grados a los que se hizo el tiro: "))
        angulo = grades_To_Rad(angulo)
        distacion_Recorrida = round((v ** 2) * math.sin(2 * angulo) /  10,2)      
        print(f"La distacion que recorrio el proyectil con una valocidad inicial:{v}(metros / s) y un angulo de lanzamiento: {angulo}(grados) es de: {distacion_Recorrida}")
    elif opcion == 2:
        y = float(input("Ingrese la altura maxima a la que llego el proyectil(metros): "))
        angulo = float(input("Ingrese los grados a los que se hizo el tiro: "))
        angulo = grades_To_Rad(angulo)
        velocidad_Inicial = math.sqrt(10 * y / math.sin(2 * angulo))
        distacion_Recorrida = round((velocidad_Inicial ** 2) * math.sin(2 * angulo) /  10,2)      
        print(f"La distancia que recorrió el proyectil con una altura maxima: {y}(metros) y un angulo de lanzamiento: {angulo}(grados) es de: {distacion_Recorrida}")
    else:
        t = float(input("Ingrese el tiempo que duro el proyectil en el aire: "))
        angulo = float(input("Ingrese los grados a los que se hizo el tiro: "))
        angulo = grades_To_Rad(angulo)
        velocidad_Inicial = 10 * t / (2 * math.sin(angulo))
        distacion_Recorrida = round((velocidad_Inicial ** 2) * math.sin(2 * angulo) /  10,2)       
        print(f"La distacion que recorrió el proyectil con un tiempo de recorrido:{t}(segundos) y un angulo de lanzamiento: {angulo}(grados) es de: {distacion_Recorrida}")

print("Calculadora recorrido en el componente x de un tiro parabólico \n")
print("Los datos que necesito pueden ser: ")
print("1. Velocidad inicial y angulo de lanzamiento \n2. Altura maxima y angulo de lanzamiento \n3. Tiempo del recorrido y angulo de lanzamiento \n")

repeticion = True

while repeticion:
    try:
        opcion = int(input("Seleccione una opcion: "))
        while opcion < 0 or opcion > 4:
            opcion = int(input("No ha seleccionado un numero valido, ingrese uno ahora: "))
        repeticion = False
        inicializador(opcion)
    except:
        opcion = int(input("No ha ingresado una opcion valida, ingrese una valida: "))