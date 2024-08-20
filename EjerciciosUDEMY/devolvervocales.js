/*
Dada una cadena de texto, devolver cuantas vocales tiene
*/

let texto = "prr"
const vocales = ["A","E","I","O","U","a","e","i","o","u"]
let contador = 0;

function cadenatexto(texto) {
    for (let letras of texto) {
        if (vocales.includes(letras)) {
            contador++;
        }
    }
    if (contador === 0 ) {
        return "El texto no incluye vocales"
    } else {
        return contador;
    }
}

console.log(cadenatexto(texto))


function texto_vocales(palabra) {
    let coincidencias = palabra.match(/[aeiou]/gi)

    return coincidencias ? coincidencias.length: 0;
}


console.log(texto_vocales("PRR"))