/*
Dado un numero ver si es capicua ,  se lee igual de izquierda  a derecha y viceversa
*/

function capicua(numero) {
    let procesado = parseInt(numero.toString().split('').reverse().join(''))

    return numero === procesado;


}

console.log(capicua(3003))