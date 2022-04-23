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

class Coordenada:
    def __init__(self, cord_x, cord_y): 
        self.x = cord_x # El atributo "x" de nuestro objeto se le asignara cord_x, los mismo con el y.
        self.y = cord_y

    def distacia_cordenadas(self,otra_cordenada):
        x_diff = (self.x - otra_cordenada.x) ** 2
        y_diff = (self.y - otra_cordenada.y) ** 2
        return round((x_diff + y_diff) ** 0.5, 2) # Esto es igual a sacarle la raíz cuadrada

if __name__ == '__main__':
    cordenada_1 = Coordenada(3, 30)
    cordenada_2 = Coordenada(4, 8)
    distacia_coordenadas = cordenada_1.distacia_cordenadas(cordenada_2) # Estamos llamando al método distacia_coordenadas.
    print(f"La distancia entre la coordenada 1 y 2 es: {distacia_coordenadas}")