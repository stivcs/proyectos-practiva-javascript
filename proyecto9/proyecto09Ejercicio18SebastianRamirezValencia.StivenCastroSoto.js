/*
-Fecha de publicación: 20/06/2023
-Hora: 1:156pm
- Versión de su código 1.1
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa, calcula el valor a pagar segun el tiempo de estacionamiento
*/


var prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese el tiempo de estacionamiento en horas (si es necesario)
const horas = parseInt(prompt("Digite el tiempo de estacionamiento en horas si es el caso: "));

// Solicitar al usuario que ingrese el tiempo de estacionamiento en minutos (si es necesario)
const minutos = parseInt(prompt("Digite el tiempo de estacionamiento en minutos si es el caso: "));

// Calcular el valor a pagar en función de las horas ingresadas
const conversionh = horas * 1800;

// Calcular el valor a pagar en función de los minutos ingresados
const conversionm = minutos * (1800 / 60);

// Sumar los valores de conversión para obtener el total a pagar
const sum = conversionh + conversionm;

// Imprimir el mensaje con el total a pagar
console.log("El cliente debe pagar por el estacionamiento de su vehículo:", sum);
