/*
Fecha de publicación: 20/06/2023
Hora: 3:37pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa pide el número de términos deseados en la serie triangular y la imprime, teniendo en cuenta que:
- Serie triangular: Esta serie genera una secuencia de números en forma triangular, donde cada término es la suma de los dos términos anteriores.
- Salvedad: Este programa toma como datos de entrada únicamente valores numéricos enteros no negativos, de otro modo no se garantizan sus resultados.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el número de términos deseados en la serie triangular: ', function(n) {
  generarSerieTriangular(1, 3, n);
  rl.close();
});

function generarSerieTriangular(a, b, n) {
  if (n === 0) {
    return;
  } else {
    process.stdout.write(a + ', ');
    generarSerieTriangular(b, b - a + b + 1, n - 1);
  }
}