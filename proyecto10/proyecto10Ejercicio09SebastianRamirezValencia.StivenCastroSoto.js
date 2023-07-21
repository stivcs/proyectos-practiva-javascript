/*
Fecha de publicación: 20/06/2023
Hora: 3:10pm
Versión de su código: 1.7
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa pide el número de términos deseados de la serie de Bell y los imprime, teniendo en cuenta que:
- Serie de Bell: Esta serie cuenta el número de particiones no vacías de un conjunto de n elementos. Comienza con los números 1, 1 y los siguientes términos se calculan como la suma de los términos anteriores multiplicados por los números naturales consecutivos.
- Salvedad: Este programa toma como datos de entrada únicamente valores numéricos enteros positivos, de otro modo no se garantizan sus resultados.
*/

var prompt = require('prompt-sync')();

function coeficienteBinomial(n, k) {
  if (k === 0 || k === n) {
    return 1;
  } else {
    return coeficienteBinomial(n - 1, k - 1) + coeficienteBinomial(n - 1, k);
  }
}

function calcularTerminoBell(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let bellSum = 0;

    function calcularSumaTerminosAnteriores(k) {
      if (k < 0) {
        return 0;
      } else {
        const coefBinomial = coeficienteBinomial(n - 1, k);
        const terminoAnterior = calcularTerminoBell(k);
        return coefBinomial * terminoAnterior + calcularSumaTerminosAnteriores(k - 1);
      }
    }

    return calcularSumaTerminosAnteriores(n - 1);
  }
}

// Solicitar el número de términos por teclado
let numTerminos = parseInt(prompt("Ingrese el número de términos de la serie de Bell: "));
let terminos = [];

// Calcular los términos de la serie de Bell
for (let n = 0; n < numTerminos; n++) {
  terminos.push(calcularTerminoBell(n));
}

// Mostrar los términos obtenidos en la misma línea
console.log(`Los primeros ${numTerminos} términos de la serie de Bell son: ${terminos.join(", ")}.`);
