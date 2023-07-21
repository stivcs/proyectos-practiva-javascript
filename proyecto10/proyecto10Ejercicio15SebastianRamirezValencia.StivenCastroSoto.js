/*
Fecha de publicación: 20/06/2023
Hora: 3:10pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa calcula el factorial de un número entero positivo, teniendo en cuenta que:
- El factorial de un número se calcula multiplicando todos los números enteros positivos desde 1 hasta el número dado.
- Se valida que el número ingresado sea un entero positivo.
- En caso de ingresar un número negativo, se muestra un mensaje indicando que el factorial solo está definido para números enteros positivos.
- Salvedad: Este programa utiliza la biblioteca 'prompt-sync' para solicitar al usuario el ingreso del número.
*/

const prompt = require('prompt-sync')();

/**
 * Función recursiva para calcular el factorial de un número entero positivo.
 * @param {number} numero - Número entero positivo para calcular su factorial.
 * @returns {number|string} - El factorial del número o un mensaje de error si el número es negativo.
 */
function calcularFactorial(numero) {
  if (numero === 0) {
    return 1;
  } else if (numero < 0) {
    return "El factorial solo está definido para números enteros positivos.";
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}

let numero = parseInt(prompt("Ingrese un número entero positivo:"));
let factorial = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${factorial}`);
