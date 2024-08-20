/*

Un grupo de programadores se une a un concurso de resolución de código donde se les instruye resolver problemas específicos. Se necesita implementar una función que devuelva el número de problemas que los equipo es capaz de resolver.
--------------------------------------

Objetivo:
 - Definir una función llamada getSolvedChallenges() cuya entrada sea un array de arrays y cuya salida sea un número entero.
    Ejemplo:
    Entrada:
      [
        [1,1,0,1] 1,
        [0,1,1,0,1,0] 1 ,
        [0,0,0,1] 0
      ]
    Salida:
        2
 
 
Reglas:
 - La longitud del array padre indica el número de problemas a resolver.
 - La longitud de cada array hijo indica el número de programadores intentando resolver un problema en particular.
 - Los valores de cada elemento en el array hijo indican con un 1 si el programador puede resolver el problema y con un 0 si el programador no puede.
 - Si al menos la mitad de los programadores sabe cómo resolver el problema, el problema debe considerarse resoluble por el equipo.
 - La salida de la función debe devolver el número de problemas que el equipo puede resolver.
 - La capacidad del equipo solo puede intentar resolver los primeros 20 problemas, por lo que solo se deben considerar los primeros 20 problemas.

 - En el ejemplo dado, la entrada indica que hay 3 problemas por resolver. Para el primer problema, el equipo está formado por 4 programadores y solo 3 de los 4 programadores saben cómo resolver el problema, por lo que el problema es resoluble.
   Para el segundo problema, el equipo está formado por 6 programadores y solo 3 de los 6 programadores saben cómo resolver el problema; al menos la mitad de ellos sabe cómo resolverlo, por lo que el problema es resoluble.
   Para el tercer problema, solo 1 de los 4 programadores sabe cómo resolver el problema, por lo que el problema no debe contarse como resoluble.
   Como solo 2 de los 3 problemas son resolubles, el valor de retorno debe ser 2.
*/

/* 
 - Definir una función llamada getSolvedChallenges() cuya entrada sea un array de arrays y cuya salida sea un número entero.
    Ejemplo:
    Entrada:
      [
        [1,1,0,1],
        [0,1,1,0,1,0],
        [0,0,0,1]
      ]
    Salida:
        2
*/

const MAX_PROBLEMS = 20;

function getSolvedChallenges(inArray) {
  let resolvedCount = 0;

  // Limitar la evaluación a los primeros 20 problemas
  const problemsToEvaluate = inArray.slice(0, MAX_PROBLEMS);

  for (let i = 0; i < problemsToEvaluate.length; i++) {
    let problem = problemsToEvaluate[i];
    let countOnes = 0;

    // Contar cuántos programadores pueden resolver el problema
    for (let j = 0; j < problem.length; j++) {
      if (problem[j] === 1) {
        countOnes++;
      }
    }

    // Si al menos la mitad de los programadores pueden resolverlo, se considera resoluble
    if (countOnes >= Math.ceil(problem.length / 2)) {
      resolvedCount++;
    }
  }

  return resolvedCount;
}

// Ejemplo de uso:
console.log(
  getSolvedChallenges([
    [1, 1, 0, 1],
    [0, 1, 1, 0, 1, 0],
    [0, 0, 0, 1],
  ])
); // Debería devolver 2

console.log(
  getSolvedChallenges([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
  ])
);
