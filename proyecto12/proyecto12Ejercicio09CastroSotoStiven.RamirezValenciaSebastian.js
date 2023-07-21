/*
- Fecha de publicación: 20-06-2023
- Hora: 20:54
- Versión de su código: 1
- ing(c) sebastian ramirez / stiven castro soto
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descriptivo: Genera ternas de enteros en columnas
*/

const main = () => {
    let col1 = 1, col2 = 1, col3 = 1, j = 2; // Variables para almacenar los valores de las columnas y el contador
    
    console.log("Este programa entrega las siguientes ternas de números:");
    
    while (col1 <= 9) { // Bucle para generar las ternas de números
      if (col3 === 4) { // Verificar si col3 alcanza el valor 4 y reiniciarlo a 1 si es así
        col3 = 1;
      }
      
      col2 = Math.floor((j + 1) / 3); // Cálculo del valor de la segunda columna
      
      console.log(col1, col2, col3); // Mostrar la terna de números en la consola
      
      j++; // Incremento del contador
      col1++; // Incremento del valor de la primera columna
      col3++; // Incremento del valor de la tercera columna
    }
  };
  
  main();