//Invertir una cadena

let texto = "pato";
let Resultado = "";

//Opcion 1
for (let letra of texto)
    {
        Resultado = letra + Resultado;
    }
    
    console.log(Resultado);

//Opcion2
function invertir(texto) {
    return texto.split('').reverse().join('')
}

//Opcion3
    for (let i = texto.length - 1; i >= 0; i--)
    {
        Resultado += texto[i];
}
    
console.log(Resultado)
console.log(invertir(texto))

   
    