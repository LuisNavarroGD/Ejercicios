/*
Devolver de un texto el caracter que mas se repite
*/

function masUsado(texto) {
    
    let mapeo_letras = {};
    let maximo_repeticiones = 0;
    let letra_mas_repetida = "";

    texto = texto.toLowerCase();

    //Contar la frecuencia de cada letra
    for (let letra of texto) {
        if (letra !== " ") {
            if (!mapeo_letras[letra]) {
                mapeo_letras[letra] = 1;
            } else{
                mapeo_letras[letra]++
            }
        }
    }

    for (let letra in mapeo_letras) {
        if (mapeo_letras[letra] > maximo_repeticiones) {
            maximo_repeticiones = mapeo_letras[letra];
            letra_mas_repetida = letra;
        }
    }
    return letra_mas_repetida;
}

console.log("La letra mas repetida es: ",masUsado("Hola como estas estas tu hola"))
