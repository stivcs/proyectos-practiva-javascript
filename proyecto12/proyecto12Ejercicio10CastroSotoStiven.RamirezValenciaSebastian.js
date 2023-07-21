/*
- Fecha de publicación: 20-06-2023
- Hora: 21:21
- Versión de su código: 1
- ing(c) sebastian ramirez / stiven castro soto
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descriptivo: Genera un patrón de caracteres que se acercan
*/

const prompt = require('prompt-sync')();

const espacio = (cont, final) => {
  while (cont <= final) {
    process.stdout.write(" "); // Mostrar un espacio en blanco en la consola
    cont++;
  }
};

const caracter = (cont, final, b) => {
  let r;
  while (cont <= final) {
    espacio(1, cont - 1); // Llamar a la función 'espacio' para mostrar los espacios en blanco
    process.stdout.write("A"); // Mostrar el carácter 'A' en la consola
    espacio(1, 80 - (b + 2)); // Llamar a la función 'espacio' para mostrar los espacios en blanco restantes
    process.stdout.write("A"); // Mostrar el carácter 'A' en la consola
    prompt(); // Esperar la entrada del usuario (no se muestra el mensaje)
    console.clear(); // Limpiar la consola
    cont = cont + 1; // Incrementar el contador
    b = b + 2; // Incrementar la variable 'b'
  }
};

const main = () => {
  caracter(1, 40, -1); // Llamar a la función 'caracter' para generar y mostrar los caracteres en la consola
};

main();