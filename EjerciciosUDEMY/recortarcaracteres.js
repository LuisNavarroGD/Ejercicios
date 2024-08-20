/*
Dada una funcion de una cadena de texto, recortar los caracteres mencionados
*/

function cadena(texto, numero) {
    return texto.slice(0, numero)
}

console.log(cadena("Cursos desarrollo web", 6))

