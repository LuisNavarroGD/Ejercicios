/*
Dado un array de numeros devolver el array con sus numeros elevados al cuadrado
*/

function alcuadrado(numeros) {
  let numeros_cuadrados = numeros
    .filter((numeros) => typeof numeros === "number")
    .map((numeros) => Math.pow(numeros, 2));

  return numeros_cuadrados;
}

console.log(alcuadrado([12, 25, 34, 50, "hola", true]));
