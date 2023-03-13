//Array en Javascript

//Tipos de datos primitivos => hacen referencia al valor que representan

let oracion = "me gusta el arroz con leche"; //string / cadena de caracteres
let numero = 2; //number

//undefined, null, boolean, NaN //operaciones lógicas

//Tipo de dato compuesto/complejo
//Array => colección de datos/lista

let alumnoUno = "Graciela Baez";
let alumnoDos = "Fabian Javier";

//Sintaxis

// let listaDeAlumnos = ["Gabriel", "María", "Facundo", "Laura"];
// console.log(listaDeAlumnos);

// let arrayDeDatosDiferentes = [undefined, null, NaN, [1, 2], { nombre: "pepe" }];
// console.log(arrayDeDatosDiferentes);

//Posición y elemento:

//Posición: Es la ubicación del dato en el array => en javascript se comienza a contar desde la posición 0

//Elemento: Es la representación del dato, ocupa un lugar único.

//Length => gallina tiene huevo

//length => longitud / cuantos elementos tiene un array

let frutas = ["banana", "kiwi", "naranja"];
// console.log(frutas.length);

//Diferencia entre propiedad y método / el primero es solo de lectura el segundo modifica
// let frase = "HOLAAAAAAA";
// console.log(frase.toLowerCase());

const peliculas = ["Mi pobre angelito", "Titanic"];

//Ingresar a valores
let titanic = peliculas[1];
// console.log(titanic);

//Agregar un elemento en una posición determinada
// peliculas[2] = "Cenicienta";
// console.log(peliculas);

// peliculas[3] = "Argentina, 1985";
// console.log(peliculas);

// peliculas[4] = undefined;
// console.log(peliculas);

//Con const no se puede reasignar
const pruebaUno = "Hola soy un string";
// pruebaUno = 43;

//En array se puede modificar el contenido utilizando const, no genera problemas

//Métodos en array

// const comidas = ["Canelones", "Ñoquis"];
// console.log(comidas);

//push => agregar en la última posición / empuja al final de la lista un nuevo valor que se agrega
// comidas.push("Milanesa");
// console.log(comidas);

// pop => elimina elemento en la última posición
// comidas.pop();
// console.log(comidas);

// unshift => añade elemento en la primer posición
// comidas.unshift("Asado");
// console.log(comidas);

// shift => elimina elemento en la primer posición
// comidas.shift();
// console.log(comidas);

const generosMusicales = ["Jazz", "Cumbia", "Tango", "Reggaeton", "Blues"];

generosMusicales.push("Música clasica");

generosMusicales.push("Flamenco");

generosMusicales.push("Merengue");

console.log(generosMusicales.length);

//Bucle en array

for (let index = 0; index <= generosMusicales.length; index++) {
  console.log(
    `En la posición ${index + 1} se encuentra ${generosMusicales[index]}`
  );
}

// Escribe una función que tome un array y un elemento como argumentos y devuelva la posición del elemento en el array. Si el elemento no está en el array, la función debería devolver -1.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numerosDos = [11, 12];

// const buscarNumero = (array, numero) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === numero) {
//       console.log(1);
//     }
//   }
//   console.log(-1);
// };

// buscarNumero(numeros, 5);
// buscarNumero(numerosDos, 13);

//Escribe una función que tome un array de números como argumento y devuelva la suma de todos los elementos.

// const sumarElementos = () => {};

// sumarElementos(numeros);

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.

// const buscarMasGrande = (array) => {};
// buscarMasGrande(numeros);

// const buscarMasGrande = (array) => {
//   let numeroMasGrande = array[0];

//   for (i = 0; i < array.length; i++) {
//     if (array[i] > numeroMasGrande) {
//       numeroMasGrande = array[i];
//     }
//   }
//   console.log(numeroMasGrande);
//   return numeroMasGrande;
// };

// buscarMasGrande(numeros);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumarElementos = (array) => {
  let suma = 0;

  for (let i = 0; i < array.length; i = i + 1) {
    suma += array[i];
  }

  console.log(suma);
  return suma;
};

sumarElementos(numeros);
