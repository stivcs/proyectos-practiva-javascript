/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : muestra la suma de todos los factoriales desde 0 hasta N
*/
var prompt = require('prompt-sync')();
// Función para calcular el factorial de un número
const calcularFactorial = (numero) => {
  let factorial = 1; // Almacena el resultado del factorial

  if (numero === 0) {
    return factorial; // Si el número es cero, el factorial es 1, se devuelve el valor inicial del factorial
  }

  // Calcular el factorial del número utilizando un bucle for
  for (let i = 1; i <= numero; i++) {
    factorial *= i; // Multiplicar el factorial por cada número del 1 al número ingresado
  }

  return factorial; // Devolver el factorial calculado
};

// Leer un número entero no negativo
let N;
for (;;) {
  N = parseInt(prompt("Ingrese un número entero no negativo:"));
  if (!isNaN(N) && N >= 0) {
    break; // Salir del ciclo si se ingresa un número válido
  }
  console.log("El número debe ser un entero no negativo. Inténtelo nuevamente.");
}

let sumaFactoriales = 0; // Almacena la suma de los factoriales desde 0 hasta N

// Calcular la suma de los factoriales desde 0 hasta N
for (let i = 0; i <= N; i++) {
  sumaFactoriales += calcularFactorial(i); // Se utiliza la función calcularFactorial() para obtener el factorial de cada número
}

console.log(`La suma de los factoriales desde 0 hasta ${N} es: ${sumaFactoriales}`);
