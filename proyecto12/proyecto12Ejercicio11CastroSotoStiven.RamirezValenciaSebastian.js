 /*
- Fecha de publicacion: 20 de junio 2023
- Hora 10:20pm
- Version 1
- ing(c) sebastian ramirez / stiven castro soto
- Lenguaje utilizado JavaScript
- Version del lenguaje 6.0 
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Hacer un programa que imprimima una figura triangular 
en pantalla con unos espacios a la izquierda
  */
const imprimir = (k, j, i) => {
    while (i <= 25) {
      if (j >= 1) {
        process.stdout.write(" "); // Mostrar un espacio en blanco en la consola
        j = j - 1; // Decrementar la variable 'j'
      } else {
        if (k >= 1) {
          process.stdout.write("A"); // Mostrar el carácter 'A' en la consola
          k = k - 1; // Decrementar la variable 'k'
        } else {
          process.stdout.write("\n"); // Mostrar un salto de línea en la consola
          k = k + i; // Actualizar la variable 'k' sumando el valor de 'i'
          j = 80 - i; // Actualizar la variable 'j' restando el valor de 'i' a 80
          i = i + 1; // Incrementar la variable 'i'
        }
      }
    }
  };
  
  const main = () => {
    console.log("Este programa imprime lo siguiente:");
    let k = 0; // Variable para controlar la cantidad de caracteres 'A' en cada línea
    let j = 80; // Variable para controlar la cantidad de espacios en blanco en cada línea
    let i = 0; // Variable para controlar el número de la línea actual
    imprimir(k, j, i); // Llamar a la función 'imprimir' para generar y mostrar la figura en la consola
  };
  
  main();