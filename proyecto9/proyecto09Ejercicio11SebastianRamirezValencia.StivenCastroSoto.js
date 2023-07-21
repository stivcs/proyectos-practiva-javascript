/*
-Fecha de publicación: 20/06/2023
-Hora: 11:19am
- Versión de su código 1.2
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- 
- Este programa, lee el valor de la compra del usuario y devuelve el valor a pagar con el descuento teniendo en cuenta las indicaciones 
salvedad: este programa solo recibe valores de tipo numerico por lo que si se ingresan otro tipo de dato no se garantizan los resultados 
*/


var prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese el valor de la compra
const compra = parseFloat(prompt("Ingrese el valor de la compra:"));

// Calcular el descuento aplicando el 20% sobre el valor de la compra
const descuento = compra * 0.20;

// Calcular el valor a pagar restando el descuento al valor de la compra
const resta = compra - descuento;

// Verificar si el valor de la compra es mayor a 100000
if (compra > 100000) {
  console.log(`El valor a pagar es de ${resta}`);
} else {
  console.log(`El valor a pagar es de ${compra}`);
}