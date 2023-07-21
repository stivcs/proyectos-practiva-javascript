/*
- Fecha de publicación: 20-06-2023
- Hora: 21:37
- Versión de su código: 1
- Autores. Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descriptivo: Calcular el valor de e^x a través de serie de Taylor
*/

var prompt = require('prompt-sync')();

// Función para calcular el factorial de un número
const factorial = (i) => {
  let n = 1;
  while (i > 0) {
    n = n * i;
    i--;
  }
  return n;
};

// Función para calcular la aproximación de e^x mediante la serie de Taylor
const exponencial = (c, x, t, z) => {
  while (c < t) {
    let r;
    r = Math.pow(x, c) / factorial(c);
    z = z + r;
    c++;
  }
  return z;
};

// Función principal del programa
const main = () => {
  console.log("Este programa calcula el resultado de e^x mediante una serie de Taylor");
  
  var t = parseInt(prompt("Ingrese el número de términos de la serie: "));
  var x = parseFloat(prompt("Ingrese un valor para x: "));

  const result = exponencial(1, x, t, x);
  process.stdout.write(`El resultado es ${result.toFixed(8)}`);
};

main();