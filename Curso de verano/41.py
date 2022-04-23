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

# Usando nuestra funcion anterior, hallemos unas cuantas medidas estadísticas (para esto recibirá un conjunto de números)

def square_list(list):
    square_list = []   
    for i in list:
        square_list.append(i ** 2)
    else:
        return square_list

def stats(list):
    stats = {}  # Metamos todo en un diccionario para mas comodidad
    stats["Media"] = sum(list) / len(list)
    stats["Varianza"] = sum(square_list(list)) / len(list) - stats["Media"] ** 2
    stats["Desviacion"] = stats["Varianza"] ** 0.5
    return stats

print(stats([1, 2, 3, 4, 5]))
print(stats([2.3, 5.7, 6.8, 9.7, 12.1, 15.6]))