# 2. cuantas veces se repite un caracter

TEXT = "sadsadsafsddcdvxcgdfsd"
caracter = input("ingrese el caracter a buscar: ")

i = 0

for letra in TEXT:
    if letra == caracter:
        i += 1

print(i)