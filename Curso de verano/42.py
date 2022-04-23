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

# Creemos una funcion que convierta un numero decimal a binario

def to_binary(n): # Para resolverlo convertiremos el numero a una lista
    binary = []
    while n > 0: # Esto es para cuando la division finalice, y ya no haya nada mas que dividir
        binary.append(str(n % 2))
        n = n // 2
    binary.reverse()  # Hasta aquí los dígitos son se parados por comas com una lista  
    return "".join(binary)  # Con esto juntamos los números, no se retorna binary, porque este método no afecta el dato original

print (to_binary(22))


def to_decimal(n):
    n = list(n) # Separamos los dígitos de un numero, convirtiéndolo en una lista
    n.reverse # Por naturaleza tenemos que invertirlo, por que los residuos en el binario se toman del ultimo al primero
    decimal = 0
    for i in range(len(n)):
        decimal = decimal + int(n[i]) * 2 ** i # Justamente empieza a elever desde cero, porque asi es el arreglo que creo
    return decimal

print (to_decimal("10110"))

