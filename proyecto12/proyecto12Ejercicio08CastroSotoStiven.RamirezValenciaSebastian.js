/*
- Fecha de publicación: 20-06-2023
- Hora: 21:03
- Versión de su código: 1
- ing(c) sebastian ramirez / stiven castro soto
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descriptivo: Genera parejas de enteros en columnas
*/

const main = () => {
    let col1 = 0, col2 = 0, j = 1; // Variables para almacenar los valores de las columnas y el contador
    
    console.log("Este programa entrega las siguientes parejas de números:");
    
    while (col1 <= 9) { // Bucle para generar las parejas de números
      col2 = Math.floor((j + 1) / 2); // Cálculo del valor de la segunda columna
      console.log(col1, col2); // Mostrar la pareja de números en la consola
      j++; // Incremento del contador
      col1++; // Incremento del valor de la primera columna
    }
  };
  
  main();
  