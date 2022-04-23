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
import os

def clearConsole():
    command = 'clear'
    os.system(command)


def exchanges(moneda, cantidad):
    monedas = [ # usemos un lista con tuplas para almacenar las unidades de conversion.
        {'Id': 1, 'mult': 0.0013, 'country_desc': 'chilenos'},
        {'Id': 2, 'mult': 0.00027, 'country_desc': 'colombianos'},
        {'Id': 3, 'mult': 0.014, 'country_desc': 'argentinos'},
        {'Id': 4, 'mult': 0.044, 'country_desc': 'mexicanos'}
    ]
    if moneda >= 1 and moneda <= 4: # Valida que el usuario hay ingresado una opción valida.
        current = monedas[moneda - 1] # Por la forma en que se enumeran las listas hay que restarle 1.
        print(f"Los {cantidad} pesos {current['country_desc']} equivalen a {cantidad * current['mult']} dolares")
    else:
        print('Ingresa solo un numero de la lista')



def inicializar():
    try:
        moneda = int(input('''
        Ingresa el indice de la moneda que quieres convertira  dolar:
            [1] Moneda chilena a Dolar
            [2] Moneda colombiana a Dolar
            [3] Moneda argentina a Dolar
            [4] Moneda mexicana a Dolar
            \n Selecciona: '''))
        clearConsole()
        cantidad = int(input('Ingresa la cantidad que quieres convertir: '))
        exchanges(moneda,cantidad)
    except:
        print('* * * * * * E R R O R * * * * * *')
        print('Por favor, Ingresa solo valores numéricos')

inicializar()




