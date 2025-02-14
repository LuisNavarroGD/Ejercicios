

const sumarpares = (numeros) => {

    let suma = 0;

    numeros.forEach(e => {
        if (e % 2 === 0) {
            suma += e
        }
    })

    return suma;
}

console.log(sumarpares([2,13,6,15]))