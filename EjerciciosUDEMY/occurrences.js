/*
Can you write a function in JavaScript that takes in a sentence and a word as parameters and returns 
the count of the occurrences of the word in the given sentence? Assume the function is case-insensitive, 
meaning ‘the’ and ‘The’ are considered the same.
*/

function contarOcurrenciasPalabra(oracion, palabra) {
  // Convertir la oración y la palabra a minúsculas para una comparación insensible a mayúsculas
  const oracionMinuscula = oracion.toLowerCase();
  const palabraMinuscula = palabra.toLowerCase();

  // Dividir la oración en un array de palabras usando el espacio como delimitador
  const palabras = oracionMinuscula.split(" ");

  // Inicializar una variable de contador
  let conteo = 0;

  // Iterar a través de cada palabra en el array
  for (let i = 0; i < palabras.length; i++) {
    // Si la palabra actual coincide con la palabra objetivo, incrementar el contador
    if (palabras[i] === palabraMinuscula) {
      conteo++;
    }
  }

  // Devolver el conteo final
  return conteo;
}

console.log(
  contarOcurrenciasPalabra(
    "El hola rápido zorro marrón salta sobre el perro perezoso HOLA Hola",
    "hola"
  )
);
