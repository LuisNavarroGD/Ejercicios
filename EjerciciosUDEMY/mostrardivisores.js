/*
Dado un numero mostrar sus divisores
*/

function divisor(numero, posible_divisor) {
    if (numero % posible_divisor === 0) {
        return posible_divisor;
    }
    return "No es numero divisor";
}

function mostrarDivisores(numero) {
    for (let i = 1; i <= numero; i++){
        let esDivisor = divisor(numero, i);

        if (esDivisor) console.log(esDivisor);
    }
}

console.log(mostrarDivisores(20))