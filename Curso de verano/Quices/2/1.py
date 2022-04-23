# Brandon Calderon Prieto (202125974) y Carlos Daniel Corrales Arango (202122878)

def funcion_misterio1(a, b):
    if (a > 5 & b < 0):
        s = a - b
    elif(a == 5 & b == 0):
        s = a + b
    else:
        s = a * b
    return s

F1 = funcion_misterio1(1, 2)

# La salida es un error y se cambio el a = 5 por a == 5 que significa que si a es igual a 5 haga x cosa (lo que esta dentro del elif)
print(f"El resultado de F1 es {F1}")

def funcion_misterio2(var1, var2):
    x = 10
    if(var1 < var2):
        var1 = var2 * 2
        a = funcion_misterio1(var1, x)
    elif(var2 < var1):
        a = funcion_misterio1(var1,x)
    else:
        a = x
    return a

F2 = funcion_misterio2(1, 2)

# El orden de la indentancion estaba incorrecto, por lo tanto faltaba ordenar bien la linea 18 (a = funcionMisterio1(var1, x)) para que el programa se pueda ejecutar correctamente
print(f"El resultado de F2 es {F2}")