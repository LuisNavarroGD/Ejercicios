/*
Dadas dos cadenas de texto, comprobar que son anagramas,
Cadenas anagramas son si usan los mismos caracteres y la misma cantidad
*/

let texto = "Sergio";
let textoigual = "Riesgo"

function limpiartexto(texto) {
    return texto.replace(/[^\w]/gi, '').toLowerCase().split('').sort().join('')
}

function anagramas(texto1, texto2) {
    if (limpiartexto(texto1) === limpiartexto(texto2)){
        return 'Son anagramas'
    } else {
        return 'No son anagramas'
    }
}

console.log(anagramas('LUIS','SIUL'))