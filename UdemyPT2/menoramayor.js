/*
Dada un array de palabras, crear una función que lo devuelva ordenado
por la longitud de sus palabras de menor a mayor
*/

function menoramayor(palabras) {
    return palabras.sort((a, b) => a.length - b.length);
}

console.log(menoramayor([
  "Hola",
  "soy",
  "Víctor Robles",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
  "a",
  "estudiar",
  "ahora"
]));