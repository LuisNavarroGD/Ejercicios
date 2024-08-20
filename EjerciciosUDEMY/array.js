const array = [
  [0, 1, 1, 1, 1, 0, 0],
  [1, 1, 0, 0, 0, 0, 0],
];

let unos = 0;
let ceros = 0;
let countOnes = 0;
let countZeros = 0;

for (let i = 0; i < array.length; i++) {
  let countOnes = 0;
  let countZeros = 0;

  // Puedes usar un for para contar los 1 y 0
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] === 1) {
      countOnes++;
    } else if (array[i][j] === 0) {
      countZeros++;
    }
  }

  if (countOnes > countZeros) {
    unos++;
  } else {
    ceros++;
  }

  // Imprimir resultados
  console.log(`Subarreglo ${i + 1}:`);
  console.log(`Cantidad de 1's: ${countOnes}`);
  console.log(`Cantidad de 0's: ${countZeros}`);

  console.log(`Cantidad de llaves 0's: ${ceros}`);
  console.log(`Cantidad de llaves 1's: ${unos}`);
}
