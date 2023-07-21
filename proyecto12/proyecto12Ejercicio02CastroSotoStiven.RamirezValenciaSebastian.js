 /*
- Fecha de publicacion: 20 de junio 2023
- Hora 9:40pm
- Version 1
- ing(c) sebastian ramirez / stiven castro soto
- Lenguaje utilizado JavaScript
- Version del lenguaje 6.0 
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- 2.Hacer un programa de computador, de tal 
manera que imprima el valor de la suma de los elementos
de la serie de Fibonacci entre 0 y 100.
*/
// Definición de la función para calcular la suma de la serie de Fibonacci
const calculateFibonacciSum = () => {
    console.log("Los números a sumar son:");
    let x = 0; // Primer número de la serie
    let y = 1; // Segundo número de la serie
    let z = 1; // Siguiente número de la serie
    let sum = 0; // Variable para almacenar la suma de los números
  
    console.log(x + ", "); // Mostrar el primer número
    while (z < 100) { // Mientras el siguiente número sea menor a 100
      console.log(z + ", "); // Mostrar el siguiente número
      sum += z; // Agregar el siguiente número a la suma total
      z = x + y; // Calcular el siguiente número de la serie
      x = y; // Actualizar el valor de x al valor anterior de y
      y = z; // Actualizar el valor de y al valor anterior de z
    }
  
    return sum; // Retornar la suma total
  };
  
  const fibonacciSum = calculateFibonacciSum(); // Llamar a la función para calcular la suma de Fibonacci
  console.log("y su suma es " + fibonacciSum); // Mostrar el resultado de la suma