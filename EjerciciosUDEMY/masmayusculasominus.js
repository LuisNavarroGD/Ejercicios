/*
Dado un string, ponerlo completo en mayusculas o minusculas dependiendo si hay mas mayusculas o minusculas por defecto en el string
*/

let texto = "testestTEST";
let mayusculas = 0;
let minusculas = 0;
let resultado = "";

function mayusminus(texto) {
  for (let letra of texto) {
    if (/[A-Z]/.test(letra)) {
      mayusculas++;
    } else {
      minusculas++;
    }
  }
  if (mayusculas > minusculas) {
    resultado = texto.toUpperCase();
  } else {
    resultado = texto.toLowerCase();
  }

  return resultado;
}

console.log(mayusminus(texto));
