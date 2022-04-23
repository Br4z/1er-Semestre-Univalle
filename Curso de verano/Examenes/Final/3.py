vocales = ["a", "e", "i", "o", "u"]

def analizador(text):
    apariciones = [0, 0, 0, 0, 0]
    for i in text:
        for j in range(len(vocales)):
            if vocales[j] == i:
                apariciones[j] += 1
    return apariciones


if __name__ == "__main__": # Para inicializar el script
    caracter = "*"
    text = input("Ingrese el texto que desea analizar: ")
    analisis = analizador(text)
    print("      Letra"     +      "         Frecuencia" + "       Histograma")
    for i in range(len(vocales)):
        print(f"\t {vocales[i]} \t\t{analisis[i]}  \t\t {caracter * int(analisis[i])}")
    print("\n texto ordenado:")
    text = text.replace(" ","")
    texto_ordenado = "".join(sorted(text))
    print(texto_ordenado)

