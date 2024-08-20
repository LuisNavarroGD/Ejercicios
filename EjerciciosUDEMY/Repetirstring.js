/*
Dado un string y un numero repetir el string tantas veces como se indique
*/

function repetir(texto, numero) {
  let resultado = "";

  for (let i = 0; i < numero; i++) {
    resultado += texto;
  }

  return resultado;
}

console.log(repetir("Luis", 5));

//Funcion prototipo
String.prototype.repetir = function (numero) {
    let resultado = "";

    for (let i = 0; i < numero; i++) {
      resultado += this;
    }

    return resultado;
}

console.log("Luis".repetir(5))
