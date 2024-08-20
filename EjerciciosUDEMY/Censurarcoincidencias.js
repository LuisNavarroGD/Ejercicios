/*
Dado un texto y una busqueda censurar coincidencias con censurado
*/

function censurado(texto, busqueda) {
    let resultado = "";

    if (!texto && !busqueda) {
        resultado = "No puedes leer el texto y la busqueda"
    } else if (!texto && busqueda) {
        resultado = "No puedes leer el texto";
    }
    else if (texto && !busqueda) {
        resultado = "No puedes hacer la busqueda"
    }
    else if (texto && busqueda) {
        resultado = texto.replace(new RegExp(busqueda, 'gi'), "[//CENSURADO//]");
    }

    return resultado;
}

console.log(censurado("holamanola holacrayola holacaracola hola", "hola"))