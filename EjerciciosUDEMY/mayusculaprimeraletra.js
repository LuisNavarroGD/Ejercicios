/*
Dada una cadena de texto poner en mayuscula la primera letra de cada palabra
*/

function mayuscula(texto) {
  let resultado = "";

  for (let letra in texto) {
    if (texto[letra - 1] === " " || parseInt(letra) === 0) {
      resultado += texto[letra].toUpperCase();
    } else {
      resultado += texto[letra];
    }
  }

  return resultado;
}

console.log(mayuscula("hola hola hola hoolahola"));

function enMayuscula(texto) {
  let palabras = [];

  for (let palabra of texto.split(" ")) {
    palabras.push(palabra[0].toUpperCase() + palabra.slice(1));
  }

  return palabras.join(" ");
}

console.log(enMayuscula("hola hola hola hoolahola"));
