/*
Dada una cadena de texto comprobar si es palindromo
*/

function palindromo(palabra) {
    let invertido = palabra.split('').reverse().join('');

    if (invertido === palabra) {
        return ('Sí')
    } else {
        return('Nope')
    }
}

let result = palindromo('allivessevilla')

console.log('Es palindromo ?? ' + result)