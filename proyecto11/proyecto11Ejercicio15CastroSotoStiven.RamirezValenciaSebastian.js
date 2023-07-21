/*
Fecha de publicación: 20/06/2023
Hora: 4:56pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa forma una representación de la letra 'A' en forma de pirámide.
*/

/**
 * Genera una cadena de espacios en blanco.
 * @param {number} espacio - Número de espacios en blanco a generar.
 * @returns {string} - Cadena de espacios en blanco.
 */
const espacios = (espacio) => {
  let output = "";
  for (let contador = 1; contador <= espacio; contador++) {
    output += " ";
  }
  return output;
}

for (let renglon = 1; renglon <= 7; renglon++) {
  if (renglon === 1 || renglon === 7)
    console.log(espacios(27) + "A     A");

  if (renglon === 2 || renglon === 6)
    console.log(espacios(27) + "AA   AA");

  if (renglon === 3 || renglon === 5)
    console.log(espacios(27) + "AAA AAA");

  if (renglon === 4)
    console.log(espacios(27) + "AAAAAAA");
}
