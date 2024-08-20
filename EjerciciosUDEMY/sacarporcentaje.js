/*
Sacar porcentaje de un X numero
*/

let numero = 200;
const porcentaje = 15;

function sacarporcentaje(numero, porcentaje) {
    let resultado = (numero * (porcentaje / 100));

    return resultado
}

console.log(`El ${porcentaje}% de ${numero} es: ${sacarporcentaje(numero,porcentaje)}`)