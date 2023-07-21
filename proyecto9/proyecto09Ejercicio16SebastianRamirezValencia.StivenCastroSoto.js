/*
Fecha de publicación: 21/06/2023
Hora: 1:34pm
Versión de su código: 1.2
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación

Este programa solicita al usuario que ingrese el número de piezas y el costo unitario de cada una. Luego, calcula el monto total de la compra y realiza diferentes cálculos según la condición establecida:

- Si el monto total de la compra es mayor a $500,000, se realizan los siguientes cálculos:
  - Se invierte el 55% del monto total.
  - Se solicita un préstamo del 30% del monto total.
  - El fabricante otorga un crédito del 15% del monto total.
  - Se calculan los intereses del 20% sobre el crédito del fabricante.

- Si el monto total de la compra es igual o menor a $500,000, se realizan los siguientes cálculos:
  - Se invierte el 70% del monto total.
  - No se solicita ningún préstamo.
  - El fabricante otorga un crédito del 30% del monto total.
  - Se calculan los intereses del 20% sobre el crédito del fabricante.

El programa muestra los resultados de los diferentes cálculos realizados.

*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese el número de piezas
const piezas = parseInt(prompt("Ingrese el número de piezas: "));

// Solicitar al usuario que ingrese el costo de la pieza
const costo = parseFloat(prompt("Ingrese el costo de la pieza: "));

// Calcular el monto total de la compra
const mtotal = costo * piezas;

// Función para calcular un porcentaje de un valor
function porcentaje(total, porcentaje) {
    return (total * porcentaje) / 100;
}

// Calcular los diferentes valores según la condición
let invertir, prestamo, fabricante, interes;

if (mtotal > 500000) {
    invertir = porcentaje(mtotal, 55);
    prestamo = porcentaje(mtotal, 30);
    fabricante = porcentaje(mtotal, 15);
    interes = porcentaje(fabricante, 20);
} else {
    invertir = porcentaje(mtotal, 70);
    prestamo = 0;
    fabricante = porcentaje(mtotal, 30);
    interes = porcentaje(fabricante, 20);
}

// Mostrar los resultados en la consola
console.log(`Cantidad invertida: $${invertir}`);
console.log(`Valor préstamo del banco: $${prestamo}`);
console.log(`Valor del crédito del fabricante: $${fabricante}`);
console.log(`Intereses cobrados por el fabricante: $${interes}`);
