/*
Dado un array, dividirlo en tantos sub arrays como sea necesario basandonos en un numero que indique su tamaño
*/

function divideArray(arreglo_principal, numero_elementos) {
    
    let arreglos = [];

    for (let elemento of arreglo_principal) {
        
        let ultimo = arreglos[arreglos.length - 1]

        if (!ultimo || ultimo.length === numero_elementos) {
            arreglos.push([elemento]);
        } else {
            ultimo.push(elemento);
        }

        console.log(arreglos);
    }
}

divideArray([7,8,9,5,6],2)