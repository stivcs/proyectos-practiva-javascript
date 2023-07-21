/*
Fecha de publicación: 20/06/2023
Hora: 4:27pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa genera una representación de una pirámide de letras 'A' con un patrón ascendente y descendente.
*/

/**
 * Genera una cadena de espacios en blanco.
 * @param {number} contador - Valor del contador actual.
 * @param {number} cantidadespacios - Cantidad de espacios.
 */
function espacios(contador, cantidadespacios) {
  for (; contador < cantidadespacios; contador++) {
    process.stdout.write(" ");
  }
}

/**
 * Genera una cadena de letras 'A'.
 * @param {number} contador - Valor del contador actual.
 * @param {number} cantidadletras - Cantidad de letras 'A'.
 */
function letras(contador, cantidadletras) {
  for (; contador < cantidadletras; contador++) {
    process.stdout.write("A");
  }
}

/**
 * Genera una representación de una pirámide de letras 'A' con un patrón ascendente y descendente.
 * @param {number} limite - Número de líneas de la pirámide.
 */
function renglones(limite) {
  let contador = 0;
  let cantidadletras = 1;
  let cantidadespacios = 39;

  for (let renglon = 0; renglon < limite; renglon++) {
    espacios(contador, cantidadespacios);
    letras(contador, cantidadletras);

    console.log();

    if (renglon < 5) {
      cantidadletras++;
      cantidadespacios--;
    } else {
      cantidadletras--;
      cantidadespacios++;
    }
  }
}

renglones(11);
