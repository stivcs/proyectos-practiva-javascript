/*
-Fecha de publicación 2023-06-20
-ing(c): sebastian ramirez / stiven castro soto 
- Nombre del lenguaje utilizado, JavaScript
- Versión del lenguaje utilizado, ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
*/

var prompt = require('prompt-sync')();                          // Se importa la libreria prompt-sync

function generarTernas(numero1, numero2, numero3) {             // Se crea la función generarTernas
    if (numero1 === 10) {                                       // Se crea la condición si numero1 es igual a 10
      return;                                                   // Se retorna                      
    }
  
    if (numero1 % 3 === 0) {                                    // Se crea la condición si numero1 módulo 3 es igual a 0
      console.log(`${numero1} ${numero2} ${numero3}`);          // Se imprime en consola la variable numero1, numero2 y numero3
      generarTernas(numero1 + 1, numero2 + 1, 1);               // Se imprime en consola la variable numero1 + 1, numero2 + 1 y 1
    } else {
      console.log(`${numero1} ${numero2} ${numero3}`);          // Se imprime en consola la variable numero1, numero2 y numero3
      generarTernas(numero1 + 1, numero2, numero3 + 1);         // Se imprime en consola la variable numero1 + 1, numero2 y numero3 + 1
    }
  }
  
  console.log("El siguiente programa generó las siguientes ternas de enteros:");    // Se imprime en consola el siguiente mensaje
  generarTernas(1, 1, 1);                                       // Se imprime en consola la variable 1, 1 y 1     