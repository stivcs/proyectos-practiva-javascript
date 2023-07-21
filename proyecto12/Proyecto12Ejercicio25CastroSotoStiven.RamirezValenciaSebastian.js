/*
- Fecha de publicación: 20-06-2023
- Hora: 21:53
- Versión de su código: 1
- Autores. Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descriptivo: Calcula el valor de sen(x) a través de serie de Taylor
*/

const prompt = require('prompt-sync')();

// Función para calcular el factorial de un número
const factorial = (n) => {
    let result = 1;
    while (n > 0) {
        result *= n;
        n--;
    }
    return result;
};

// Función para calcular el seno mediante la serie de Taylor
const seno = (c, x, t, z) => {
    while (c < t) {
        let r;
        r = (Math.pow(-1, c) * Math.pow(x, 2 * c + 1)) / factorial(2 * c + 1);
        z = z + r;
        c++;
    }
    return z;
};

const main = () => {
    console.log("Este programa da el resultado de sen(x) a través de una serie de Taylor");

    // Solicitar el número de términos y el valor de x al usuario
    let t = parseInt(prompt("Ingrese el número de términos de la serie: "));
    let x = parseFloat(prompt("Ingrese un valor para x: "));

    // Calcular el resultado
    let result = seno(1, x, t, x);

    // Imprimir el resultado con 8 decimales de precisión
    console.log(`El resultado es ${result.toFixed(8)}`);
};

main();