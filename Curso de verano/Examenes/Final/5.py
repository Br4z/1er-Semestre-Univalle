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

# Ingreso de datos

def datos(numero_meses):
    ventas_Globales = []
    for i in range(numero_meses):
        notas = []
        enumeracion = 1
        for j in range(3):
            contador = j + 1
            nota = float(input(f"Ingrese la venta en la sede {contador} del mes {enumeracion}: "))
            notas.append(nota)
            enumeracion += 1
        ventas_Globales.append(notas)
        print("----------------------------------")            
    return ventas_Globales


def analizador(notas_globales):
    datos = [0, 0, 0, 0, 0] # La lista corresponde a suma total, promedio mensual, mayor venta , sede que tuvo la mayor venta y el mes en que la tuvo
    suma =  datos[0]
    venta_mayor = datos[2]
    sede = datos[3]
    mes = datos[4]
    enumeracion = 0

    for i in notas_globales:
        for j in i:
            suma += j
            if j > venta_mayor:
                venta_mayor = j
                sede = enumeracion
        enumeracion += 1

    for i in notas_globales[sede]: # Aprovechamos que sabemos en que sede se hizo la mayor venta
        if i == venta_mayor: # También sabemos el valor de la venta
            break
        mes += 1

    sede += 1  # Para acomodar la enumeracion
    mes += 1

    datos[0] = suma
    datos[1] = suma / 3 # Este numero para pruebas
    datos[2] = venta_mayor
    datos[3] = sede
    datos[4] = mes 
    return datos


if __name__ == "__main__": # Para inicializar el script
    print("***** Bienvenido a DELICIAS *****\n")
    print("----------------------------------")
    lista_Ventas = datos(3)
    print(lista_Ventas)
    datos = analizador(lista_Ventas)
    print("La suma total de ventas es: ",datos[0])
    print("El promedio de ventas mensual es: ",datos[1])
    print(f"La sede que tuvo la mayor venta fue la {datos[3]} con una venta de ${datos[2]} en el mes {datos[4]} ")


