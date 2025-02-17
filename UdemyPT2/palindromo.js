function palindromo(palabra) {
    
    let letras = []

    for (let i = 0; i < palabra.length; i++){
        letras.push(palabra[i])
    }


    let letrasinvertidas = []
    for (let i = letras.length - 1; i >= 0; i--){
        letrasinvertidas.push(letras[i]);
    }

    let palabraInvertida = "";
    for (let i = 0; i < letrasinvertidas.length; i++){
        palabraInvertida += letrasinvertidas[i]
    }

    return (palabra === palabraInvertida);
}

console.log(palindromo('luis'))