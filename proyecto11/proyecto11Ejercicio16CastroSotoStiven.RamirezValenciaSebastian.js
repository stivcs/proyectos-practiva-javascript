/*
Fecha de publicación: 20/06/2023
Hora: 5:53pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa forma una representación de la letra 'Z'.
*/

/**
 * Genera una representación de la letra 'Z' utilizando caracteres 'Z'.
 * @param {number} limite - Número de líneas para la representación de la letra 'Z'.
 */
function renglones(limite) {
  for (let renglon = 1; renglon <= limite; renglon++) {
    if (renglon === 1 || renglon === 7) {
      espacios(9);
      letras(1);
    }
    if (renglon === 2 || renglon === 6) {
      espacios(8);
      letras(3);
    }
    if (renglon === 3 || renglon === 5) {
      espacios(7);
      letras(5);
    }
    if (renglon === 4) {
      espacios(6);
      letras(7);
    }
    console.log(); // Salto de línea
  }
}

/**
 * Imprime un número determinado de espacios en blanco.
 * @param {number} espacio - Número de espacios en blanco a imprimir.
 */
function espacios(espacio) {
  for (let contador = 1; contador <= espacio; contador++) {
    process.stdout.write(" ");
  }
}

/**
 * Imprime un número determinado de letras 'Z'.
 * @param {number} cantidad - Número de letras 'Z' a imprimir.
 */
function letras(cantidad) {
  for (let contador = 1; contador <= cantidad; contador++) {
    process.stdout.write("Z");
  }
}

renglones(7);
