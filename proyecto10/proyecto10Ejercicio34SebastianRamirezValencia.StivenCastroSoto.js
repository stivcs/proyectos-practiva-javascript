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

function factorial(i) {
    // Función para calcular el factorial de un número utilizando recursión
    if (i == 0)
      return 1;
    else
      return i * factorial(i - 1);
  }
  
  function seno(c, x, t, z) {
    // Función recursiva para calcular el seno(x) utilizando la serie de Taylor
    if (c < t) {
      let r = (Math.pow(-1, c) * Math.pow(x, 2 * c + 1)) / factorial(2 * c + 1);
      z = z + r;
      return seno(c + 1, x, t, z);
    } else {
      return z;
    }
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Este programa da el resultado de sen(x) a través de una serie de Taylor\nIngrese el número de términos de la serie: ", (t) => {
    rl.question("Ingrese un valor para x: ", (x) => {
      const result = seno(1, x, t, 1.0);
      console.log("El resultado es " + result.toFixed(8));
      rl.close();
    });
  });
  