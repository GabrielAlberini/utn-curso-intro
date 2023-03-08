/*

Los operadores de comparación devuelven un valor booleano (true o false) según si la comparación es verdadera o falsa.

< : menor que.
> : mayor que.
<=: menor o igual que.
>=: mayor o igual que.
==: igual que (no estricta).
===: igual que (estricta).
!=: no igual que (no estricta).
!==: no igual que (estricta).

Los operadores lógicos en JavaScript se utilizan para realizar comparaciones lógicas entre valores o expresiones.

Los operadores lógicos más comunes en JavaScript son:

&& (AND lógico): devuelve true si ambas expresiones que se comparan son verdaderas, de lo contrario devuelve false.

|| (OR lógico): devuelve true si al menos una de las expresiones que se comparan es verdadera, de lo contrario devuelve false.

! (NOT lógico): invierte el valor de una expresión booleana. Si la expresión es verdadera, devuelve false, y si la expresión es falsa, devuelve true.

*/

// Operador de asignación  =
// Operadores aritméticos + - * / %
// Operadores de comparación

// < : menor que
// > : mayor que
// <=: menor o igual que
// >=: mayor o igual que
// ==: igual que (no estricta)
// ===: igual que (estricta)
// !=: no igual que (no estricta)
// !==: no igual que (estricta)

//SIEMPRE un operador de comparación nos devolverá un booleano y siempre
//se ejecuta la comparación de izq a der

// menor que
// console.log(3 < 5);

// //mayor que
// console.log(3 > 5);

// //menor o igual que
// console.log(3 <= 3);

// //mayor o igual que
// console.log(4 >= 5);

// //igual que (solo compara el valor)
// console.log(4 == "4");

// //igual que de forma estricta (valor y el tipo de dato sea igual)
// console.log(4 === "4");

// //diferente que
// console.log(4 != 4);

// //diferente de forma estricta
// console.log(4 !== "4");

//Condicionales en Javascript

// let edad = 16;
// // palabra reservada | condición (tiene que ser true) | instrucción

// if (edad >= 18) {
//   console.log("Dale papa, pasa, sos mayor de edad.");
// } else if (edad === 17) {
//   console.log("Esta bien, si venis con un mayor, pasa");
// } else {
//   console.log("No, sos muy chico");
// }

// const validarEdad = (edad, nombre = "fulano") => {
//   if (edad >= 18) {
//     console.log(`${nombre} podes ingresar`);
//   } else {
//     console.log(`${nombre} no podes ingresar`);
//   }
// };

// validarEdad(28, "Gabriel");
// validarEdad(14);

// Ejercicios del 6/3/2023

//Crear una función sumar que tome como argumentos dos números y devuelva
//la suma de ellos

// const sumar = (num1, num2) => {
//   let resultado = num1 + num2;
//   console.log(resultado);
// };

// sumar(4, 3);

//Crear una función gritar que tome como argumento un string y devuelva el
//mismo string con un signo de exclamación al principio y al final del mismo

// const gritar = (frase) => {
//   let grito = `¡¡¡¡${frase}!!!!`;
//   // console.log(grito);
// };

// gritar("¿Hola, me escuchan?");

// Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear
// una función saludarGritando que tome como argumentos un saludo y devuelva el mismo saludo con signos de exclamación.

// const obtenerNombreCompleto = (nombre, apellido) => {
//   let nombreCompleto = nombre + " " + apellido;
//   return nombreCompleto;
// };

// const saludo = (nombreCompleto) => {
//   let saludo = `Hola, ${nombreCompleto}`;
//   return saludo;
// };

// const saludarFuerte = (saludo) => {
//   let grito = `¡¡¡¡${saludo}!!!!`;
//   console.log(grito);
// };

// const nombreGenerado = obtenerNombreCompleto("federico", "Alberini");
// const saludoGenerado = saludo(nombreGenerado);
// saludarFuerte(saludoGenerado);

// Operador de asignación  =
// Operadores aritméticos + - * / %
// Operadores de comparación

let edad = 4;

let suma = 4 + 3;

let validarNumero = 4 < 3; //Siempre devuelve un booleano

//Operadores lógicos
// OR ||
// AND &&

//                      true  Y  true
let validarCondicion = 5 > 4 && 7 < 10;

// console.log(validarCondicion);

//Paso 1: comprobar si la condición de la izq es true
//Paso 2: comprobar si la condición de la der es true
//Paso 3: El operador se ejecuta y devuelve true si las dos partes dan true

// let clima = "soleado";
// let lluvia = true;

// let validarClima = clima === "soleado" && lluvia === false;

// console.log(validarClima);

const testearLluvia = (clima, lluvia) => {
  if (clima === "soleado" && lluvia === false) {
    console.log("Podes salir tranquilo");
  } else {
    console.log("Lleva paraguas porque está lloviendo");
  }
};

testearLluvia("soleado", true);

let temperatura = 12;
let lluvia = false;

//                         true              false
let validarDiaFeo = temperatura <= 15 || lluvia === true;

if (validarDiaFeo === true) {
  console.log("Es un dia feo, llevate abrigo o paraguas por las dudas");
} else {
  console.log("Sali tranqui es un dia divino");
}

//Paso 1: comprobar si la condición de la izq es true
//Paso 2: comprobar si la condición de la der es true
//Paso 3: El operador se ejecuta y devuelve true si UNA de las partes por lo menmos da true

// const permitirEntrada = (edad, entrada) => {
//   if (edad >= 18 && entrada === true) {
//     console.log("Podes pasar");
//   } else {
//     console.log("No podes pasar");
//   }
// };

// permitirEntrada(14, true);

// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización

const puedeVerPelicula = (edad, tieneAutorización) => {
  if (edad >= 15 || tieneAutorización === true) {
    console.log("Podés entrar");
  } else {
    console.log("No podés entrar");
  }
};

//tiene 15 años o más, o tiene autorización (dejarlo pasar)
puedeVerPelicula(15, true);
puedeVerPelicula(15, false);
