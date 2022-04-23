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

# Simular una fruteria

frutas = {
    "Manzana": 1500, 
    "Melon": 3000, 
    "Pera": 2800, 
    "Banano": 1600
    }

fruta = input("Que fruta quieres? : ").title() # El método llamado es para volver mayúscula la palabra del string (en cada espacio y si no hay una letra del alfabeto también)
kg = float(input("Cuantos kilos? : "))

if fruta in frutas:
    print(kg, "kilos de", fruta, "valen: $", frutas[fruta] * kg)
else:
    print ("lo siento, la fruta", fruta, "no esta disponible.")