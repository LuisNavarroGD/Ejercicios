/*
Dado un array de numeros, devolver el array sin elementos duplicados. Si hay un string eliminarlo del array.
*/

function eliminarDuplicados(elementos) {
    elementos = elementos.filter(elemento => {
        return typeof elemento === 'number';
    });

    return Array.from(new Set(elementos));

}

console.log(eliminarDuplicados(["uno", "dos", 1,2,2,3,3,4,4,5,6 ,'hola', 'hola']))