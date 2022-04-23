# Brandon Calderon Prieto (202125974) y Carlos Daniel Corrales Arango (202122878)

print("Bienvenido a calculadora de notas \n")

nombre = input("Digite su nombre: ")
nota_proyecto = float(input("Digite la nota del proyecto: "))
nota_parcial1 = float(input("Digite la nota del parcial #1: "))
nota_parcial2 = float(input("Digite la nota del parcial #2: "))
nota_laboratorio = float(input("Digite el promedio de notas de los laboratorios: "))

def nota_final(nota_proyecto, nota_parcial1, nota_parcial2, nota_laboratorio):
    nota_proyecto *= 0.20
    nota_parcial1 *= 0.25
    nota_parcial2 *= 0.25
    nota_laboratorio *= 0.30

    nota_final = nota_proyecto + nota_parcial1 + nota_parcial2 + nota_laboratorio
    nota_final = round(nota_final, 1)

    return nota_final

nota_Final = nota_final(nota_proyecto, nota_parcial1, nota_parcial2, nota_laboratorio)

def resultado(nota_final):
    if nota_final < 3:
        return("Reprobado")
    elif nota_final >= 3:
        return("Aprobado")

resultado_final = resultado(nota_Final)

menu = f"""
    NOMBRE: {nombre}
    NOTA FINAL: {nota_final(nota_proyecto, nota_parcial1, nota_parcial2, nota_laboratorio)}
    ESTADO DE LA MATERIA: {resultado_final}
"""
print(menu)