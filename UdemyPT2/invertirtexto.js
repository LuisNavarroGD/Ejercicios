function invertir(texto)
{
    let textoinvertido = '';

    for (let i = texto.length-1; i >= 0; i--){
        textoinvertido += texto[i]
    }

    let boolean = textoinvertido === texto ? "Es palindromo ? Si" : "Es palindromo ? No";
    
    return boolean
}
 
console.log(invertir('ana'))