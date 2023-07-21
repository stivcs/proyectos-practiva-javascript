/*
Fecha de publicación: 20/06/2023
Hora: 6:42pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa calcula la serie de senh(x) para un valor de x y un número de términos dados por el usuario.
*/



const prompt = require('prompt-sync')();

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function main() {
  // Variables utilizadas en el programa
  let x = 0, factorialValue = 1, total = 1, resultado = 1, potencia = 3, final = 1;
  let contador = 1, veces = 0;

  // Solicitar al usuario el valor de x y el número de términos para la serie
  x = parseFloat(prompt("Ingrese un valor para x: "));
  veces = parseInt(prompt("Por favor ingrese el número de términos para la serie: "));

  // Bucle principal que calcula los términos de la serie
  for (contador = 0; contador <= veces; contador++) {
    // Calcular el factorial para la potencia actual
    for (let i = 1; i <= potencia; i++) {
      factorialValue *= i;
    }
    // Calcular el término actual de la serie
    resultado = (Math.pow(x, potencia)) / factorialValue;
    total = 1;
    potencia += 2;

    if (contador === 0) {
      console.log("Termino 1 = " + x.toFixed(0));
      contador += 2;
    }

    // Sumar el término actual al resultado final
    final += resultado;

    // Imprimir el término actual de la serie
    console.log("Termino " + contador + ": senh(" + x.toFixed(0) + ") = " + resultado.toFixed(8));

    // Imprimir el resultado final cuando se alcanza el número de términos deseado
    if (contador === veces) {
      console.log("Total suma = " + final.toFixed(8));
    }
  }
}

// Llamar a la función principal para ejecutar el programa
main();
