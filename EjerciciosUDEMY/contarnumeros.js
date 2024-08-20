// 5 contar numeros

let text = "dsfads54645656484765acaxvxcdsffsd";

let i = 0;
for (let letra of text)
{
    if (!isNaN(parseInt(letra)))
    {
        i++;
    }
}

console.log(i)
