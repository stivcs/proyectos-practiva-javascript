/*
Fecha de publicación: 20/06/2023
Hora: 12:43pm
Versión de su código: 1.6
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación

Este programa solicita al usuario que ingrese el precio original y la clave de un artículo. Luego, aplica descuentos según la clave y muestra el precio del artículo con descuento.

Claves y descuentos:
- Clave 1: Descuento del 10%.
- Clave 2: Descuento del 20%.
*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese el precio original del artículo
const precio = parseFloat(prompt("Ingrese el precio original del artículo: "));

// Solicitar al usuario que ingrese la clave del artículo
const clave = parseFloat(prompt("Ingrese la clave del artículo: "));

// Calcular los descuentos aplicados según la clave del artículo
const descuentoClave1 = precio * 0.10;
const descuentoClave2 = precio * 0.20;

console.log(`La clave del artículo es: ${clave}`);
console.log(`El precio original del artículo es: ${precio}`);

// Verificar si la clave del artículo es igual a 1
if (clave === 1) {
    // Calcular el precio del artículo con descuento para la clave 1
    const precioDescuento = precio - descuentoClave1;
    console.log(`El precio del artículo con descuento es: ${precioDescuento}`);
} else {
    // Calcular el precio del artículo con descuento para la clave 2
    const precioDescuento = precio - descuentoClave2;
    console.log(`El precio del artículo con descuento es: ${precioDescuento}`);
}
