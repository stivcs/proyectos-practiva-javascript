/*
Fecha de publicación: 20/06/2023
Hora: 5: 57pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este imprime una de las taylor
*/

var prompt = require('prompt-sync')();

function main() {
  // Función principal que solicita datos al usuario y muestra el resultado
  let x = parseInt(prompt("Ingrese un valor para x: "));
  let veces = parseInt(prompt("Por favor ingrese el número de términos para la serie: "));

  let resultado = calcularResultado(x, veces);

  console.log(`El resultado de e^${x} es: ${resultado}`);
}

function calcularResultado(x, veces, potencia = 1, factorial = 1, resultado = 1) {
  // Función recursiva que calcula el resultado de la serie utilizando la fórmula de la exponencial
  if (potencia > veces) {
    return resultado;
  }

  factorial *= potencia;
  resultado += Math.pow(x, potencia) / factorial;

  return calcularResultado(x, veces, potencia + 1, factorial, resultado);
}

main();
