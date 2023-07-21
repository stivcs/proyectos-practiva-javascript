/*
Fecha de publicación: 20/06/2023
Hora: 7:23pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa forma una pirámide invertida de letras.
*/

/**
 * Imprime una pirámide invertida de letras.
 */
for (let renglon = 1, numero, letra = 80; renglon <= 7; renglon++) {
  for (numero = 0; numero <= renglon - 1; numero++) {
    process.stdout.write(' ');
  }
  for (numero = 1; numero <= 13 - (renglon * 2) + 2; numero++) {
    process.stdout.write(String.fromCharCode(letra));
  }
  console.log();
  letra -= 2;
}
