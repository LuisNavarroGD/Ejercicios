/*
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
 
Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]
*/

function renombrarArchivos(archivos) {
    let resultado = []
    let contadorrepetidos = {}

    for (let i = 0; i < archivos.length; i++) {
        let contador = archivos[i]

        if (contadorrepetidos[contador]) {
            resultado.push(`${contador}(${contadorrepetidos[contador]})`);
            contadorrepetidos[contador]++;
        } else {
            resultado.push(contador);
            contadorrepetidos[contador] = 1;
        }
    }
    return resultado;
}

console.log(renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]));

function renombrarArchivos2(archivos) {
    return archivos.map((archivo, indice) => {
        let filtrados = archivos
          .slice(0, indice)
          .filter((ficheroFiltro) => archivo === ficheroFiltro);
        
    return filtrados.length === 0 ? archivo : `${archivo}(${filtrados.length})`;
    })
}
 console.log(renombrarArchivos2(["nombre", "apellido", "nombre", "nombre"]));