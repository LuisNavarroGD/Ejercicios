/*
Dado un array o un objeto de superheroes haz un programa que pueda mostrar la información de un superheroe y añade una capacidad de buscar la información
de varios superheroes a la vez

Salida:
Nombre real: Tony Stark
Poderes: Tecnologia avanzada, Movilidad aerea
Equipo: Los vengadores

Ejemplo 2: 
mostrarInformaciónsuperheroes([array de nombres])

Salida: Muestra la información de todos los superheroes
*/

// Crear array de objetos de superheroes

const superheroes = {
  "Iron Man": {
    nombre: "Tony Stark",
    poderes: ["tecnologia"],
    equipo: "avengers",
  },
  "Hulk": {
    nombre: "BRUCE",
    poderes: ["FUERZA"],
    equipo: "avengers",
  },
  "Spiderman": {
    nombre: "PITER",
    poderes: ["ARAÑAS","telarañas"],
    equipo: "avengers",
  },
};

function mostrarInformacionsuperheroe(name) {
    console.log("##########" + " " + name + " " + "##########");

  // Comprobar si el superheroe existe dentro del objeto
  if (name in superheroes) {
    const informacion = superheroes[name];

      //Mostrar la info
    console.log(`Nombre real:  ${informacion.nombre}`);
    console.log(`Poderes:  ${informacion.poderes.join(', ')}`);
    console.log(`Equipo:  ${informacion.equipo}`);
  } else {
    console.log("No existe ese superheroe: " + name);
  }
  //Conseguir la información del superheroes

  //Mostrar la información
}

mostrarInformacionsuperheroe("Spiderman");

const mostrarInformacionsuperheroes = (names) => {
    //Recorrer todos los nombres
    names.forEach(
        nombre => {
            mostrarInformacionsuperheroe(nombre);
        }
    )
    //Comprobar si existen cada nombre en cada iteración

    //Mostrar la información (usar anterior)
}

mostrarInformacionsuperheroes(["Iron Man", "Spiderman","Hulk", "THOR"])
