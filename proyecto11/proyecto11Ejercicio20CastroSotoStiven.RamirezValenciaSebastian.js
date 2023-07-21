/*
Fecha de publicación: 20/06/2023
Hora: 3:24pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa calcula el valor de e^x utilizando una serie de términos ingresada por el usuario.
*/

const prompt = require('prompt-sync')();

/**
 * Función principal que solicita datos al usuario y muestra el resultado.
 */
function main() {
  let x = parseInt(prompt("Ingrese un valor para x: "));
  let veces = parseInt(prompt("Por favor ingrese el número de términos para la serie: "));

  let resultado = calcularResultado(x, veces);

  console.log(`El resultado de e^${x} es: ${resultado}`);
}

/**
 * Calcula el resultado de la serie utilizando un ciclo for en lugar de la recursividad.
 * @param {number} x - Valor de x.
 * @param {number} veces - Número de términos para la serie.
 * @returns {number} - Resultado de la serie.
 */
function calcularResultado(x, veces) {
  let potencia = 1;
  let factorial = 1;
  let resultado = 1;

  for (let i = 1; i <= veces; i++) {
    factorial *= potencia;
    resultado += Math.pow(x, potencia) / factorial;
    potencia++;
  }

  return resultado;
}

main();
