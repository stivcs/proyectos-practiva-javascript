/*
- Fecha de publicación: 20-06-2023
- Hora: 21:30
- Versión de su código: 1
- Autores. Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descriptivo: Genera un patrón de caracteres que forman un triángulo a la derecha
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
      if (cont === 0) {
        espacios(esp, 0); // Llamar a la función para imprimir espacios en blanco antes de la primera letra "A"
      }
      process.stdout.write("A"); // Mostrar la letra "A" en la consola
      cont++;
    }
  };
  
  // Función para generar la figura completa
  const numimp = (max, esp) => {
    let n = 0;
    let i = 2;
  
    while (n < max) {
      figura(n, 0, esp); // Llamar a la función para generar una línea de la figura
      process.stdout.write("\n"); // Mostrar un salto de línea en la consola
      n++;
      esp--;
    }
  
    esp = esp + 2;
  
    while (i <= max) {
      figura(max - i, 0, esp); // Llamar a la función para generar una línea de la figura
      process.stdout.write("\n"); // Mostrar un salto de línea en la consola
      i++;
      esp++;
    }
  };
  
  // Función principal del programa
  const main = () => {
    let num = 0;
    let max = 6;
    let esp = 39;
    numimp(max, esp); // Llamar a la función para generar la figura completa
  };
  
  main();