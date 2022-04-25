# Declaremos todas las variables

posicionX, posicionY, movimientoX, movimientoY, primera_vez, arriba, abajo, tecla_pulsada = 40, 200, 3, 4, True, False, False, False

'''
Acabamos de establecer:
1. La posición determinada para el spawn de la bola (se puede hacer aleatorio).
2. Tazas de movimiento para la pelota en cada eje.
3. Estructura de control "primera vez" para asignarle algunos atributos a la raqueta (rectángulo) usando ámbitos creados por draw.

Podemos establecer la posición de los rectángulos para las raquetas, pero sin las palabras width que solo existen cuando se ejecuta el draw. 
'''

def setup():
    size(600,400)


def draw(): # En esta funcion van las cosas que se repiten (como los movimientos)
    background(0)
    # Para usar las variables que declaramos antes usamos global
    global posicionX, posicionY, movimientoX, movimientoY, altoRec, anchoRec, posicionYRec, primera_vez, arriba, abajo, tecla_pulsada
    anchoRec = 20
    altoRec = anchoRec * 4
    
    if primera_vez: # Se recurre a esta estructura porque la posicion se refiere a elementos que solo se reconocen despues de ejecutar el setup
        global posicionYRec 
        global primera_vez
        posicionYRec = width / 2  - altoRec / 2
        primera_vez = False
    
    diametro = 40
    radio = diametro / 2
    fill(255)
    ellipse(posicionX, posicionY   , diametro, diametro)
    rect(20          , posicionYRec, anchoRec, altoRec)
    fill(255)
    
    # Aplicamos las tazas de movimiento que establecimos antes
    posicionX += movimientoX
    posicionY += movimientoY
    # Con la tazas aplicadas vamos cambiando las posiciones de las variables

    # Rebote horizontal
    if posicionX > width - radio or posicionX < radio:
        movimientoX = -movimientoX # Cambio de signo a la variable
    # Rebote vertical
    if posicionY > height - radio or posicionY < radio:
        movimientoY = -movimientoY # Cambio de signo a la variable


# Las funciones de eventos son independientes del draw
def keyPressed():
    global tecla_pulsada, posicionYRec, altoRec
    if keyCode == UP and not tecla_pulsada:
        if posicionYRec > 0:
            posicionYRec -=  10
            tecla_pulsada = True
    elif keyCode == DOWN and not tecla_pulsada:
        if posicionYRec < height + altoRec:
            posicionYRec += 10
            tecla_pulsada = True
            
def keyReleased():
    global tecla_pulsada
    if keyCode == UP or keyCode == DOWN:
        tecla_pulsada = False