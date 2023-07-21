/*
Fecha de publicación: 20/06/2023
Hora: 5:10pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa lee por teclado un número e imprime en pantalla el valor de la suma de sus factoriales desde 0 hasta el número dado.

Función sumarFactoriales(valor, acumulado):
  - Suma los factoriales desde 0 hasta un número dado e imprime los resultados en cada iteración.
  - Parámetros:
    - valor: El número entero no negativo hasta el cual se sumarán los factoriales.
    - acumulado: El acumulador para la suma de los factoriales.
*/
var prompt = require('prompt-sync')();

// Definición de la función factorial
function factorial(a) {
  if (a === 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}

// Definición de la función para sumar los factoriales
function sumarFactoriales(valor, acumulado) {
  process.stdout.write(valor.toString());

  // Verificar si el valor es negativo y solicitar un nuevo número al usuario
  if (valor < 0) {
    console.log("Por favor digite un número entero no negativo: ");
    let nuevoValor = parseInt(prompt());
    sumarFactoriales(nuevoValor, acumulado);
  } else {
    if (valor === 0) {
      // Caso base: cuando el valor es 0, imprimir el factorial y la suma acumulada
      console.log(`${valor}! = ${factorial(valor)} = ${factorial(valor) + acumulado}`);
    } else {
      // Imprimir el factorial parcial y el signo de suma en la misma línea
      process.stdout.write(`! + `);
      // Llamar recursivamente a sumarFactoriales con un valor menor y acumular el factorial
      sumarFactoriales(valor - 1, acumulado + factorial(valor));
    }
  }
}

// Mensaje de inicio del programa
console.log("Este programa lee por teclado un número e imprime en pantalla el valor de la suma de sus factoriales desde 0 hasta el número dado.");
console.log("\nPor favor digite un número entero no negativo:");

// Llamar a la función sumarFactoriales con el número ingresado por el usuario y un acumulador inicial de 0
sumarFactoriales(parseInt(prompt()), 0);