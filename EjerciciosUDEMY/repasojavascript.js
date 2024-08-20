//alert("Hola soy Luis Ma")

let nombre = "luis"

const appelido = "navarro"
const altura = 1.80;

console.log(nombre + " " + appelido + " " + altura)

let concat = nombre + " " + appelido + " " + "mido: " + altura

let datos = document.querySelector(".datos")
datos.innerHTML =
    `
    <hr>
    <h1> Hola soy ${nombre} ${appelido} </h1>
    <h2> Mi altura es ${altura} </h2>
    <h3> Mi nombre completo es: ${concat} </h3>
    `

if (altura >= 1.91) {
        datos.innerHTML += "<h1>Eres una persona alta</h1>"
}
else {
    datos.innerHTML += "<h1>Te falta altura</h1>"
}

  
//Bucles
for (let year = 2000; year <= 2023; year++){
    datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`
}

//Arrays
let nombres = ["Luis", "Victor", "Juancho"]

let divNombres = document.querySelector('.nombres')

//divNombres.innerHTML = nombres[0]
divNombres.innerHTML = "<h1> Listado de nombres</h1> <ul>";

/* nombres.forEach(nombre => {
    divNombres.innerHTML += "<li>" + nombre + "</li>"
}) */

for (let nombre of nombres) {
        divNombres.innerHTML += "<li>" + nombre + "</li>";
    }

divNombres.innerHTML += "</ul>"

const miInformacion = (nombre, altura) => {
    let misDatos = `
    <hr>
    <h1> Hola soy ${nombre} ${appelido} </h1>
    <h2> Mi altura es ${altura} </h2>
    <h3> Mi nombre completo es: ${concat} </h3>
    `;

    return misDatos
}

console.log(miInformacion)

const imprimir = () => {
    let datos = document.querySelector(".datos")
    datos.innerHTML += miInformacion("LUIS PACO", 191)
}

imprimir();



    