/*
- Fecha de publicación: 20-06-2023
- Hora: 21:46
- Versión de su código: 1
- Autores. Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descriptivo: Calcula el valor de cosh(x) a través de serie de Taylor
*/

// Importar la librería 'prompt-sync' para solicitar datos al usuario
var prompt = require('prompt-sync')();

// Función para calcular el factorial de un número
const factorial = (i) => {
    let n = 1;
    while (i > 0) {
        n = n * i;
        i--;
    }
    return n;
};

// Función para calcular la aproximación del coseno hiperbólico mediante la serie de Taylor
const cosenoh = (c, x, t, z) => {
    while (c < t) {
        let r;
        r = Math.pow(x, 2 * c) / factorial(2 * c);
        z = z + r;
        c++;
    }
    return z;
};

// Función principal
const main = () => {
    console.log("Este programa calcula el resultado de cosh(x) mediante una serie de Taylor");

    // Solicitar al usuario el número de términos de la serie
    const t = parseInt(prompt("Ingrese el número de términos de la serie: "));

    // Solicitar al usuario un valor para x
    const x = parseFloat(prompt("Ingrese un valor para x: "));

    // Calcular el resultado de cosh(x)
    const result = cosenoh(1, x, t, x);

    // Mostrar el resultado en la consola
    process.stdout.write(`El resultado es ${result.toFixed(8)}`);
};

// Llamar a la función principal
main();