// En JavaScript, existen tres tipos principales de bucles: el bucle "for", el bucle "while" y el bucle "do-while". Cada uno de estos bucles se utiliza para iterar sobre una serie de elementos o para repetir una serie de instrucciones hasta que se cumpla una determinada condición.

// El bucle "for" se utiliza cuando se conoce de antemano el número de iteraciones que se deben realizar. Se compone de tres partes separadas por puntos y comas: una instrucción que se ejecuta antes de la primera iteración, una condición que se evalúa antes de cada iteración y una instrucción que se ejecuta al final de cada iteración.

// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

const edadMinima = 16;
const edadMaxima = 35;

const validarEdad = (edad, edadMinima, edadMaxima) => {
  if (edad >= edadMinima && edad <= edadMaxima) {
    return true;
  } else {
    return false;
  }
};

// console.log(validarEdad(16, edadMinima, edadMaxima)); //true
// console.log(validarEdad(36, edadMinima, edadMaxima)); // false

// let fecha = new Date();
// console.log(fecha);

// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

// const dejarAvanzar = () => {
//   let color = prompt("¿De que color está el semáforo?").toLowerCase();
//   console.log(color);

//   // if (color === "verde") {
//   //   console.log("Puede pasar");
//   // } else if (color === "rojo") {
//   //   console.log("No puede pasar");
//   // } else if (color === "amarillo") {
//   //   console.log("No puede pasar");
//   // } else {
//   //   console.log("Error: ingrese un color correcto");
//   // }

//   if (color === "rojo" || color === "amarillo") {
//     console.log("No puede pasar");
//   } else if (color === "verde") {
//     console.log("Puede pasar");
//   } else {
//     console.log("Escriba un color correcto");
//   }
// };

// dejarAvanzar();

//Ejercicio de Nahum

// let color = "VERDE";

// const puedeAvanzar = (colorSemaforo) => {
//   if (colorSemaforo == "verde") {
//     console.log(true);
//   } else if (colorSemaforo == "amarillo" || colorSemaforo === "rojo") {
//     console.log(false);
//   } else {
//     console.log("Error: color de semáforo inválido");
//   }
// };

// puedeAvanzar(color.toLowerCase());

//Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos,pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

// const puedeRenovarCarnet = (pasoTest, tieneMultasImpagas, pagoImpuestos) => {
//   if (pasoTest && !tieneMultasImpagas && pagoImpuestos) {
//     return true;
//   }
//   return false;
// };

// let pasoTest = true;
// let tieneMultasImpagas = false;
// let pagoImpuestos = true;

// puedeRenovarCarnet(pasoTest, tieneMultasImpagas, pagoImpuestos); //true - puede renovar

// En JavaScript, existen tres tipos principales de bucles: el bucle "for", el bucle "while" y el bucle "do-while". Cada uno de estos bucles se utiliza para iterar sobre una serie de elementos o para repetir una serie de instrucciones hasta que se cumpla una determinada condición.

// El bucle "for" se utiliza cuando se conoce de antemano el número de iteraciones que se deben realizar. Se compone de tres partes separadas por puntos y comas: una instrucción que se ejecuta antes de la primera iteración, una condición que se evalúa antes de cada iteración y una instrucción que se ejecuta al final de cada iteración.

//  variable de valor inicial | condición | instrucción

//cronometro del 0 al 10

//Paso 1: Declarar una variable local con un valor incial.
//Paso 2: Valida la condición, se es true ejecuta el código del ciclo
//Paso 3: Ejecuta la instrucción y modifica la variable inicial

for (let variable = 0; variable <= 10; variable = variable + 1) {
  // console.log(variable);
}

for (let index = 0; index <= 10; index++) {
  // console.log("Vuelta número " + index);
  // console.log(`Vuelta número ${index}`);
}

// Cuenta regresiva de 100 a 0
// Contador de 0 a 100 pero solo nombrando los numero pares
// Contador de 0 a 100 pero solo nombrando los numero impares

//Cuenta regresiva
for (let i = 100; i >= 0; i--) {
  // console.log(`Vuelta numero ${i}`);
}

//Contador de números pares e impares
for (let i = 0; i <= 100; i++) {
  //Número impares
  if (i % 2 !== 0) {
    // console.log(`El número ${i} es un número impar`);
  }
  //Numero pares
  // if (i % 2 === 0) {
  //   console.log(`El número ${i} es un número par`);
  // }
}

//for

//while

//do while

//valor inicial | condicion | instrucción
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
