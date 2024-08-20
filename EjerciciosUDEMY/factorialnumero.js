/*
Dado un numero devolver su factorial, factorial es la multiplicacion de todos los numeros hasta llegar a el
*/

function factorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++){
        resultado *= i;
    }

    return resultado;
}

console.log('El factorial de 3 es: ', factorial(3));