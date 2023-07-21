/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : lee un numero y devuelve su factorial 
*/
var prompt = require('prompt-sync')();
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

// Solicitar al usuario que ingrese un número utilizando prompt
const numero = parseFloat(prompt("Ingrese un número para calcular su factorial:"));

// Validar si el número ingresado es un entero positivo
if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
  console.log("El número debe ser un entero positivo. Inténtelo nuevamente.");
} else {
  // Llamar a la función calcularFactorial() para obtener el factorial del número
  const resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es: ${resultado}`);
}


