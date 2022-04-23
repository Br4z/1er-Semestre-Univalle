# Brandon Calderon Prieto (202125974) y Carlos Daniel Corrales Arango (202122878)

import math

def grades_To_Rad(grades):
    return round(grades * math.pi / 180,2) 

def rad_To_Grades(rad):
    return round(rad * 180 / math.pi,2)

def sen(grades):
    rad = grades_To_Rad(grades)
    return round(math.sin(rad),2)

def cos(grades):
    rad = grades_To_Rad(grades)
    return round(math.cos(rad),2)

def tan(grades):
    rad = grades_To_Rad(grades)
    return round(math.tan(rad),2)

def function_F(a):
    a = grades_To_Rad(a)
    return round((a * sen(a)) / 1 + a,2)

def function_G(a,b,y):
    return (cos(a) * sen(b)) ** y


print("Bienvenido a la calculadora trigonométrica, que desea hacer ")
print("Las opciones que tenemos son: \n\n1. Convertir grados a radianes \n2. Convertir radianes a grados")
print("3. Sen(a) \n4. Cos(a) \n5. Tan(a) \n6. F(a) \n7. G(a,b,y) \n")

def inicializador(opcion):
    if opcion == 1:
        a = float(input("Ingrese la cantidad de grados que desea convertir a radianes: ")) 
        print(a,"Grados es equivalente a: ",grades_To_Rad(a)," Radianes")
    elif opcion == 2:
        a = float(input("Ingrese la cantidad de radianes que desea convertir a grados: "))
        print(a,"Radianes es equivalente a: ",rad_To_Grades(a)," Grados")
    elif opcion == 3:
        a = float(input("Ingrese el numero de grados con el que quiere calcular sen(a): "))
        seno = sen(a)
        print(f"El seno de {a} grados equivalen a {seno}")
    elif opcion == 4:
        a = float(input("Ingrese el numero de grados con el que quiere calcular cos(a): "))
        coseno = cos(a)
        print(f"El seno de {a} grados equivalen a {coseno}")
    elif opcion == 5:
        a = float(input("Ingrese el numero de grados con el que quiere calcular tan(a): "))    
        tangente = tan(a)
        print(f"La tangente de {a} grados equivalen a {tangente}")
    elif opcion == 6:
        a = float(input("Ingrese el valor de la variable alfa en F(a): "))    
        f = function_F(a)
        print(f"La funcion F con alfa valiendo{a} da como resultado {f}")
    else:
        a = float(input("Ingrese el valor de la variable alfa (grados) en G(a,b,y): "))
        b = float(input("Ingrese el valor de la variable beta (grados) en G(a,b,y): "))
        y = float(input("Ingrese el valor de la variable gamma (grados) en G(a,b,y): "))
        g = function_G(a,b,y)
        print(f"Le resultado de la funcion G con Alfa: {a}, Beta: {b} y Gamma {y} da como resultado: {g}")

repeticion = True

while repeticion:
    try:
        opcion = int(input("Seleccione una opcion: "))
        while opcion < 0 or opcion > 7:
            opcion = int(input("No ha seleccionado un numero valido, ingrese uno ahora: "))
        repeticion = False
        inicializador(opcion)
    except:
        opcion = int(input("No ha ingresado una opcion valida, ingrese una valida: "))