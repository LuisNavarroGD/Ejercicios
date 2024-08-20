/*
Dado un numero entero, inviertelo y devuelve de nuevo el entero

Ejemplos: invertirNumero(67) Devuelve 76
*/

let numero = 1256;

function invertirNumero(numero) {
 
    let invertido = parseInt(numero.toString().split('').reverse().join('') * Math.sign(numero));

    return invertido;
}

console.log("El numero invertido es: ", invertirNumero(numero))
