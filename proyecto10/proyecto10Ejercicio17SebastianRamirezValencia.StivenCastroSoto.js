/*
-Fecha de publicación 2023-06-20
-ing(c): sebastian ramirez / stiven castro soto 
- Nombre del lenguaje utilizado, JavaScript
- Versión del lenguaje utilizado, ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
*/


console.log("Este programa genera las siguientes parejas de enteros:");

function Parejas(numero1, numero2) {
  if (numero1 === 10) {
    return; // Termina la ejecución de la función si numero1 es igual a 10
  } else {
    if ((numero1 % 2) > 0.5) {
      // Si el residuo de numero1 dividido por 2 es mayor a 0.5
      console.log(numero1, numero2); // Imprime la pareja de enteros
      Parejas(numero1 + 1, numero2 + 1); // Llama a Parejas incrementando ambos números en 1
    } else {
      console.log(numero1, numero2); // Imprime la pareja de enteros
      Parejas(numero1 + 1, numero2); // Llama a Parejas incrementando solo numero1 en 1
    }
  }
}

Parejas(0, 1); // Llama a la función Parejas con los valores iniciales 0 y 1
