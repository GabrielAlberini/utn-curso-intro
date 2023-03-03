//Hola, soy un comentario de una linea

/*
  Hola
  soy 
  multi
  linea
*/
// Buenas prácticas para nombre de variables:
// Siempre comienzan en minúscula
// Nunca debe comenzar con un número (nos da error)
// Nunca debe comenzar con un .
// Javascript es cammelcase
// Los nombres de variables de más de una palbra no llevan espacio
// Los nombres de las variables van en ingles

// Nombre completo
var nombre = "Gabriel";
var apellido = "Alberini";
var lugrDondeNaci = "San justo";
var anioDeNacimiento = 1994;

// Palabras reservadas:  var - let - const
let name = "Fabian";
let lastName = "Javier";

const gustoDeHelado = "Kinoto al whisky";

// Multideclaración
let comidaFav, edad, hermanos;

// Inicialización
comidaFav = "Asadito";

let juegoFavorito = "domino";
console.log(juegoFavorito);

//Reasignar
juegoFavorito = "League of Legend";
console.log(juegoFavorito);

console.log(typeof juegoFavorito);

// Tipos de datos primitivos

// string: cadena de caracteres
// number: todos los numeros
// boolean: true | false
// undefined: aún no fue definido
// null: qué no tiene valor (es una acción tomada)
// NaN: not a number
// Symbol: tipo de dato único

//El dato es envuelto entre comillas dobles o simples
let variableString = "Hola soy un string";

//El valor puede ser cualquier clase de número
let variableNumber = 0.4;

//El valor es verdadero o falso (false | true)
let variableBooleano = true;
console.log(typeof variableBooleano);

//El tipo de dato undefined es que aún no fue definido
let variableUndefined = undefined;

//El tipo de dato null es intensionada
let variableNull = null;

//El tipo de dato NaN aparece cuando una operación no es un número
let viariableNan = NaN;

//--------------------------------------------------------------------

// Uso de comillas en tipo de dato string
let saludoAMascota = "Hola 'pepe'";
console.log(saludoAMascota);

//-----------------------------------------------------------------

//Operadores aritmeticos (+ - / *)
let numero1 = 5;
let numero2 = 10;

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 / numero2);
console.log(numero1 * numero2);

let resutado = numero1 * numero2;
console.log(resutado);

let peliFavorita = "Dogville";
let numeroNuevo = 5;

let resultadoNan = peliFavorita - numeroNuevo;
console.log(resultadoNan);

//Concatenación
let resultadoSuma = peliFavorita + numeroNuevo;
console.log(resultadoSuma);
console.log("Gabriel" + "Alberini");
//El espacio en blanco también debe estar explicito
console.log("Gabriel" + " " + "Alberini");
//Si "sumo" un número y un string, se concatenan
console.log(4 + "jaja ahora soy un string");

//Asignación (=)
let vaso = "Objeto para tomar agua";
let nuevaDefinicion =
  "Objeto cilindrico de diferentes materiales que sirve para contener algun líquido dentro";
vaso = nuevaDefinicion;
console.log(vaso);

//const no podemos reasignar
const plato = "Objeto para apoyar la comida";
const nuevaDefinicionPlato =
  "Objeto plano de diferentes materiales que sirve para comer";
// plato = nuevaDefinicionPlato;
// console.log(plato);

// reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar reasignar

//La consola es una herramienta que tenemos los desarrolladores para tener feedback de lo que sucede en Javascript

console.log("Informarción plana");
console.error("Hola, soy un error en la consola");
console.warn("Hola, ojito, es una advertencia");
console.info("Hola, acá tenes mas datita");

//------------------------------------------------------------------------------------
//Usando el prompt
// let nombreCompleto = prompt("Hola, cual es tu nombre completo?");
// console.log("Hola, tu nombres es:" + " " + nombreCompleto);

//Haciendo calculadora que reste con prompts
let numeroUno = prompt("Ingrese primer valor."); // "100"
let numeroDos = prompt("Ingrese segundo valor."); //"50"
console.log(numeroUno - numeroDos);
