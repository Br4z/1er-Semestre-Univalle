# Brandon Calderon Prieto (202125974) y Carlos Daniel Corrales Arango (202122878)


'''
4 ejercicio

lo que había que corregir era que la funcion máximo y mínimo estaba recibiendo como parametros a y b,
pero dentro de estas funciones los argumentos que se estaban usando eran x y y, por lo tanto, el dato
que iba a meter el usuario siempre se lo iba a tomar como a y b y nunca iba a hacer la operacion e iba
a imprimir siempre el primer numero introducido

'''

def maximo(x, y):
    if x > y:
        return x
    else:
        return y

def minimo(x,y):
    if x < y:
        return x
    else:
        return y

# Programa principal

x = int(input("Un número: "))
y = int(input("Otro número: "))

print(maximo(x - 3, minimo(x + 2, y - 5))) 