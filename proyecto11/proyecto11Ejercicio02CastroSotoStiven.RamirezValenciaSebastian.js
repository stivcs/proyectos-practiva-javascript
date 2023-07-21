/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : 
* Calcula la suma de los elementos de la serie de Fibonacci que están dentro del rango [0, maxValue].
 * @param {number} maxValue - El valor máximo hasta el cual se generará la serie y se calculará la suma.
 * @returns {number} - La suma de los elementos de la serie de Fibonacci en el rango [0, maxValue].
*/

const sumFibonacciInRange = (maxValue) => {
  let series = [0, 1]; // Los primeros dos números de la serie de Fibonacci
  let nextNumber = 0;
  let sum = 1;

  // Generar la serie de Fibonacci y calcular la suma
  for (let i = 2; nextNumber <= maxValue; i++) {
    nextNumber = series[i - 1] + series[i - 2];
    if (nextNumber <= maxValue) {
      series.push(nextNumber);
      sum += nextNumber;
    }
  }

  return sum;
};

const maxValue = 100;
const sum = sumFibonacciInRange(maxValue);

console.log(`Suma de los elementos de la serie de Fibonacci entre 0 y ${maxValue}:`);
console.log(sum);


  