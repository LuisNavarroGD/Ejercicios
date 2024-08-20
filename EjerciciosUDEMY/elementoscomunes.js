/*
Dados 2 arrays, devolver array con solo los elementos comunes entre ambos
*/


function elementoscomunes(array1, array2) {

    const filtrado = array1.filter(elemento => array2.includes(elemento))

    return filtrado;

}

console.log(elementoscomunes([4, 5, 6, 7], [5, 6, 9, 8]))
console.log(elementoscomunes(["Luis", "Panbcho", "Rodomiro"], ["Luis", "Juan", "Rodomiro"]))




