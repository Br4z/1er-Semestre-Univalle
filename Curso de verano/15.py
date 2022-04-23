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

# Veamos un poco de listas, tuplas y diccionarios

nombres = [
    "Brandon",
    "Deivid",
    "Blanca"
    ]

nombres.append("Hernan")  # La funcion append inserta el elemento a la lista (transforma la lista original)
print(nombres)

nombrePosicionUno = nombres[1] # La enumeración de las lista comienza en 0
print(nombrePosicionUno)

posicionDelElementoBrandon = nombres.index("Brandon") # Esta funcion nos dice en que posición el elemento que entra como argumento en una lista
print(posicionDelElementoBrandon)

# Funcion de ordenamiento (varios tipos) afectan a la lista original
nombres.sort() # Por defecto ordena alfabéticamente
print(nombres)
listaInvertida = nombres.sort(reverse = True)
print(nombres)