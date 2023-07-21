 /*
- Fecha de publicacion: 20 de junio 2023
- Hora 9:50pm
- Version 1
- ing(c) sebastian ramirez / stiven castro soto
- Lenguaje utilizado JavaScript
- Version del lenguaje 6.0 
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Hacer un programa de computador, de 
tal manera que lea desde el
teclado un numero entero y lo imprima al reves.
*/
// Importar el módulo 'readline' para leer la entrada del usuario
const readline = require('readline');

// Función para contar el número de dígitos en un número entero
const contador = (m, c) => {
  while (m > 1) {
    m = Math.floor(m / 10); // Dividir el número entre 10 para eliminar el dígito más a la derecha
    c++; // Incrementar el contador de dígitos
  }
  return c; // Retornar el contador de dígitos
};

// Función principal del programa
const main = () => {
  // Crear una interfaz para leer la entrada del usuario
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Este programa lee desde el teclado un número entero y lo imprime al revés.");
  rl.question("Ingrese un número: ", (input) => {
    let n = parseInt(input); // Convertir la entrada en un número entero
    let c = contador(n, 0); // Contar el número de dígitos del número ingresado
    let x, y, z = 0; // Variables auxiliares para invertir el número

    while (c > 0) {
      y = n; // Almacenar el valor original del número
      x = Math.floor(n / 10); // Dividir el número entre 10 para eliminar el dígito más a la derecha
      n = parseInt(x); // Actualizar el número sin el dígito más a la derecha
      x = y - (n * 10); // Calcular el dígito más a la derecha
      c--; // Decrementar el contador de dígitos
      z = z * 10 + x; // Construir el número invertido concatenando los dígitos
    }

    console.log(z); // Mostrar el número invertido en la consola
    rl.close(); // Cerrar la interfaz de lectura
  });
};

main(); // Llamar a la función principal para iniciar el programa