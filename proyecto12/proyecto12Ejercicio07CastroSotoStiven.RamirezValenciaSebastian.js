/*
- Fecha de publicación: 20-06-2023
- Hora: 21:01
- Versión de su código: 1
- ing(c) sebastian ramirez / stiven castro soto
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descriptivo: calcula la suma de n números factoriales
-Salvedades: funciona solo si se recibe un número por consola
*/

const prompt = require('prompt-sync')();

const sumafactorial = (num, i, suma) => {
  let factorial = 1; // Almacena el resultado del factorial
  while (i <= num) {
    factorial = factorial * i; // Cálculo del factorial
    suma = suma + factorial; // Actualización de la suma
    i++; // Incremento del contador
  }
  console.log(`La suma del factorial de ${num} es: ${suma}`);
};

const main = () => {
  let num, c = 0; // Número ingresado por el usuario y variable de control
  console.log("Este programa lee un número e imprime la suma de los factoriales.");
  while (c === 0) {
    num = parseInt(prompt("Ingrese un número: "));
    if (num < 0) {
      console.log("Error, número menor que 0");
    } else {
      c++;
    }
  }
  sumafactorial(num, 1, 1); // Llamada a la función sumafactorial
};

main();