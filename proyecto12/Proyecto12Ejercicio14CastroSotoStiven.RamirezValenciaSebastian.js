/*
- Fecha de publicacion: 20 de junio 2023
- Hora 11:00pm
- Version 1
- Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
- Lenguaje utilizado JavaScript
- Version del lenguaje 6.0 
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Hacer un programa diseñado para imprimir un triangulo invertido  */

// Función para imprimir espacios en blanco
const espacios = (cant, cont) => {
    while (cont < cant) {
      process.stdout.write(" "); // Mostrar un espacio en blanco en la consola
      cont++; // Incrementar el contador de espacios
    }
  };
  
  // Función para imprimir letras en su cantidad correspondiente
  const letras = (cant, cont) => {
    while (cont <= cant) {
      process.stdout.write("P"); // Mostrar la letra "P" en la consola
      cont++;
    }
  };
  
  // Función para generar la figura
  const figura = (cant, esp) => {
    while (cant >= 1) {
      espacios(esp, 0); // Llamar a la función 'espacios' para imprimir los espacios iniciales
      letras(cant, 1); // Llamar a la función 'letras' para imprimir las letras "P"
      process.stdout.write("\n"); // Mostrar un salto de línea en la consola
      cant -= 2; // Restar 2 al número de letras para la siguiente iteración
      esp++; // Incrementar la cantidad de espacios para la siguiente iteración
    }
  };
  
  const main = () => {
    const max = 13; // Máximo número de letras en una línea
    let esp = 33; // Cantidad de espacios iniciales
    figura(max, esp); // Llamar a la función 'figura' para generar y mostrar la figura en la consola
  };
  
  main();