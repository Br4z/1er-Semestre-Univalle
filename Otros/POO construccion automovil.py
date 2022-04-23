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

# Construyamos un automóvil descomponiendolo en sus partes.

class Automovil:
    def __init__(self, modelo, marca, color):
        self.modelo = modelo
        self.marca = marca
        self.color = color        
        self._estado = "en_reposo "     # Cuando hay un "_" es convención para definir una método o atributo privado.  
        self._motor = Motor(cilindros = 4) # Por defecto el automóvil se construye con 4 cilindros.
        self._radio = Radio("Pioneer")

    
    def acelerar(self, tipo = "despacio"):
        if tipo == 'rapida':
            self._motor.inyecta_gasolina(10)
        else:
            self._motor.inyecta_gasolina(3)

        self._estado = "en_movimiento"

class Motor:

    def __init__(self, cilindros, tipo = "gasolina"):
        self.cilindros = cilindros
        self.tipo = tipo
        self._temperatura = 0

    def inyecta_gasolina(self, cantidad):
        pass

class Radio:

    def __init__(self, marca, volumen = 2):
        self.marca = marca
        self.volumen = volumen
    

    def subir_volumen(self, nivel = 1):
        self.volumen += nivel

    def subir_volumen(self, nivel = 1):
        self.volumen -= nivel

# Esto sirve para agrupar código en niveles mas bajos, una forma de verlo es simplificar las operaciones del usurario.

mi_automovil = Automovil("30B45", "Chevy", "Rojo")
print(mi_automovil)