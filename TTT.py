import random

input("Bienvenido, presiona enter para jugar tic-tac-toe\n")


juego = [[[], [], []] for _ in range(3)]

def generarMapa(juego):

    for columnas in range(len(juego)):

        for filas in range(len(juego)):

            if not juego[columnas][filas]:
                print (f"[ ]", end="")
            else:
                print(f"[{juego[columnas][filas]}]", end="")
        print()

def casillaBot(juego):
    columna_random = random.Random().randint(a=0, b=2)
    fila_random = random.Random().randint(a=0, b=2)
    if not juego[columna_random][fila_random]:
        juego[columna_random][fila_random] = "O"
    else:
        casillaBot(juego)

def ganar(juego):
    for fila in juego:
        if fila[0] == fila[1] == fila[2] != []:
            return fila[0]
            
    for col in range(3):
        if juego[0][col] == juego[1][col] == juego[2][col] != []:
            return juego[0][col]
            
    if juego[0][0] == juego[1][1] == juego[2][2] != []:
        return juego[0][0]
        
    if juego[0][2] == juego[1][1] == juego [2][0] != []:
        return juego[0][2]
    return None
        
def marcarCasillas(juego, lista):
    try:
        print("casilla marcada\n")
        juego[int(lista[0])][int(lista[1])] = "X"
    except IndexError:
        pass
    casillaBot(juego)
    return ganar(juego)

while True:
    generarMapa(juego)
    coord = input("Introduce una coordenada ejem -> 0 1\n")
    try:
        lista = coord.split()
        if int(coord[0]) < 0 or int(coord[0]) > 2 or int(coord[2]) < 0 or int(coord[2]) > 2:
            lista.clear()
            print("Rango de coordenadas invalido!\n")
    except IndexError: 
        print("Rango de coordenadas invalido!\nEJEMPLO -> 0 1\n")
    ganador = marcarCasillas(juego, lista)    
    if ganador:
        print(f"GANÓ {ganador}")    
        break