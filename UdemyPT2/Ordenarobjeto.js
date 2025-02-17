/*
Crea una función que ordene un array de objetos en base a las propiedades
que le pase por parametro.
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
 
Ejemplos:
ordenarObjetos(usuarios, "edad");
*/

function ordenarObjetos(datos, propiedad) {
    return datos.slice().sort((a, b) => {
        if (a[propiedad] > b[propiedad]) return 1;
        if (a[propiedad] < b[propiedad]) return -1;
        return 0;
    })
}

const usuarios = [
  { nombre: "Antonio", edad: 20 },
  { nombre: "Juan", edad: 23 },
  { nombre: "Pepe", edad: 12 },
  { nombre: "Raul", edad: 28 },
  { nombre: "Paco", edad: 38 },
  { nombre: "Jason", edad: 56 },
];

console.log(ordenarObjetos(usuarios, "edad"));