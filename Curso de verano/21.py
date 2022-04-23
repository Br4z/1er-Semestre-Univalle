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

# Dada una lista de calificaciones ver cuantos aprobaron y cuantos perdieron

calificaciones = [4, 3, 2, 7, 6, 8, 5, 10, 3, 8]

# Inicializamos las variables que vamos a usar

reprobados = 0
aprobados = 0

for i in calificaciones:
    if i < 3:
        reprobados = reprobados + 1
    else:
        aprobados = aprobados + 1

porcentaje_Aprobados = (100 / len(calificaciones)) * aprobados
porcentaje_Reprobados = (100 - porcentaje_Aprobados)
print ("Hay ",reprobados, " suspensos, que representan el", porcentaje_Reprobados, "% del total. ")
print ("Hay ",aprobados, " aprobados, que representan el", porcentaje_Aprobados, "% del total. ")
