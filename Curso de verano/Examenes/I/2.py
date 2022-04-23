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

# Crea un script que te dé la traducción de un color al inglés, a petición del usuario (al menos 10 posibles traducciones).

# Aquí están las posibles traducciones que puede dar el script

colors = {
    "rojo": "Red",
    "amarillo": "Yellow",
    "cafe": "Brown",
    "morado": "Purple",
    "verde": "Green",
    "gris": "Gray",
    "negro": "Black",
    "blanco": "White",
    "azul": "Blue",
    "naranja": "Orange",
    "rosa": "Pink",
    "rosado": "Pink",
    "violeta": "Violet"
}

# Se le pide el  color al usuario e ingresa como un string

color = input("Ingrese el color que desea traducir: ")

# Para maximizar las coincidencias con nuestro diccionario, en esta asignación eliminamos mayúsculas y espacios que haya dejado el usuario

color = (color.lower()).strip()


for i in colors:
    if color == i:
        print(f"La traducción del color {color} es {colors[i]}")
        break
else:
    print(f"Lo sentimos el color {color} no esta en nuestro diccionario.")