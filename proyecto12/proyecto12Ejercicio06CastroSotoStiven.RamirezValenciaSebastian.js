/*
- Fecha de publicación: 20-06-2023
- Hora: 20:54
- Versión de su código: 1
- ing(c) sebastian ramirez / stiven castro soto
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descriptivo: calcula el factorial de un número
-Salvedades: funciona solo si se recibe un número por consola
*/

const prompt = require('prompt-sync')();

// Función para calcular el factorial de un número dado
const factorial = (num, i) => {
    let result = 1; // Almacena el resultado del factorial
    while (i <= num) {
        result = result * i;
        i++;
    }
    return result;
};

// Función principal del programa
const main = () => {
    let num; // Almacena el número ingresado por el usuario
    console.log("Este programa lee un número e imprime su factorial.");
    num = parseInt(prompt("Ingrese un número: "));
    if (num >= 0) {
        console.log(factorial(num, 1));
    }
};

main();