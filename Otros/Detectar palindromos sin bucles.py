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

def palindromo(palabra):
    palabra = palabra.replace(" ", "")
    palabra = palabra.lower()            # Descartamos espacios y mayúsculas
    palabra_invertida = palabra[::-1] # Recorremos la palabra del principio al final, pero en sentido negativo de una unidad, lo que da la palabra al revés
    if palabra == palabra_invertida: 
        return True
    else:
        return False


def run():  # Funcion para inicializar.
    palabra = input('Escribe una palabra: ')
    if palindromo(palabra):
        print('Es palíndromo')
    else:
        print('No es palíndromo')


if __name__ == '__main__': # Por convención phyton siempre ejecute lo que este abajo de esta estructura (entry point)
    run()