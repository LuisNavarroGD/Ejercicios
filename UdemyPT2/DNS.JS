/*
    Enunciado Ejercicio 10:
    Crea una función que reciba un DNI (8 números) y calcule la letra del DNI
     
    Es un proceso matemático facil que se basa en obtener el 
    resto de la división entera del número de DNI y el número 23. 
    Y con el resto se obtiene la letra, usandolo como posición o indice
    dentro de un array de letras.
     
    Este sería el array de letras:
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
     
    Ejemplos:
    generarLetraDNI("25439343");  // Resultado: 25439343D

    */

function generarLetraDNI() {
    //Definir letras de DNI
        const letras = [
          "T",
          "R",
          "W",
          "A",
          "G",
          "M",
          "Y",
          "F",
          "P",
          "D",
          "X",
          "B",
          "N",
          "J",
          "Z",
          "S",
          "Q",
          "V",
          "H",
          "L",
          "C",
          "K",
          "E",
          "T",
        ];
    // Convertir numero del dni a un entero
        numeroDNI = parseInt(numeroDNI)
    //Comprobar si el DNI es valido 8 cifras
    if (numeroDNI > 0 && numeroDNI < 999999999) {
        let resto = numeroDNI % 23;

        let letra = letras[resto]

        return numeroDNI.toString() + letra;
    }
    else {
        return 'DNI INVALIDO'
    }
}