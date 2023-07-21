/*
- Fecha de publicacion: 20 de junio 2023
- Hora 10:30pm
- Version 1
- ing(c) sebastian ramirez / stiven castro soto
- Lenguaje utilizado JavaScript
- Version del lenguaje 6.0 
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Hacer un programa diseÃ±ado 
para imprimir un triangulo invertido que va 
cambiando el caracter a imprimir
  */
// Función para imprimir espacios en blanco
const espacios = (cant, cont) => {
    while (cont < cant) {
      process.stdout.write(" "); // Mostrar un espacio en blanco en la consola
      cont++; // Incrementar el contador de espacios
    }
  };
  
  // Función para imprimir letras en su cantidad correspondiente
  const letras = (cant, cont, c) => {
    while (cont <= cant) {
      process.stdout.write(c + " "); // Mostrar la letra seguida de un espacio en blanco en la consola
      cont++;
    }
  };
  
  // Función para generar la figura
  const figura = (cant, esp) => {
    while (cant >= 1) {
      switch (cant) {
        case 13:
          espacios(esp, 0);
          letras(cant, 1, 'P');
          break;
        case 11:
          espacios(esp, 0);
          letras(cant, 1, 'N');
          break;
        case 9:
          espacios(esp, 0);
          letras(cant, 1, 'L');
          break;
        case 7:
          espacios(esp, 0);
          letras(cant, 1, 'J');
          break;
        case 5:
          espacios(esp, 0);
          letras(cant, 1, 'H');
          break;
        case 3:
          espacios(esp, 0);
          letras(cant, 1, 'F');
          break;
        case 1:
          espacios(esp, 0);
          letras(cant, 1, 'D');
          break;
      }
      process.stdout.write("\n"); // Mostrar un salto de línea en la consola
      cant = cant - 2; // Restar 2 al número de letras para la siguiente iteración
      esp = esp + 2; // Sumar 2 a la cantidad de espacios para la siguiente iteración
    }
  };
  
  const main = () => {
    const max = 13; // Máximo número de letras en una línea
    let esp = 0; // Cantidad de espacios iniciales
    figura(max, esp); // Llamar a la función 'figura' para generar y mostrar la figura en la consola
  };
  
  main();