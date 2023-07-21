/*
- Fecha de publicación: 20-06-2023
- Hora: 21:28
- Versión de su código: 1
- Autores. Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descriptivo: Genera un patrón de caracteres que forman una v
*/

// Función para imprimir espacios en blanco
const espacios = (cant, cont) => {
    while (cont < cant) {
      process.stdout.write(" "); // Mostrar un espacio en blanco en la consola
      cont++;
    }
  };
  
  // Función para generar una línea de la figura
  const figura = (esp1, esp2) => {
    while (esp1 > 0) {
      espacios(esp2, 0); // Llamar a la función para imprimir espacios en blanco antes de la letra "Z"
      process.stdout.write("Z"); // Mostrar la letra "Z" en la consola
      espacios(esp1, 0); // Llamar a la función para imprimir espacios en blanco después de la letra "Z"
      process.stdout.write("Z\n"); // Mostrar la letra "Z" seguida de un salto de línea en la consola
      esp1 = esp1 - 2; // Decrementar el número de espacios antes y después de la letra "Z"
      esp2 = esp2 + 1; // Incrementar el número de espacios antes de la letra "Z"
    }
    if (esp1 === -1) {
      espacios(esp2, 0); // Llamar a la función para imprimir espacios en blanco antes de la última letra "Z"
      process.stdout.write("Z"); // Mostrar la última letra "Z" en la consola
    }
  };
  
  // Función principal del programa
  const main = () => {
    const esp1 = 17; // Número de espacios antes y después de la letra "Z" en la primera línea
    let esp2 = 0; // Número de espacios antes de la letra "Z" en la primera línea
    figura(esp1, esp2); // Llamar a la función para generar la figura
  };
  
  main(); // Llamar a la función principal para ejecutar el programa