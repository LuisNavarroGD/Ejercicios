/*
Dado un numero mostrar una escalera con escalones de "[-]" usando el numero para los niveles de la escalera

*/

function escalera(numero) {
  let escalera_completa = "";

    for (var nivel = 1; nivel <= numero; nivel++) {
        let escalones = "";
        for (let escalon = 1; escalon <= nivel; escalon++){
            escalones += "[-]"
        }

        escalera_completa += "Escalon " + nivel + ": " + escalones + '\n'
    }
    return escalera_completa
}

console.log(escalera(5))
