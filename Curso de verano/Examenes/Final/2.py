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
# Calificación menú del día:

COMIDAS = [
    "ENTRADA",
    "PLATO PRINCIPAL",
    "POSTRE"
    ]  # Lo declaramos como constante

def datos(numero_clientes):
    calificaciones_globales = []
    for i in range(numero_clientes):
        notas = []
        enumeracion = i + 1
        for j in range(3):
            nota = int(input(f"Cliente {enumeracion}, ingrese calificación de {COMIDAS[j]}: "))
            notas.append(nota)
        calificaciones_globales.append(notas)
        print("----------------------------------")            
    return calificaciones_globales

def promedios_Platos(calificaciones_generales):
    promedios = [0, 0, 0] # Usamos una lista por comodidad
    enumeracion = 0 # Importante asignarlo aquí y no dentro del bucle
    for i in range(3): # Sabemos que son cinco calificaciones por comida
        suma = 0
        for j in calificaciones_generales:
            suma += j[enumeracion]
        enumeracion += 1
        promedio = suma / 5
        promedios[i] = promedio
    return promedios


if __name__ == "__main__": # Para inicializar el script
    print("***** Bienvenido a la encuesta sobre el menú del día *****\n")
    print("Por favor califique la encuesta con un valor entero entre 1 y 5")
    print("----------------------------------")
    notas_totales = datos(5)
    enumeracion = 0
    for i in promedios_Platos(notas_totales):
        if i < 3.5:
            print(f"Promedio de POSTRE: {COMIDAS[enumeracion]}. Se recomienda quitar del menú")
        else:
            print(f"Promedio de POSTRE: {COMIDAS[enumeracion]}. Se recomienda dejar en el menú")
    enumeracion += 1

