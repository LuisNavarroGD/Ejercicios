/*
Dado un texto verificar si es un email
*/

function comprobarEmail(texto) {
    return /^\w+@\w+\.\w+$/gi.test(texto);
}

console.log(comprobarEmail('luismarionavarro@gmail.com'))