/*
Fecha de publicación: 20/06/2023
Hora: 6:42 pm 
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa imprime una serie de taylor usando recursion 
*/

function lognat(c, x, t, z) {
    // Función recursiva para calcular ln(x) utilizando la serie de Taylor
    if (c <= t) {
      let r = (Math.pow(-1, c - 1) * Math.pow(x - 1, c)) / c;
      z = z + r;
      return lognat(c + 1, x, t, z);
    } else {
      return z;
    }
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Este programa da el resultado de ln(x) a través de una serie de Taylor\nIngrese el número de términos de la serie: ", (t) => {
    rl.question("Ingrese un valor para x: ", (x) => {
      const result = lognat(1, x, t, 0.0);
      console.log("El resultado es " + result.toFixed(8));
      rl.close();
    });
  });
  