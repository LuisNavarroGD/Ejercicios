
/*
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Devuelve: 12
*/

function contarPalabrasfrase(frase) {
    let contador = 0;

    frase.forEach(e => {
        const palabras = e.split(' ')
        const numeropalabras = palabras.length;

        contador += numeropalabras;
    })

    return contador;
}

console.log(
  contarPalabrasfrase([
    "Hola, soy Víctor Robles WEB",
    "Me gusta programar",
    "Y soy desarrollador web",
  ])
);