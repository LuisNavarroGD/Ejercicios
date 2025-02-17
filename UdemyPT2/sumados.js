/*
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
*/

function sumarDos(numeros, resultado) {
    
    for (let i = 0; i < numeros.length;i++) {
        
        let segundonumero = resultado - numeros[i];
        let primerNumero = numeros[i];

        if (numeros.includes(segundonumero) && segundonumero != numeros[i]) {
            
            let resultado = [primerNumero, segundonumero];

            return resultado
        }
    }
}

function sumarDos1(numeros, resultado) {
    for (let i = 0; i <= numeros.length; i++){
        for (let j = i + 1; j <= numeros.length; j++){
            if (numeros[i] + numeros[j] == resultado)
                resultado = numeros[i] + numeros[j];
                return resultado
        }
    }
 }

 console.log(sumarDos1([3, 7, 8, 2], 10));
 console.log(sumarDos([3,7,8,2],10))