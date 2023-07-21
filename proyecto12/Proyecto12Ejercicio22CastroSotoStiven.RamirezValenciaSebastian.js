/*
- Fecha de publicacion: 20 de junio 2023
- Hora 11:20pm
- Version 1
- Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
- Lenguaje utilizado JavaScript
- Version del lenguaje 6.0 
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Hacer un programa que por medio de una 
serie de Taylor dar el resultado de senh(x) o seno hiperbolico
*/
// Función para calcular el factorial de los números
const factorial = (i) => {
    let n = 1;
    while (i > 0) {
      n *= i;
      i--;
    }
    return n;
  };
  
  // Función para calcular la aproximación del seno hiperbólico mediante la serie de Taylor
  const senoh = (c, x, t, z) => {
    while (c < t) {
      const r = Math.pow(x, 2 * c + 1) / factorial(2 * c + 1);
      z += r;
      c++;
    }
    return z;
  };
  
  // Función principal
  const main = () => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    // Solicitar al usuario el número de términos de la serie
    readline.question("Este programa calcula el resultado de senh(x) mediante una serie de Taylor.\nIngrese el número de términos de la serie: ", (termInput) => {
      const t = parseInt(termInput); // Se convierte el número de términos a un entero
  
      // Solicitar al usuario un valor para x
      readline.question("Ingrese un valor para x: ", (xInput) => {
        const x = parseFloat(xInput); // Se convierte el valor de x a un número decimal
        readline.close();
  
        // Calcular el resultado de senh(x) y redondearlo a 7 decimales
        const result = senoh(1, x, t, x).toFixed(7);
  
        // Mostrar el resultado en la consola
        console.log(`El resultado es ${result}`);
      });
    });
  };
  
  // Llamar a la función principal
  main();