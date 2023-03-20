// const frutas = ["regadera", "ruedas para la bici", "cuadro"];

// console.log("Entre a ML y me compre: " + frutas.join(", "));

// // === comparación estricta
// // == compara solo valor
// console.log(4 === "4");

// const pelicula = {
//   titulo: "El señor de los anillos: La comunidad del anillo",
//   director: "Peter Jackson",
//   genero: "Fantasía épica",
//   duracion: 178,
//   fechaLanzamiento: new Date("2001-12-19"),
//   actores: [
//     {
//       nombre: "Elijah Wood",
//       personaje: "Frodo Bolsón",
//     },
//     {
//       nombre: "Ian McKellen",
//       personaje: "Gandalf",
//     },
//     {
//       nombre: "Viggo Mortensen",
//       personaje: "Aragorn",
//     },
//   ],
//   presupuesto: {
//     moneda: "USD",
//     monto: 93000000,
//   },
//   taquilla: {
//     moneda: "USD",
//     monto: 871530324,
//   },
//   pais: "Nueva Zelanda",
//   idiomas: ["Inglés", "Sindarin", "Quenya"],
//   esTrilogia: true,
// };

// console.log(pelicula.actores[1]["nombre"]);

console.log(document);

const $container = document.getElementById("container");

const getPokemons = fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

getPokemons
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
    const pokemons = data.results;

    for (let i = 0; i < pokemons.length; i++) {
      $container.innerHTML += `<p>${pokemons[i].name}</p>`;
    }
  })
  .catch((error) => {
    console.log(error);
    $container.innerHTML = `<h2>Error de la API</h2>`;
  });
