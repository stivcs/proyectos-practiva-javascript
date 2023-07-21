/*
Fecha de publicación: 20/06/2023
Hora: 2:11pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34....... 
Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.
*/

console.log("Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va\nsumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......\nPara este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.");

// Definir una función recursiva para sumar los números de la serie de Fibonacci
function sumarFibonacci(a, b, terms) {
    process.stdout.write(a.toString());
    if (b < 10000) {
        process.stdout.write(", ");
        sumarFibonacci(b, a + b, terms + 1);
    }
}

// Llamar a la función sumarFibonacci con los primeros dos números de la serie
sumarFibonacci(0, 1, 1);