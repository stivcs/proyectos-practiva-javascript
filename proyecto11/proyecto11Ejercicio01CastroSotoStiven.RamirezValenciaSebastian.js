/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : el programa muestra la serie fibonacci hasta un valor limite qu en nuestro caso es 10000
*/
// Función para generar la serie de Fibonacci hasta un valor máximo
const fibonacciSerie = (maxValue) => {
  let series = [0, 1]; // Los primeros dos números de la serie de Fibonacci
  let nextNumber = 0;

  // Generar la serie de Fibonacci
  for (let i = 2; nextNumber <= maxValue; i++) {
    nextNumber = series[i - 1] + series[i - 2]; // Calcula el siguiente número sumando los dos últimos
    if (nextNumber <= maxValue) {
      series.push(nextNumber); // Agrega el siguiente número a la serie si no sobrepasa el valor máximo
    }
  }

  return series.join(", "); // Devuelve la serie de Fibonacci como una cadena de texto separada por comas
};

const maxValue = 10000;
const fibonacciSeries = fibonacciSerie(maxValue);

console.log(`Serie de Fibonacci hasta ${maxValue}:`);
console.log(fibonacciSeries);


