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

# Funcion para elevar al cuadrado todas las entradas que reciba (vamos a hacerlo con listas y con parametros)

def square_List(list):
    square_list = []  # Esta lista "muere" cuando  finalice la ejecución del programa 
    for i in list:
        square_list.append(i ** 2)
    else:
        return square_list

print(square_List([1, 2, 3, 4, 5]))

# Veamos como seria sin la necesidad de tener como entrada una lista

def square(*numbers):
    square_list = []  
    for i in numbers: # Para recorrerlo convierte las entradas en listas
        square_list.append(i ** 2)
    else:
        return square_list

print(square(1, 2, 3, 4, 5))
