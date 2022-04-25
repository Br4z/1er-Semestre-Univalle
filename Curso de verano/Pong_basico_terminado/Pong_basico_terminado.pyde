# Declaremos todas las variables

posicionX, posicionY, movimientoX, movimientoY, primera_vez, arriba, abajo, arriba2, abajo2, vidas1, vidas2, puntuacion1, puntuacion2 = 40, 200, 3, 4, True, False, False, False, False, 3, 3, 0, 0

'''
Acabamos de establecer:
1. La posición determinada para el spawn de la bola (se puede hacer aleatorio).
2. Tazas de movimiento para la pelota en cada eje.
3. Estructura de control "primera vez" para asignarle algunos atributos a la raqueta (rectángulo) usando ámbitos creados por draw.

Podemos establecer la posición de los rectángulos para las raquetas, pero sin las palabras width que solo existen cuando se ejecuta el draw. 
'''

def setup():
    size(600,400) # Tamaño del lienzo


def draw(): # En esta funcion van las cosas que se repiten (como los movimientos)
    background(0) # Fondo negro
    # Para usar las variables que declaramos antes usamos global
    global posicionX, posicionY, movimientoX, movimientoY, anchoRec, posicion_y_rec, primera_vez, arriba, abajo, arriba2, abajo2, vidas1, vidas2, puntuacion1, puntuacion2
    # Cargamos la fuente
    fuente = loadFont("Mi fuente.vlw")
    textFont(fuente, 24)
    # Game over
    fill(255, 0, 0) # Rojo
    if vidas1 == 0: # Cuando las vidas llegen a cero, y ademas se muestre en la pantalla se detiene la ejecución
        text("Ha perdido el jugador del lado izquierdo", width / 2 - 175, height / 2)
        noLoop()
        fill(0, 0, 255) # Azul
    elif vidas2 == 0:
        text("Ha perdido el jugador del lado derecho", width / 2 - 175, height / 2)
        noLoop()           
    
    anchoRec = 20
    alto_rec  = anchoRec * 4

    # Texto de vidas
    lifes1 = str(vidas1     ) # No reasignar a vidas porque se queda en string
    lifes2 = str(vidas2     )
    score1 = str(puntuacion1)
    score2 = str(puntuacion2)
    
    fill(255)
    text("Vidas: "+ lifes1, 10, 50         )
    text("Vidas: "+ lifes2, width - 120, 50)
    text("Score: "+ score1, 10, 70         )
    text("Score: "+ score2, width - 120, 70)
    
    if primera_vez: # Se recurre a esta estructura porque la posicion se refiere a elementos que solo se reconocen despues de ejecutar el setup
        global posicion_y_rec
        global posicion_y_rec2  
        global primera_vez
        posicion_y_rec  = width / 2  - alto_rec / 2 # Para que los rectángulos aparezcan alineados verticalmente (teniendo en cuenta que tienen una altura)
        posicion_y_rec2 = width / 2  - alto_rec / 2
        primera_vez   = False
        
    
    diametro = 40
    radio = diametro / 2
    fill(255) # Blanco
    ellipse(posicionX, posicionY, diametro, diametro) # Se pone diámetro, diámetro para que sea un circulo
    rect(5, posicion_y_rec, anchoRec, alto_rec      ) # Queremos que lo dos rectángulos queden a 5 pixeles del borde
    rect(width - anchoRec - 5, posicion_y_rec2, anchoRec, alto_rec   ) # Debido al control de las coordenadas es 575 (width - anchoRec - 5) en vez de 595
    fill(255)
    
    # Rectángulos que decoran los lados de los jugadores
    noStroke() # Quitar delineado
    # Recordando que rect(xInicial, yInicial, xFinal, yFinal)
    fill(255, 0, 0) # Rojo
    # Aprovechamos el 5 que dejamos de margen entre los border y las "raquetas"
    rect(0, 0, 5, height) # Izquirda
    rect(5, height - 5, width / 2, 5) # Abajo
    rect(5, 0, width / 2, 5) # Arriba
    fill(0, 0, 255) # Azul
    rect(width / 2, 0, width, 5) # Arriba
    rect(width - 5, 0, 5, height) # Derecha
    rect(width / 2, height - 5, width, 5)# Abajo
    
    # En la pelota
    # Aplicamos las tazas de movimiento que establecimos antes
    posicionX += movimientoX
    posicionY += movimientoY
    # Con la tazas aplicadas vamos cambiando las posiciones de las variables
    
    
    # Rebote horizontal y vidas
    if posicionX > width - radio or posicionX < radio: # Son condiciones de < y >, porque con nuestra tazas de movimientos, no podemos ser exactos
        # Aumentemos la taza de movimiento en el eje X (como nuestro movimiento se basa en dirección con estos condicionales verifiquemos que si se aumente)
        if movimientoX > 0:
            movimientoX += 0.2
        else:
            movimientoX -= 0.2
        movimientoX = -movimientoX # Cambio de signo a la variable
        if posicionX < 50:
            vidas1 -= 1
        else: # Si choco y no lo hizo en el lado izquierdo solo nos queda el lado derecho
            vidas2 -= 1

    # Rebote vertical
    if posicionY > height - 5 - radio or posicionY < radio - 5:
        movimientoY = -movimientoY # Cambio de signo a la variable
        
    # Movimiento raqueta izquierda 
    if arriba and posicion_y_rec > 0: # Confirmar que este presionando la flecha hacia arriba y ademas que la raqueta no se salga
        posicion_y_rec -= 3
    elif abajo and posicion_y_rec < height - alto_rec: # No podemos tomar cero como arriba porque el control de coordenadas para el rectángulo se encuentra en el lado superior
        posicion_y_rec += 3 # Con tomar la altura - la altura del rectángulo estariamos nivelando esto.
        
    # Movimiento raqueta derecha    
    if arriba2 and posicion_y_rec2 > 0: 
        posicion_y_rec2 -= 3
    elif abajo2 and posicion_y_rec2 < height - alto_rec:
        posicion_y_rec2 += 3 
    
    # Colisiones con las raquetas:
    # Raqueta izquierda:
    if posicionX <= 5 + anchoRec + radio and movimientoX < 0: # Primero comprobamos en el eje horizontal (si lo esta "tocando", es menor o igual por las tazas de movimientos)
        # Aumentemos la taza de movimiento en el eje X.
        if movimientoX > 0:
            movimietoX += 0.2
        else:
            movimientoX -=0.2
        if posicionY >= posicion_y_rec and posicionY <= posicion_y_rec + alto_rec: # Tengamos en cuenta tambien que solo rebotara si la pelota se dirige a la raqueta (en este caso izquierda)  es decir el movimiento es "negativo" 
            movimientoX = -movimientoX
            puntuacion1 += 25 # Puntuación por repeler la bola para el usuario 1
    # Raqueta derecha (esta en un elif porque no puede estar rebotando en las dos raquetas al mismo tiempo):       
    elif posicionX >= 575 - radio and movimientoX > 0: # En este caso restamos el radio, porque posicionY es el centro de la circunferencia, por lo que si la bola "choca" deberia cumplirse 
        if posicionY >= posicion_y_rec2 and posicionY <= posicion_y_rec2 + alto_rec: 
            movimientoX = -movimientoX
            puntuacion2 += 25  # Puntuación por repeler la bola para el usuario 2

# Las funciones de eventos son independientes del draw

def keyPressed():
    global arriba, abajo, arriba2, abajo2
    if keyCode == UP:
        arriba = True
    elif keyCode == DOWN:
        abajo = True
    elif key == "w":
        arriba2 = True
    elif key == "s":
        abajo2 = True

def keyReleased(): # Funcion para saber cuando el usuario dejo de presionar una tecla
    global arriba, abajo, arriba2, abajo2
    if keyCode == UP:
        arriba = False
    elif keyCode == DOWN:
        abajo = False
    elif key == "w":
        arriba2 = False
    elif key == "s":
        abajo2 = False   
