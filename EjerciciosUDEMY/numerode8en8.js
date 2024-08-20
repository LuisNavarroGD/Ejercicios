/*
Dado un numero mostrar todos los numeros desde el 0 y que vaya de 8 en 8
*/

function ochoenocho(numero) {
  let resultado = `--- Del ${numero} al 0 --- \n`;

  while (numero > 0) {
    resultado += `- No.${numero} \n`;
    numero -= 8;
    }
    
    if (numero <= 0) {
          resultado += "- No.0\n";
    }

  resultado += "--- FIN ---";

  return resultado;
}

console.log(ochoenocho(100));
