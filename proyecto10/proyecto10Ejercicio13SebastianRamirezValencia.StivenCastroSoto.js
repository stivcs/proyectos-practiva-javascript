/*
Fecha de publicación: 20/06/2023
Hora: 3:10pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa permite al usuario ingresar una lista de números y luego realiza varios cálculos basados en dicha lista, teniendo en cuenta que:
- Se solicita al usuario ingresar números hasta un máximo de 75.
- Se valida que los números ingresados sean diferentes de cero y no se hayan ingresado previamente.
- Se realiza el cálculo de la cantidad de números mayores a 150, el mayor número encontrado, el menor número encontrado, la cantidad de números negativos encontrados y el promedio de los números positivos encontrados.
- Salvedad: Este programa utiliza la biblioteca 'prompt-sync' para la entrada de números desde la consola.
*/

const prompt = require('prompt-sync')();

function leerNumeros(numeros = [], i = 1) {
  if (i > 75) {
    return numeros;
  }

  let num = Number(prompt(`Ingrese el número ${i}: `));

  if (num !== 0 && !numeros.includes(num)) {
    numeros.push(num);
    return leerNumeros(numeros, i + 1);
  } else {
    console.log("Debe ingresar un número diferente a cero y que no se haya ingresado previamente.");
    return leerNumeros(numeros, i);
  }
}

let numeros = leerNumeros();

let cantidadMayores150 = numeros.filter(num => num > 150).length;
let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);
let cantidadNegativos = numeros.filter(num => num < 0).length;
let positivos = numeros.filter(num => num > 0);
let promedioPositivos = positivos.length > 0 ? positivos.reduce((a, b) => a + b) / positivos.length : 0;

console.log(`Cantidad de números mayores a 150: ${cantidadMayores150}`);
console.log(`Mayor número encontrado: ${mayor}`);
console.log(`Menor número encontrado: ${menor}`);
console.log(`Cantidad de números negativos encontrados: ${cantidadNegativos}`);
console.log(`Promedio de los números positivos encontrados: ${promedioPositivos}`);
