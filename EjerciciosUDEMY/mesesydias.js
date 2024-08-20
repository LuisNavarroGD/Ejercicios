/*
Dado un numero calcular a cuantos dias, meses y años equivale
*/

function calcularDias(dias) {
    let anios = Math.floor(dias / 365);
    let dias_restantes = (dias % 365);
    let meses = Math.floor(dias_restantes / 30);
    dias_restantes = dias_restantes%30

    return `Años: ${anios},  ${meses} meses, ${dias_restantes} dias`
}


console.log(calcularDias(550))