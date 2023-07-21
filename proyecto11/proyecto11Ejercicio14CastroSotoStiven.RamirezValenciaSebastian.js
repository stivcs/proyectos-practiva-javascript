/*
Fecha de publicación: 20/06/2023
Hora: 7:45pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa forma una pirámide ascendente de letras 'P'.
*/

/**
 * Imprime una pirámide ascendente de letras 'P'.
 */
for (let renglon = 1, numero; renglon <= 7; renglon++) {
  let espacios = "";
  let letras = "";

  for (numero = 0; numero <= renglon - 1; numero++) {
    espacios += " ";
  }

  for (numero = 1; numero <= 13 - (renglon * 2) + 2; numero++) {
    letras += "P";
  }

  console.log(espacios + letras);
}
