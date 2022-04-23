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

def minimo_comun_multiplo(numero1, numero2):
    mayor = max(numero1, numero2)
    menor = min(numero1, numero2)
    contador = mayor
    while contador % mayor != 0 or contador % menor != 0: # Se detiene cuando ambas divisiones son exactas
        contador += 1
    return contador

print(minimo_comun_multiplo(24,36))

def maximo_comun_divisor(numero1, numero2): # El máximo común divisor esta limitado por el numero mas pequeño (aprovechemos esto)
    mayor = max(numero1, numero2)
    menor = min(numero1, numero2)
    contador = menor
    while mayor % contador != 0 or menor % contador != 0: 
        contador -= 1
    return contador

print(maximo_comun_divisor(24, 36))

