/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

function Bisiestos(anio) {

    //Tener variable con limite de anios

    const limite = 30;

    //Bucle que se ejecuten tantas veces como anios limite tengamos
    for (let i = 0; i < limite; i++) {
        const fecha = new Date(anio).getMonth();

        if (fecha === 1) {
            console.log(anio)
        }
        anio ++
    }

    //Comprobar si el dia 29 de febrero existe en el anio actual
    const fecha = new Date(2023, 1, 29)
    console.log(fecha)

    //Si si existe mostrar anio visiesto
}
Bisiestos(2023)