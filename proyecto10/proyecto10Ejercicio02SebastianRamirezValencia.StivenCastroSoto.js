/*
Fecha de publicación: 20/06/2023
Hora: 2:23pm
Versión de su código: 1.5
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.
*/

console.log("Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.");
console.log("Los números a sumar son:");

// Definir una función recursiva para sumar los elementos de la serie de Fibonacci
function sumarFibonacci(acumula, n1, n2) {
    process.stdout.write(n1.toString());

    if (n2 > 100) {
        console.log(" y su suma es de: " + (acumula));
        return;
    } else {
        process.stdout.write(", ");
        sumarFibonacci(acumula + n2, n2, n1 + n2);
    }
}

sumarFibonacci(0, 0, 1);