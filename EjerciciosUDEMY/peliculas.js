/*
Dado un array de objetos de peliculas (titulo, director, vista) mostrar cuales has visto y cuales no
*/
const col_peliculas = [
  {
    titulo: "Batman dark knight",
    director: "Christopher Nolan",
    vista: true,
  },
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    vista: true,
  },
  {
    titulo: "Sangre por sangre",
    director: "Taylor Hackford",
    vista: false,
  },
  {
    titulo: "Doctor doolitle",
    director: "Don comicon",
    vista: false,
  },
];


function peliculasvistas(peliculas) {
    for (let pelicula of peliculas) {
        let mostrar = `${pelicula.titulo} de ${pelicula.director}`;

        if (pelicula.vista) {
          console.log("Ya has visto: ", mostrar);
        } else {
          console.log("No has visto: ", mostrar);
        }
    }

    return peliculas
}

peliculasvistas(col_peliculas)



