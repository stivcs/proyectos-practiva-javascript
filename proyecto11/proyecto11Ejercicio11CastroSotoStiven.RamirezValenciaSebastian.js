/*
Fecha de publicación: 20/06/2023
Hora: 10:02pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa forma una pirámide ascendente de letras 'A'.
*/

/**
 * Imprime una pirámide ascendente de letras 'A'.
 */
for (let renglon = 1; renglon <= 25; renglon++) {
    for (let espacios = 1; espacios <= 79 - renglon + 1; espacios++) {
      process.stdout.write(" ");
    }
    for (let letra = 1; letra <= renglon; letra++) {
      process.stdout.write("A");
    }
    console.log();
  }
  