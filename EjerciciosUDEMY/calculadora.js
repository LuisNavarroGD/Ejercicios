/*
Dados dos numeros devolver el resultado de 2 numeros
*/

function calculadora(numero1, numero2) {
    let resultado = `
Suma = ${numero1 + numero2};
        Resta = ${numero1 - numero2};
        Division = ${numero1 / numero2};
        Multiplicacion = ${numero1 * numero2};
    `

    return resultado;
}

console.log(calculadora(10,5))