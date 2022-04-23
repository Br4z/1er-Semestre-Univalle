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

# Scrip para saber cuanto debe sacar una persona para ganar la materia (siendo posible, y ademas faltando una nota), dada 
# las valoraciones de las siguientes actividades actividades:

'''
examen 1 25%    1.25
examen 2 25%    1.25          mínimo la suma debe dar 3.0
quices 40%      2.0
practicas 10%   0.5

En el caso de no necesitar la nota se le informa
'''

print("Seleccione la nota que le falta: ")


try:
    opcion = int(input(" 1. Examen 1 \n 2. Examen 2 \n 3. Quices \n 4. Practicas \n"))

    def missingGrade(examen1,examen2,quices,practicas):
        if opcion == 1:
            nota_parcial = examen2 * 0.25 + quices * 0.4 + practicas * 0.1
            nota_para_aprobar = 3 - nota_parcial
            es_aprobable_o_no = nota_para_aprobar <= 1.25 # Esta es la nota maxima que nos puede dar el examen 1
            nota_requerida = 5 * nota_para_aprobar / 1.25 # Usando reglas de tres (o simplemente conversion de unidades)
            if nota_parcial >= 3:
                return "Con las notas que tienes ya pasaste la materia"
            elif not es_aprobable_o_no:
                return "Tus notas no son suficientes para aprobar"
            else:
                return "La nota que necesitas para pasar es: ", nota_requerida, " en el examen 1."
        elif opcion == 2: 
            nota_parcial = examen1 * 0.25 + quices * 0.4 + practicas * 0.1
            nota_para_aprobar = 3 - nota_parcial
            es_aprobable_o_no = nota_para_aprobar <= 1.25 # Esta es la nota maxima que nos puede dar el examen 2
            nota_requerida = 5 * nota_para_aprobar / 1.25 # Usando reglas de tres (o simplemente conversion de unidades)        
            if nota_parcial >= 3:
                return "Con las notas que tienes ya pasaste la materia"
            elif not es_aprobable_o_no:
                return "Tus notas no son suficientes para aprobar"
            else:
                return "La nota que necesitas para pasar es: ", nota_requerida, " en el examen 2."
        elif opcion == 3:
            nota_parcial = examen1 * 0.25 + examen2 * 0.25 + practicas * 0.1
            nota_para_aprobar = 3 - nota_parcial
            es_aprobable_o_no = nota_para_aprobar <= 2 # Esta es la nota maxima que nos puede dar el examen 2
            nota_requerida = 5 * nota_para_aprobar / 2 # Usando reglas de tres (o simplemente conversion de unidades)           
            if nota_parcial >= 3:
                return "Con las notas que tienes ya pasaste la materia"
            elif not es_aprobable_o_no:
                return "Tus notas no son suficientes para aprobar"
            else:
                return "La nota que necesitas para pasar es: ", nota_requerida, " en los quices."
        else:
            nota_parcial = examen1 * 0.25 + examen2 * 0.25 + quices * 0.4
            nota_para_aprobar = 3 - nota_parcial
            es_aprobable_o_no = nota_para_aprobar <= 0.5 # Esta es la nota maxima que nos puede dar el examen 2.
            nota_requerida = 5 * nota_para_aprobar / 0.5 # Usando reglas de tres (o simplemente conversion de unidades)           
            if nota_parcial >= 3:
                return "Con las notas que tienes ya pasaste la materia"
            elif not es_aprobable_o_no:
                return "Tus notas no son suficientes para aprobar"
            else:
                return "La nota que necesitas para pasar es: ", nota_requerida, " en las practicas."   

# Ingreso de las notas y validación de las mismas

    def validation():
        print("\nIngrese un -10 en la nota que falta (esa nota no va a ser tenida en cuenta). \n ")
        examen1 = float(input("Cual es la calificación del primer examen:",))
        examen2 = float(input("Cual es la calificación del segundo examen:"))
        quices = float(input("Cual es la calificación de los quices:"))
        practicas = float(input("Cual es la calificación de las practicas:"))
        validationExamen1 = examen1 >= 0 and examen1 <= 5 or examen1 == -10
        validationExamen2 = examen2 >= 0 and examen2 <= 5 or examen2 == -10
        validationQuices = quices >= 0 and quices <= 5 or quices == -10
        validationPracticas = practicas >= 0 and practicas <= 5 or practicas == -10
        if validationExamen1 and validationExamen2 and validationQuices and validationPracticas:
            print(missingGrade(examen1, examen2, quices, practicas))
        else:
            print("Hubo algún error en la digitacion de las notas:")
            opcion = int(input("Desea intentarlo otra vez, si (1) o no (0): "))
            if opcion == 1:
                validation()
            else:
                print("Gracias por usar este script !")

# Validación de la opcion escogida

    if opcion > 0 and opcion < 5:
        validation()
    else: 
        print("No ha ingresado una opcion valida.")  

except:
    print("No ha ingresado una opcion valida.")    




