/*
Fecha de publicación: 20/06/2023
Hora: 1:23pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa solicita al usuario que ingrese el número de camisetas y el precio unitario de cada una. Luego, calcula el precio total de la compra y aplica descuentos según la cantidad de camisetas compradas.

Descuentos aplicados:
- Más de 3 camisetas: Descuento del 20%.
- Menos de 3 camisetas: Descuento del 10%.
*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese el número de camisetas
const camisetas = parseInt(prompt("Ingrese el número de camisetas: "));

// Solicitar al usuario que ingrese el precio
const precio = parseFloat(prompt("Ingrese el precio: "));

// Calcular el precio total de la compra
const total = camisetas * precio;

console.log(`El total a pagar por la compra de ${camisetas} camisetas es de: ${total}`);

// Verificar si el número de camisetas es mayor o igual a 3
if (camisetas >= 3) {
    // Calcular el descuento aplicado para más de 3 camisetas
    const descuento = total * 0.20;
    const precioDescuento = total - descuento;
    console.log(`El total a pagar con descuento es de: ${precioDescuento}`);
} else {
    // Calcular el descuento aplicado para menos de 3 camisetas
    const descuento = total * 0.10;
    const precioDescuento = total - descuento;
    console.log(`El total a pagar con descuento es de: ${precioDescuento}`);
}
