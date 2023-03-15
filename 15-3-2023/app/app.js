// Un objeto en JavaScript es una estructura de datos que te permite almacenar y organizar información de diferentes tipos. Puedes pensar en un objeto como una caja que puede contener otras cajas más pequeñas, y cada caja pequeña puede tener diferentes valores y propiedades.

// array => []
// objeto => {}

const alumno = ["gabriel", "alberini", 28, "matemática"];

// Objeto en JS es la representación de un "objeto real" con claves/valores

//Un objeto tiene propiedades => clave/valor
const celular = {
  pantalla: "táctil",
  camaras: 3,
  color: "negro",
  resistentAlAgua: false,
  bateria: "5000 mAh",
};

// console.log(celular);

//Diferencia entre array y objetos

const productos = ["mochila", "caña de pesca", "televisor"];

// const mochila = ["azul", "grande", "muchos cierres"];

// console.log(mochila);

//Notacion de punto / por punto
// console.log(`La mochila tiene ${mochila.cierres} cierres.`);

// console.log("Mi mochila favorita es la mochila amarilla");

// console.log(`Mi mochila favorita es ${mochila.colores[2]}`);

//Notación de corchetes
// console.log(mochila.cierres);

// let propiedad = "colores";

// let telaDeNochila = mochila[propiedad]; // mochila["algodón"] mochila["colores"]

// console.log(telaDeNochila);

const mochila = {
  tamanio: "grande",
  cierres: 5,
  bolsillos: 4,
  tela: "naylon",
  colores: ["amarilla", "azul", "roja"],
};

// console.log(mochila.brillo);
// console.log(mochila.elastizada);

let probarExistenciaDeProp = "colores";

//[] es para preguntar si existe esa propiedad de forma dinámica (usando una varible) y el punto es para llamar una propiedad existente

//Formas de leer propiedades (ver valor de la key/clave)
console.log(mochila[probarExistenciaDeProp]); //mochilla["colores"]
console.log(mochila.probarExistenciaDeProp);

//Agregar propiedades a un objeto:
mochila.brillo = true;
console.log(mochila);

//key:value

mochila["tiene rueditas"] = false;
//mochila.tieneRueditas = false

//Borrar una propiedad
delete mochila.colores;
console.log(mochila);

//Modificar propiedad
mochila.tamanio = "pequeño";
console.log(mochila);

//Verificar si existe propiedad o no
// let verificarPropiedad = mochila.hasOwnProperty("tamanio");
// console.log(mochila.hasOwnProperty("tamanio"));

// const bicicleta = {
//   cantDeRuerdas: 2,
//   color: "negro",
//   portaequipaje: "si tiene",
// };

// const validarPropiedad = (obj, prop) => {
//   if (obj[prop]) {
//     console.log("Tiene Propiedad");
//   } else {
//     console.log("No tiene propiedad");
//   }
// };

// validarPropiedad(bicicleta, "manubrio de carrera");
// validarPropiedad(bicicleta, "color");

// Hacer una función que cree un objeto llamado alumno con las propiedades "nombre" y "edad" y retorne el mismo.

// const crearAlumno = (nombre, edad) => {
//   const alumno = {
//     nombre: nombre,
//     edad: edad,
//   };

//   return alumno;
// };

// const listadoDeAlumnosNuevos = [];

// const agregarNuevoAlumno = (alumnoNuevo) => {
//   listadoDeAlumnosNuevos.push(alumnoNuevo);
//   console.log(listadoDeAlumnosNuevos);
// };

// // let nuevoAlumno = crearAlumno("Graciela", 51);
// // console.log(nuevoAlumno);

// agregarNuevoAlumno(crearAlumno("Ulises", 26));
// agregarNuevoAlumno(crearAlumno("Tiziano", 19));

// React / Angular / Vue => Frameworks de Javascript (ambiente de trabajo)

//2 - Crea una función que acepte como parámetro un objeto que represente una mascota, con propiedades como "nombre", "edad", "tipo", etc. La función debe retornar un mensaje que describa la mascota de manera personalizada. Por ejemplo, si el objeto es { nombre: "Fido", edad: 3, tipo: "perro" }, la función debe retornar "Fido es un perro de 3 años de edad".

const mascotaUno = {
  nombre: "Matias",
  edad: 6,
  tipo: "perro",
};

const mascotaDos = {
  nombre: "Ulises",
  edad: 14,
  tipo: "gato",
};

const mascotaTres = {
  nombre: "Julian",
  edad: 10,
  tipo: "tortuga",
};

const mostrarMascota = (obj) => {
  //"Fido es un perro de 3 años de edad".
  console.log(`${obj.nombre} es un ${obj.tipo} de ${obj.edad} años de edad`);
};

mostrarMascota(mascotaUno);
mostrarMascota(mascotaDos);
mostrarMascota(mascotaTres);
