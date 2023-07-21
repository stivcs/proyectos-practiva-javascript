/*
Fecha de publicación: 20/06/2023
Hora: 5:53pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa forma una piramide de letras P
*/

var prompt = require('prompt-sync')();                           // Se importa la libreria prompt-sync

function imprimirP(inicio, final) {                             // Se crea la función imprimirP                      
    if (inicio <= final) {                                      // Se crea la condición si inicio es menor o igual a final
      process.stdout.write('P');                                // Se imprime en consola la letra P
      imprimirP(inicio + 1, final);                             // Se imprime en consola la función imprimirP con los parámetros inicio + 1 y final
    }
  }
  
  function imprimirEsp(inicio, final) {                         // Se crea la función imprimirEsp
    if (inicio <= final) {                                      // Se crea la condición si inicio es menor o igual a final
      process.stdout.write(' ');                                // Se imprime en consola un espacio
      imprimirEsp(inicio, final - 1);                           // Se imprime en consola la función imprimirEsp con los parámetros inicio y final - 1
    }
  }
  
  function imprimir(fila, contador, final, finalP) {            // Se crea la función imprimir
    if (fila <= 7) {                                            // Se crea la condición si fila es menor o igual a 7
      imprimirEsp(contador, final);                             // Se imprime en consola la función imprimirEsp con los parámetros contador y final
      imprimirP(contador, finalP);                              // Se imprime en consola la función imprimirP con los parámetros contador y finalP
      console.log();                                            // Se imprime en consola un salto de línea 
      imprimir(fila + 1, contador, final + 1, finalP - 2);      // Se imprime en consola la función imprimir con los parámetros fila + 1, contador, final + 1 y finalP - 2
    }
  }
  
  imprimir(1, 1, 34, 13);                                       // Se imprime en consola la función imprimir con los parámetros 1, 1, 34 y 13
  