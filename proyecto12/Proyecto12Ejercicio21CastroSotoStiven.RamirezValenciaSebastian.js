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
- Hacer un programa que por medio de una serie de Taylor dar el resultado de cos(x) 
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
  
  const coseno = (c, x, t, z) => {
    while (c < t) {
      const r = (Math.pow(-1, c) * Math.pow(x, 2 * c)) / factorial(2 * c);
      z += r;
      c++;
    }
    return z;
  };
  
  const main = () => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    readline.question("Este programa calcula el resultado de cos(x) mediante una serie de Taylor.\nIngrese el número de términos de la serie: ", (termInput) => {
      const t = parseInt(termInput); // Se convierte el número de términos a un entero
      readline.question("Ingrese un valor para x: ", (xInput) => {
        const x = parseFloat(xInput); // Se convierte el valor de x a un número decimal
        readline.close();
        const result = coseno(1, x, t, x).toFixed(8); // Se calcula el resultado del coseno y se redondea a 8 decimales
        console.log(`El resultado es ${result}`); // Se muestra el resultado en la consola
      });
    });
  };
  
  main();