//3. Distancia de Hamming

let text1 = "patitosw"
let text2 = "paratosa"

let distance = 0;

if (text1.length != text2.length) {
    console.log("Las cadenas no tienen la misma longitud");
} else {
    for (let i = 0; i < text1.length; i++) {
        if (text1[i] != text2[i]) {
            distance++;
        }
    }
}
console.log("La distancia de Hamming es: " + distance);

/*
if (text1.length == text2.length) {
    for (let i = 0; i < text1.length; i++) {
        if (text1[i] != text2[i]) {
            distance++;
        }
    }
} else {
    console.log("Las cadenas no tienen la misma longitud");
}

console.log("La distancia de Hamming es: " + distance); 
*/