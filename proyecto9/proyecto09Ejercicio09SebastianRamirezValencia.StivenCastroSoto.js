/*
-Fecha de publicación: 20/06/2023
-Hora: 11:32am
- Versión de su código 1.4
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
"Este programa lee dos valores. Interés(%) y Capital. Si el dinero recibido por intereses es mayor que $7000, se le indicará al inversionista que invierta, de lo contrario se le indicará que no debe invertir."
*/


var prompt = require('prompt-sync')();


// Mostrar el mensaje inicial al usuario
console.log("Este programa lee dos valores. Interés(%) y Capital. Si el dinero recibido por intereses es mayor que $7000, se le indicará al inversionista que invierta, de lo contrario se le indicará que no debe invertir.");

// Solicitar al usuario que ingrese el interés en %
const interes = parseFloat(prompt("Ingresa el interés en %:"));

// Solicitar al usuario que ingrese el capital a invertir en $
const capital = parseFloat(prompt("Ingresa el capital a invertir en $:"));

// Calcular los intereses utilizando el interés y el capital ingresados
const intereses = (capital * interes) / 100;

// Calcular el saldo sumando los intereses y el capital
const saldo = intereses + capital;

// Verificar si los intereses son mayores o iguales a $7000
if (intereses >= 7000) {
  console.log(`INVIERTA, SU SALDO SERÁ ${saldo}`);
} else {
  console.log("NO INVIERTA");
}