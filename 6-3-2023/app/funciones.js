let $titulo = document.getElementById("titulo");

//Funciones
//Sintaxis
// palabra reservada | nombre de la función | parametros | scope

// Paso 1: Declarar la función
function saludar() {
  $titulo.innerHTML = "Hola! mucho gusto desde Js.";
  //Scope de función no permite que sus datos sean públicos
  // var verificacionDeScope = "Hola desde dentro de la función";
  console.log(verificacionDeScope);
}

//Paso 2: Invocar la función
// saludar();

//console.log(verificacionDeScope); //Nos da error porque esa variable solo existe en la función.

//Arrow function
//Parametros son variables que se usan internamente dentro de la función
// const saludarConNombre = (nombre, apellido) => {
//   console.log(`Hola, ${nombre} ${apellido}, desde dentro de la función`);
// };

// saludarConNombre("Ricardo", "Fort");

// const saludarConNombre = () => {
//   let primerNombre = prompt("¿cual es su primer nombre?");
//   console.log(`Hola ${primerNombre}, desde dentro de la funcion`);
// };

//Reutilizar funciones
// saludarConNombre();
// saludarConNombre();

const crearNombreCompleto = (nombre, apellido) => {
  //Retornar es poder usar un valor fuera de la función (recordar el funcionamiento del scope)
  return `${nombre} ${apellido}`;
};

let nombreCompleto = crearNombreCompleto("gabriel", "alberini");
console.log(nombreCompleto);

const renderizarEnHtml = () => {
  $titulo.innerHTML = nombreCompleto;
};

renderizarEnHtml();

//La función retorna algo y el procedimiento hace algo
