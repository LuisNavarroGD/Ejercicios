/* 
Crea una función que reciba un numero y me genere una matriz
con el numero de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);
 
Devuelve: 
[
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
]
*/

function generarMatriz(numero) {
 
    let matriz = []

    let numeroactual = 1;

    for (let i = 0; i < numero; i++){

        matriz.push([]);

        
        for (let k = 0; k < numero; k++){
            matriz[i].push(numeroactual++)
        }
        
    }
    
    return matriz;
}


console.log(generarMatriz(4))