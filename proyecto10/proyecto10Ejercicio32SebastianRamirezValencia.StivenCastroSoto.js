/*
Fecha de publicación: 20/06/2023
Hora: 6:39 pm 
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y ComputaciónEste
imprime una de las taylor
*/


const prompt = require('prompt-sync')();

function factorial(n) {
  // Función recursiva para calcular el factorial de un número
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function calcularTermino(x, potencia) {
  // Función recursiva para calcular cada término de la serie de Taylor para cosh(x)
  if (potencia === 0) {
    return 1;
  } else {
    const numerador = Math.pow(x, potencia);
    const denominador = factorial(potencia);
    const resultado = numerador / denominador;

    return resultado + calcularTermino(x, potencia - 2);
  }
}

function main() {
  // Función principal para solicitar datos al usuario y realizar el cálculo de la serie de Taylor
  const x = parseFloat(prompt("Ingrese un valor para x: "));
  const terminos = parseInt(prompt("Por favor ingrese el número de términos para la serie: "));

  const suma = calcularTermino(x, 2 * terminos);

  console.log(`El resultado de cosh(${x}) es: ${suma.toFixed(8)}`);
}

main();
