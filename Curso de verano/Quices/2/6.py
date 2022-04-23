# Brandon Calderon Prieto (202125974) y Carlos Daniel Corrales Arango (202122878)

x = int(input("Digite un valor en X: ")) # Las entradas tienen que ser enteras
y = int(input("Digite un valor en Y: "))

def F1(x,y):
    return round(((x ** 5 / 5 * y) + (x ** 4 / 4 * y) + (x ** 3 / 3 * y) + (x ** 2 / 2 * y)) + 1, 3)

def F2(x,y): 
    if y % 2 == 0:
        return y ** x
    else:
        return x ** y

print(f"El resultado es {F1(x, y)}")
print(f"El resultado es {F2(x, y)}")

