/*
Fecha de publicación: 20/06/2023
Hora: 6:12pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa forma una piramide de letras P
*/
/*26.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
    máximo de cuatro(4) ordenes “IMPRIMIR” )*/

    var prompt = require('prompt-sync')();                              // Se importa la libreria prompt-sync

    function imprimirZ(inicio, final) {                                 // Se crea la función imprimirZ    
        if (inicio <= final) {                                          // Se crea la condición si inicio es menor o igual a final
          process.stdout.write('Z');                                    // Se imprime en consola la letra Z
          imprimirZ(inicio + 1, final);                                 // Se imprime en consola la función imprimirZ con los parámetros inicio + 1 y final
        }
      }
      
      function imprimirEsp(inicio, final) {                             // Se crea la función imprimirEsp            
        if (inicio <= final) {                                          // Se crea la condición si inicio es menor o igual a final
          process.stdout.write(' ');                                    // Se imprime en consola un espacio
          imprimirEsp(inicio + 1, final);                               // Se imprime en consola la función imprimirEsp con los parámetros inicio + 1 y final
        }
      }
      
      function imprimir(fila, contador, final, finalZ) {                // Se crea la función imprimir
        if (fila <= 10) {                                               // Se crea la condición si fila es menor o igual a 10
          imprimirEsp(contador, finalZ);                                // Se imprime en consola la función imprimirEsp con los parámetros contador y finalZ
          imprimirZ(1, 1);                                              // Se imprime en consola la función imprimirZ con los parámetros 1 y 1
          imprimirEsp(contador, final);                                 // Se imprime en consola la función imprimirEsp con los parámetros contador y final      
          if (fila !== 10) {                                            // Se crea la condición si fila es diferente a 10
            imprimirZ(1, 1);                                            // Se imprime en consola la función imprimirZ con los parámetros 1 y 1
          }
          console.log();                                                // Se imprime en consola un salto de línea
          imprimir(fila + 1, contador, final - 2, finalZ + 1);          // Se imprime en consola la función imprimir con los parámetros fila + 1, contador, final - 2 y finalZ + 1
        }
      }
    
      imprimir(1, 1, 17, 0);                                            // Se imprime en consola la función imprimir con los parámetros 1, 1, 17 y 0