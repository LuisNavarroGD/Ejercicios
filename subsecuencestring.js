/*
Dado un string S encuentra la longitud de la subcadena más larga que NO contenga caracteres repetidos. 

Ejemplo: 

Entrada : s = "abcabcbb"
Salida : 3
Explicación: La respuesta es "abc", con la longitud de 3.

Entrada : s = "bbbbb"
Salida : 1
Explicación: La respuesta es "b", con la longitud de 1.

Entrada : s = "pwwkew"
Salida : 3
Explicación: La respuesta es "wke", con la longitud de 3.
Nota que la respuesta debe ser una subcadena, "pwke" es un subsecuencia y no una subcadena.
*/

function subcadena(cadena) {
    let subcadena = "";
    let longitud = 0;

    for (let e of cadena) {
        if (subcadena.includes(e)) {
            subcadena = subcadena.substring(subcadena.indexOf(e) + 1);
        }
        subcadena += e;
        if (subcadena.length > longitud) {
            longitud = subcadena.length;
        }
       
    }

    return longitud;
}

function subcadenasinrepetir(cadena) {
    let set = new Set();
    let inicio = 0;
    let maxlongitud = 0;

    for (let final = 0; final < cadena.length; final++){
        while (set.has(cadena[final])) {
            set.delete(cadena[inicio]);
            inicio ++;
        }
        set.add(cadena[final]);
        maxlongitud = Math.max(maxlongitud, final - inicio + 1);
    }
    return maxlongitud;
}

console.log(subcadena("abcabcbb"));
console.log(subcadenasinrepetir("abcabcbb"));