/*
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Víctor Robles WEB');
 
**********
* Hola   *
* soy    *
* Víctor *
* Robles *
* WEB    *
**********
*/

const mostrarTextoCaja = (frase) => {
    const palabras = frase.split(' ')
    let longitudMaxima = 0;

    palabras.forEach(palabra => {
        longitudMaxima = Math.max(longitudMaxima, palabra.length)
    });

    const huecospordefecto = 4;

    const asteriscostotales = longitudMaxima + huecospordefecto;
    console.log("*".repeat(asteriscostotales));

    palabras.forEach(e => {
        const espacios = ' '.repeat(longitudMaxima - e.length)
        console.log(`* ${e}${espacios} *`);
    })

    console.log('*'.repeat(asteriscostotales))


}

mostrarTextoCaja('Hola soy luis')