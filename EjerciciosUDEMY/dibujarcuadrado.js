/*
Dibujar un cuadrado hueco con asteriscos
*/

let numero = 6;

function lado(numero) {
  let lado = "";

  for (let i = 0; i < numero; i++) {
    lado += "*";
  }

  return lado;
}

function cuadrado(numero) {
  let dibujo = lado(numero) + "\n";
  let contenido = "";

    //Filas
  for (let i = 0; i < (numero-2); i++) {
    contenido = "*";

      //Contenido hueco
    for (let x = 0; x < (numero -2); x++) {
      contenido += " ";
    }

    contenido += "*";

      //Añadir filas al cuadrado
    dibujo += contenido + "\n";
  }

    // lado abajo
  dibujo += lado(numero);

  return dibujo;
}

console.log(cuadrado(numero));
