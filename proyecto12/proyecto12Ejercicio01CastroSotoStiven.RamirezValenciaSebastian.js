 /*
- Fecha de publicacion: 20 de junio 2023
- Hora 4:10pm
- Version 1
- ing(c) sebastian ramirez / stiven castro soto
- Lenguaje utilizado JavaScript
- Version del lenguaje 6.0 
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Hacer un programa de computador, de tal manera 
que presente la serie de Fibonacci hasta llegar sin
sobrepasar el número 10,000.
*/

const fibonacciSeries = () => {
    let x = 0; // Primer número de la serie
    let y = 1; // Segundo número de la serie
    let result = '';
  
    result += x + ", "; // Agregar el primer número de la serie al resultado
  
    while (y < 10000) {
      result += y + ", "; // Agregar el siguiente número de la serie al resultado
  
      let next = x + y; // Calcular el siguiente número de Fibonacci
      x = y; // Actualizar el primer número
      y = next; // Actualizar el segundo número
    }
  
    return result;
  };
  
  console.log(fibonacciSeries());