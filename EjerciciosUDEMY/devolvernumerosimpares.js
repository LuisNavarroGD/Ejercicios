/*
Dados dos numeros devolver los numeros IMPARES hay entre ellos

Ejemplo: (1,100) Devuelve 49
*/

let numero = 1;
const iteracion = 100;

function numerosImpares(numero, iteracion) {
  let impares = [];
  let contador = 0;

  while (numero < iteracion) {
    if (numero % 2 !== 0) {
      impares.push(numero);
    }
    numero++;
    contador++;
  }

  console.log(impares + "\n");
  return contador;
}
console.log("Numeros impares:\n", numerosImpares(numero, iteracion));

/*
function impares(num1, num2) {
    let contador = 0;

    while (num1 < num2) {

        if (num1 % 2 != 0) contador++;

        num1++;
    }

    return contador;
}

console.log("Numeros impares: ", impares(1, 100))
*/
