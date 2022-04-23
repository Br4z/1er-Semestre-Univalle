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

# Hagamos una funcion que halle la media (el valor del medio en estadística) de un conjunto de números
# El anterior ejemplo lo hicimos para dos números, ahora hagamos mas general

def media(*numeros): # El * es cuando no se sabe cuantos parametros entran (aquí es tratado como una lista o un objeto iterable).
    a = 0
    for i in numeros:
        a = a + i
    media = a / len(numeros)
    return media
media = media(5, 7, 9, 1, 2, 8)


print("la media es ", media)

def media2(lista):
    a = 0
    for i in lista:
        a = a + i
    return "la media es: ", a / len(lista)

print(media2([5,7,9,1,2,8]))
