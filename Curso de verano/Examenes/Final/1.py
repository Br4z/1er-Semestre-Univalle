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
# Ingreso datos estudiante

def datos():
    notas_globales = [] # Creamos la estructura donde se van a guardar las listas
    for i in range(3):
        notas = []
        enumeracion = i + 1
        for j in range(3):
            contador = j + 1
            nota = float(input(f"Ingrese la nota de la materia {contador} del estudiante {enumeracion}: "))
            notas.append(nota)
        print("----------------------------------")            
        notas_globales.append(notas)
    return notas_globales
    
    
def promedio_estudiantes(notas_cada_estudiante):
    numero_elementos = len(notas_cada_estudiante)
    suma = 0
    for i in notas_cada_estudiante:
        suma += i
    return round(suma / numero_elementos, 1)


def promedios_materias(notas_generales):
    promedios = [0, 0, 0] # Usamos una lista por comodidad
    enumeracion = 0
    for i in notas_generales:
        suma = 0
        for j in i:
            suma += j
        promedios[enumeracion] = round(suma / 3, 1) # Ya sabemos que son tres notas por materia
        enumeracion += 1
    return promedios

if __name__ == "__main__": # Para inicializar el script
    print("Bienvenido al Ingreso de datos\n",end="----------------------------------\n")
    enumeracion = 1
    notas_totales = datos(3)
    print("\t     Est.1  " + " Est.2  " + "Est.3  ")
    for i in notas_totales:
        print(f"Materia {enumeracion}     {i[0]}     {i[1]}     {i[2]}")
        enumeracion += 1
    enumeracion = 1
    print("----------------------------------")
    for i in notas_totales:
        promedio = promedio_estudiantes(i)
        print(f"Promedio del estudiante {enumeracion}: {promedio}")
        enumeracion += 1
    print("----------------------------------")
    enumeracion = 1
    for i in promedios_materias(notas_totales):
        print(f"El promedio de la materia {enumeracion} es: {i}")
        enumeracion += 1
    print("----------------------------------\n")


