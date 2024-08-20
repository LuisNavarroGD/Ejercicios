/*
Dada un array de numeros devolver el valor mas alto y el mas bajo
*/

function altobajo(numeros) {
    let ordenados = numeros.sort((a, b) => a - b)

    return {
        bajo: ordenados[0],
        alto: ordenados[ordenados.length - 1]
    }
}

console.log(altobajo([100, 220, 50,25,7,5,4,550]))