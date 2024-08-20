// 2. cuantas veces se repite un caracter

let text = "sadsadsafsddcdvxcgdfsd"
let caracter = "a"

let i = 0;

for (let letra of text)
{
    if (letra == caracter)
    {
        i++;
    }
}

console.log(i)