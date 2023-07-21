 /*
- Fecha de publicacion: 20 de junio 2023
- Hora 10:10pm
- Version 1
- ing(c) sebastian ramirez / stiven castro soto
- Lenguaje utilizado JavaScript
- Version del lenguaje 6.0 
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Hacer un programa de computador, 
de tal manera que presente todas las 
tablas de multiplicar del 1 al 10
  */
const main = () => {
    let num = 1; // Número actual de la tabla de multiplicar
    let mult = 1; // Multiplicador actual
    let result; // Resultado de la multiplicación
    
    while (num <= 10) {
      while (mult <= 10) {
        result = num * mult; // Realizar la multiplicación
        console.log(`${num} x ${mult} = ${result}`); // Mostrar el resultado en la consola
        mult++; // Incrementar el multiplicador
      }
      console.log("\n"); // Mostrar línea en blanco después de cada tabla de multiplicar
      num++; // Pasar al siguiente número de la tabla de multiplicar
      mult = 1; // Restablecer el multiplicador a 1
    }
  };
  
  main(); // Ejecutar el programa