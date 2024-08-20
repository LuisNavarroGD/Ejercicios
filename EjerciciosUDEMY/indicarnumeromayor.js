/*
Dados 2 numeros indicar cual es mayor y cual menor
*/


function mayormenor(numero1, numero2) {

    if (numero1 === numero2) {
        return 'SON IGUALES'
    }
    else if (numero1 > numero2) {
        return `${numero1} es mayor y ${numero2} es menor`
    }
    else {
        return `${numero2} es mayor y ${numero1} es menor`;
    }
}

console.log(mayormenor(4, 4))

