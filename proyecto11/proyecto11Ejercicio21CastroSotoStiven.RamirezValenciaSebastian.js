/*
Fecha de publicación: 20/06/2023
Hora: 3:40pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa calcula la serie de coseno para un valor dado de x y un número de términos ingresado por el usuario.
*/

const prompt = require('prompt-sync')();

/**
 * Calcula el factorial de un número.
 * @param {number} n - Número para calcular el factorial.
 * @returns {number} - Factorial del número.
 */
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Función principal que solicita datos al usuario y calcula la serie de coseno.
 */
function main() {
  let x = 0;
  let factorialValue = 1;
  let total = 1;
  let resultado = 1;
  let potencia = 2;
  let final = 0;
  let contador = 1;
  let veces = 0;

  x = parseFloat(prompt("Ingrese un valor para x: "));
  veces = parseInt(prompt("Por favor ingrese el número de términos para la serie: "));

  for (contador = 0; contador <= veces; contador++) {
    for (let i = 1; i <= potencia; i++) {
      factorialValue *= i;
    }
    resultado = Math.pow(x, potencia) / factorialValue;
    total = 1;
    potencia += 2;

    if (contador === 0) {
      console.log("Termino 1 = " + x.toFixed(0));
      contador += 2;
    }

    final += resultado;
    console.log("Termino " + contador + ": cos(" + x.toFixed(0) + ") = " + resultado.toFixed(8));

    if (contador === veces) {
      console.log("Total suma = " + final.toFixed(8));
    }
  }
}

main();
