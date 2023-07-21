/*
Fecha de publicación: 20/06/2023
Hora: 1:11am
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa imprime una figura en forma de pirámide utilizando recursión.
*/


function espacios(cant, cont) {
    if (cont < cant) {
        process.stdout.write(" "); // Imprimir un espacio en blanco
        cont++; // Incrementar el contador
        espacios(cant, cont); // Llamar recursivamente a la función
    }
}


function letras(cant, cont) {
    if (cont <= cant) {
        process.stdout.write("A"); // Imprimir una letra 'A'
        letras(cant, cont + 1); // Llamar recursivamente a la función
    }
}


function figura(cant, cont, esp1, esp2) {
    if (cant === 4) {
        espacios(esp1, 0); // Imprimir espacios en blanco antes de la primera parte de la figura
        letras(7, cont); // Imprimir las letras correspondientes a la primera parte de la figura
    } else {
        espacios(esp1, 0); // Imprimir espacios en blanco antes de cada parte de la figura
        letras(cant, cont); // Imprimir las letras correspondientes a la primera parte de la figura
        espacios(esp2, 0); // Imprimir espacios en blanco entre las dos partes de la figura
        letras(cant, cont); // Imprimir las letras correspondientes a la segunda parte de la figura
    }
}


function numimp(max, num, esp1, esp2) {
    if (num <= max) {
        figura(num, 1, esp1, esp2); // Imprimir una fila de la figura
        process.stdout.write("\n"); // Imprimir un salto de línea
        numimp(max, num + 1, esp1, esp2 - 2); // Llamar recursivamente a la función para imprimir las filas restantes
        figura(num - 1, 1, esp1, esp2 + 2); // Imprimir la segunda parte de las filas ya impresas
        process.stdout.write("\n"); // Imprimir un salto de línea
    }
}

/**
 * Función principal del programa.
 */
function main() {
    const max = 4; // Número máximo de filas de la figura
    const num = 1; // Número actual de filas
    const esp1 = 27; // Cantidad de espacios en blanco antes de la primera parte de la figura
    const esp2 = 5; // Cantidad de espacios en blanco entre las dos partes de la figura
    numimp(max, num, esp1, esp2); // Llamar a la función para imprimir la figura
}

main(); // Iniciar la ejecución del programa
