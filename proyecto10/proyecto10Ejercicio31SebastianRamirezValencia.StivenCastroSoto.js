/*
Fecha de publicación: 20/06/2023
Hora: 1:11am
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa imprime una pirámide formada por letras utilizando recursión.
*/

const prompt = require('prompt-sync')();

function calcularFactorial(n) {
  // Función recursiva para calcular el factorial de un número
  if (n <= 1) {
    return 1;
  }
  return n * calcularFactorial(n - 1);
}

function calcularPotencia(base, exponente) {
  // Función recursiva para calcular la potencia de un número
  if (exponente === 0) {
    return 1;
  }
  return base * calcularPotencia(base, exponente - 1);
}

function calcularTermino(x, potencia, factorial) {
  // Función para calcular un término de la serie de Taylor para senh(x)
  return calcularPotencia(x, potencia) / factorial;
}

function calcularSerieTaylorSenh(x, potencia, terminoActual, sumaActual) {
  // Función recursiva para calcular la serie de Taylor para senh(x)
  if (terminoActual === 0) {
    console.log("Termino 1 = " + x);
    return calcularSerieTaylorSenh(x, potencia + 2, terminoActual + 1, sumaActual + x);
  }

  const factorial = calcularFactorial(potencia);
  const termino = calcularTermino(x, potencia, factorial);
  sumaActual += termino;

  console.log("Termino " + (terminoActual + 1) + ": senh(" + x + ") = " + termino.toFixed(8));

  if (terminoActual >= 2 && Math.abs(termino) < 1e-8) {
    console.log("Total suma = " + sumaActual.toFixed(8));
    return;
  }

  return calcularSerieTaylorSenh(x, potencia + 2, terminoActual + 1, sumaActual);
}

function calcularSenh() {
  // Función principal para solicitar datos al usuario y realizar el cálculo de la serie de Taylor
  const x = parseFloat(prompt("Ingrese el valor de x: "));
  const terminos = parseInt(prompt("Ingrese el número de términos para la serie: "));

  const potenciaInicial = 1;
  const terminoInicial = 0;
  const sumaInicial = 0;

  console.log("Calculando la serie de Taylor para senh(x)...");
  console.log("Valor de x: " + x);
  console.log("Número de términos: " + terminos);
  console.log("--------------------------------------");

  calcularSerieTaylorSenh(x, potenciaInicial, terminoInicial, sumaInicial);
}

// Ejemplo de uso
calcularSenh();
