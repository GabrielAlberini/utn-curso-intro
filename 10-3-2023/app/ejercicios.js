// Escribir una función que tome una cadena de texto y un número entero n como argumentos y genere una cadena de texto que contenga la cadena original repetida n veces utilizando un bucle "for".

// Escribir un programa que calcule la suma de los números pares del 1 al 10 utilizando un bucle "for".
/*
var sum = 0;
for (var i = 2; i <= 100; i += 2) {
  sum += i;
}
console.log(sum);
*/

// Escribir una función que tome un número entero n como argumento y genere una tabla de multiplicar del 1 al 10 para n utilizando un bucle "for".
/*
function tablaMultiplicar(n) {
  for (var i = 1; i <= 10; i++) {
    console.log(n + ' x ' + i + ' = ' + (n * i));
  }
}
*/

// Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

let playlistName = prompt("Ingrese el nombre de la playlist:");
let totalSongs = parseInt(
  prompt("Ingrese la cantidad de canciones a agregar:")
);
let playlist = [];

for (let i = 0; i < totalSongs; i++) {
  let songName = prompt(`Ingrese el nombre de la canción ${i + 1}:`);
  playlist.push(songName);
  console.log(
    `Canción "${songName}" agregada. Quedan ${
      totalSongs - (i + 1)
    } canciones por agregar.`
  );
  console.log(`Playlist actual: ${playlist.join(", ")}`);
}

console.log(
  `La playlist "${playlistName}" se creó con las siguientes canciones: ${playlist.join(
    ", "
  )}`
);

const perros = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg",
    alt: "perro 1",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2020/12/21/08/36/dog-5849152_1280.jpg",
    alt: "perro 2",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351_1280.jpg",
    alt: "perro 3",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2017/01/04/02/38/dog-1951211_1280.jpg",
    alt: "perro 4",
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2014/07/31/23/11/dog-407125_1280.jpg",
    alt: "perro 5",
  },
];
