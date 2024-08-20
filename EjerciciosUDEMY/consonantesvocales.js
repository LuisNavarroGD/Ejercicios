/*
Dado un texto devolver cuantas consonantes y vocales tiene
*/

function contarLetras(texto) {
  let consonantes = 0,
    vocales = 0,
    texto_limpio = "";

  texto_limpio = texto.split("").filter((letra) => /[áéíóú\w]/gi.test(letra) && isNaN(letra)).join('');

    for (let letra of texto_limpio) {
        if (letra = /[áéíóúaeiou]/gi.test(letra)) {
            vocales++;
        }
        else {
            consonantes ++
        }
    }

    return `El texto tiene ${consonantes} consonantes y ${vocales} vocales`
}

console.log(contarLetras('TEXTO DE PRUEBA'))

