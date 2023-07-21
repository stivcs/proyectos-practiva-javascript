/*
-Fecha de publicación: 20/06/2023
-Hora: 2:13pm
- Versión de su código 1.2
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
-  este programa realiza un determinado calculo dependiendo de la cantidad de docenas y el precio de las mismas
*/


var prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese el número de docenas
const docena = parseInt(prompt("Ingrese el número de docenas: "));

// Solicitar al usuario que ingrese el precio por docena
const precio = parseFloat(prompt("Ingrese el precio por docena: "));

// Calcular el monto total de la compra
const mtotal = docena * precio;

// Definir una función para calcular el porcentaje de un total
function porcentaje(total, porcentaje) {
  return (total * porcentaje) / 100;
}

// Calcular el descuento en función del monto total de la compra
const descuento1 = porcentaje(mtotal, 15);
const descuento2 = porcentaje(mtotal, 10);

// Verificar si el número de docenas es mayor a 3
if (docena > 3) {
  console.log("Monto total de la compra:", mtotal);
  console.log("Monto total del descuento:", descuento1);
  console.log("Monto total a pagar:", mtotal - descuento1);
  console.log("Unidades de obsequio:", docena - 3);
} else {
  console.log("Monto total de la compra:", mtotal);
  console.log("Monto total del descuento:", descuento2);
  console.log("Monto total a pagar:", mtotal - descuento2);
  console.log("Unidades de obsequio: 0");
}