/*
- Fecha de publicación: 20-06-2023
- Hora: 21:25
- Versión de su código: 1
- Autores. Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descriptivo: Genera un patrón de caracteres que forman un rombo
*/

// Función para imprimir espacios en blanco
const espacios = (cant, cont) => {
    while (cont < cant) {
      process.stdout.write(" "); // Mostrar un espacio en blanco en la consola
      cont++;
    }
  };
  
  // Función para generar una línea de la figura
  const figura = (cant, cont, esp) => {
    while (cont <= cant) {
      if (cont === 1) {
        espacios(esp, 0); // Llamar a la función 'espacios' para imprimir los espacios iniciales
      }
      process.stdout.write("Z"); // Mostrar la letra "Z" en la consola
      cont++;
    }
  };
  
  // Función para generar y mostrar la figura completa
  const numimp = (max, esp) => {
    let n = 1;
    let i = 0;
    while (n < max) {
      figura(n, 1, esp); // Llamar a la función 'figura' para generar y mostrar una línea de la figura
      process.stdout.write("\n"); // Mostrar un salto de línea en la consola
      n = n + 2; // Incrementar la cantidad de letras en la siguiente línea
      esp = esp - 1; // Decrementar la cantidad de espacios iniciales para la siguiente línea
    }
    while (i < max) {
      figura(max - i, 1, esp); // Llamar a la función 'figura' para generar y mostrar una línea invertida de la figura
      process.stdout.write("\n"); // Mostrar un salto de línea en la consola
      i = i + 2; // Incrementar la cantidad de letras en la siguiente línea invertida
      esp = esp + 1; // Incrementar la cantidad de espacios iniciales para la siguiente línea invertida
    }
  };
  
  const main = () => {
    const max = 7; // Máximo número de letras en una línea
    let esp = 9; // Cantidad de espacios iniciales
    numimp(max, esp); // Llamar a la función 'numimp' para generar y mostrar la figura completa
  };
  
  main();