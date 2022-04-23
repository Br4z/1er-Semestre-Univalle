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

# Calcular una factura dados unas compras, precio de las compras y IVA.

try:
    # Entrada de datos

    cliente = input("Ingrese el nombre del cliente: ")
    sandalias_a_vender = int(input("Ingrese el numero de pares de sandalias a vender: "))
    tenis_a_vender = int(input("Ingrese el numero de pares de tenis a vender: "))
    mocasines_a_vender = int(input("Ingrese el numero de pares de mocasines a vender: "))
    # Establecer variables base (para hacer mas modular el script) para su fácil modificación despues

    precio_adquisicion_sandalias = 10000
    aumento_precio_sandalias = precio_adquisicion_sandalias * 0.4
    precio_final_sandalias = precio_adquisicion_sandalias + aumento_precio_sandalias

    precio_adquisicion_tenis = 30000
    aumento_precio_tenis = precio_adquisicion_tenis * 0.4
    precio_final_tenis = precio_adquisicion_tenis + aumento_precio_tenis

    precio_adquisicion_mosines = 40000
    aumento_precio_mocasines = precio_adquisicion_mosines * 0.5
    precio_final_mocasines = precio_adquisicion_mosines + aumento_precio_mocasines

    # Calcular subtotales

    total_sandalias = sandalias_a_vender * 14000 # 14000 es el precio al que las adquirió mas su 40%
    total_tenis = tenis_a_vender * 42000 # 42000 es el precio al que las adquirió mas su 40%
    total_mocasines = mocasines_a_vender * 60000 # 60000 es el precio al que las adquirió mas su 50%

    subtotal_venta = total_sandalias +  total_tenis + total_mocasines

    descuento = subtotal_venta * 0.08 # Esto es equivalente a sacarle el 8%

    subtotal_con_descuento = subtotal_venta - descuento

    Iva = subtotal_con_descuento * 0.19 # Esto es equivalente al sacarle el 19%

    total_venta = subtotal_con_descuento + Iva

    print("******FACTURA****** \n ")
    print("Nombre del cliente: ", cliente)  # Lo agrega porque vi que en ningún momento se usaba
    print("Sandalias valor unitario: $", precio_final_sandalias,"  Cantidad: ", sandalias_a_vender,"  Subtotal: $", total_sandalias)
    print("Tenis valor unitario: $", precio_final_tenis,"  Cantidad: ", tenis_a_vender, "  Subtotal: $", total_tenis)
    print("Mocacines valor unitario: $", precio_final_mocasines,"  Cantidad: ", mocasines_a_vender, "  Subtotal: $", total_mocasines)
    print("Subtotal de la venta: $", subtotal_venta)
    print("Descuento del 8%: $", descuento)
    print("Subtotal con descuento: $", subtotal_con_descuento)
    print("IVA (19%): $", Iva)
    print("Total venta: $", total_venta)
except:
    print("No ha ingresado un valor valido")
