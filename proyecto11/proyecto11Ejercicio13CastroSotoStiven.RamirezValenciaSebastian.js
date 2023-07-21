  /*
Fecha de publicación: 20/06/2023
Hora: 6:35pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa forma una pirámide ascendente de letras 'P'.
*/


for (let renglon = 1, numero; renglon <= 7; renglon++) {
    // Primer ciclo interno que imprime los espacios
    for (numero = -34; numero <= renglon - 1; numero++) {
      process.stdout.write(' ');
    }
  
    // Segundo ciclo interno que imprime las letras 'P'
    for (numero = 1; numero <= 13 - (renglon * 2) + 2; numero++) {
      process.stdout.write('P');
    }
  
    // Imprime una nueva línea al final de cada renglón
    console.log();
  }
