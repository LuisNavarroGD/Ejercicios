/*
Contar las veces que una palabra exactamente igual se repite
*/

function coincidencias(frase, busqueda) {
  let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, "");
    let resultado = 0;

  if (texto_limpio.includes(busqueda)) {
    let palabras = texto_limpio.split(" ");

    let mapa = {};

    for (let palabra of palabras) {
      if (mapa[palabra]) {
        mapa[palabra]++;
      } else {
        mapa[palabra] = 1;
      }
      }
      
    console.log(mapa)
    console.log(palabras)

      resultado = mapa[busqueda]

  } else {
      resultado = 0;
  }

  return resultado;
}

console.log("Numero de coincidencias: ",
    coincidencias("Hola, que tal, soy luis ma, navarro, arenas, navarro, luis ,navarro", "navarro"));
