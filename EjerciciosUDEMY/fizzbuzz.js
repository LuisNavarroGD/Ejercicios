/*
Dado un numero, mostrar los numeros de 1 hasta el numero.
Pero para multiplos de 3 imprimir buzz en vez del numero
Para multiplos de 5 imprimir lightyear
Para multiplos de 3 y de 5 imprimir Buzzlightyear
*/

let numero = 15

function BuzzLightyear(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      return "BuzzLightyear";
    } else if (numero % 3 === 0) {
      return "Buzz";
    }
    else if ( numero % 5 === 0) {
      return "Lightyear";
    }
    else {
        return numero;
    }
}

function imprimir(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(BuzzLightyear(i))
    }
}

imprimir(50);





