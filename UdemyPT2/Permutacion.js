/*
    Enunciado Ejercicio 7:
    Dada un array de enteros, detectar si esa lista
    de números es una permutación del 1 al ultimo número del array.
     
    En este caso una permutación es una secuencia de números
    en orden sin que falte ninguno entre ellos.
     
    Devolver el número faltante más grande.
     
    El array puede venir desordenado.
     
    Ejemplos:
    permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
    permutacion([1, 2, 3, 5]))     // Devuelve: 4
     
    */

function permutacion(arreglo) {
        
    //Ordenar el array de numeros
    arreglo.sort((menor, mayor) => menor - mayor);

    let numfaltante = []

    // Recorrer el array y comprobar si cada elemento es igual al sigueinte numero mas uno
    for (let elemento of arreglo) {
        
        let numeroFalta = elemento + 1; 

        if (elemento !== elemento + 1) {
            numfaltante.push(numeroFalta);
        }
    }

    numfaltante.pop();

    //Si todo es correcto devolver el ultimo numero
    let resultado = arreglo[arreglo.length - 1]
    if (numfaltante.length >= 1) {
        resultado = arreglo[numfaltante.length-1]
    }

    return resultado;
}

console.log(permutacion([1, 2, 3, 4, 5]));