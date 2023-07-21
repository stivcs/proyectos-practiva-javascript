/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : Cálculo de la función sen(x) utilizando una serie de taylor 
*/
// Importar el módulo 'prompt-sync' para leer la entrada del usuario desde la consola
var prompt = require('prompt-sync')();

// Función para calcular el seno de un número 'x' utilizando 'm' términos
function calcularSeno(x, m) {
  var resultado = 0;

  for (var i = 0; i <= m; i++) {
    // Calcular el término actual en la serie de Taylor para el seno
    var termino = Math.pow(-1, i) * Math.pow(x, 2 * i + 1) / factorial(2 * i + 1);

    // Sumar el término actual al resultado total
    resultado += termino;

    // Imprimir el valor del término actual en la consola
    console.log("Termino " + i + ": " + termino);
  }

  // Imprimir la suma de todos los términos en la consola
  console.log("Suma de los terminos: " + resultado);
}

// Función recursiva para calcular el factorial de un número 'n'
// Utilizada en el cálculo de cada término de la serie de Taylor
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Obtener el valor de 'x' y el número de términos 'm' desde el teclado
var x = parseFloat(prompt("Ingrese el valor de x:"));
var m = parseInt(prompt("Ingrese el número de términos (m):"));

// Llamar a la función 'calcularSeno' con los valores proporcionados
calcularSeno(x, m);

  
  