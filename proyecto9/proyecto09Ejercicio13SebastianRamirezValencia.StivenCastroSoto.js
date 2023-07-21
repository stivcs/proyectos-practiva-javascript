/*
Fecha de publicación: 20/06/2023
Hora: 12:34pm
Versión de su código: 1.5
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación

Este programa solicita al usuario que ingrese una actividad realizada y el tiempo en minutos dedicado a dicha actividad. Luego, calcula las calorías consumidas en función de la actividad y el tiempo ingresado.

Actividades y factor de calorías:
- Dormir: 1.08 calorías por minuto.
- Estar en reposo: 1.66 calorías por minuto.
*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese la actividad realizada entre comillas
const actividad = prompt("Ingrese la actividad realizada entre comillas: ");

// Solicitar al usuario que ingrese el tiempo en minutos de la actividad
const tiempo = parseFloat(prompt("Ingrese el tiempo en minutos de la actividad: "));

// Verificar si la actividad es "dormir"
if (actividad === "dormir") {
    // Calcular las calorías consumidas al dormir
    const calorias = tiempo * 1.08;
    console.log(`Al dormir ${tiempo} minutos consume ${calorias} calorías`);
} else if (actividad === "estar en reposo") {
    // Calcular las calorías consumidas al estar en reposo
    const calorias = tiempo * 1.66;
    console.log(`Al estar ${tiempo} minutos en reposo consume ${calorias} calorías`);
} else {
    console.log("La actividad no corresponde");
}
