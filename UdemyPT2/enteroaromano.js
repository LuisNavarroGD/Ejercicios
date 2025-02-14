/*
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano
 
Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
 
*/

function enteroARomano(numero) {
    
    // Variable para guardar string final
    let resultado = '';
    // Listado de numeros romanos
    const romanos = [
        'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
    ]

    const valoresDecimales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    for (let i = 0; i < valoresDecimales.length; i++){
        while (numero >= valoresDecimales[i]) {
            resultado += romanos[i]

            numero -= valoresDecimales[i]
        }
    }

    return resultado;
}

console.log(enteroARomano(123))