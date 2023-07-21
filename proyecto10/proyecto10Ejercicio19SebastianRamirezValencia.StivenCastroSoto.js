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
Este programa imprime un patrón en forma de letra A utilizando recursión y setTimeout.
*/


function Imp(Inicio, Final) {
  if (Inicio <= Final) {
      process.stdout.write("A"); // Imprimir la letra "A"
      Imp(Inicio + 1, Final); // Llamar recursivamente a la función incrementando Inicio en 1
  }
}


function Espacio(Inicio, Final) {
  if (Inicio <= Final) {
      process.stdout.write(" "); // Imprimir un espacio en blanco
      Espacio(Inicio + 1, Final); // Llamar recursivamente a la función incrementando Inicio en 1
  }
}


function Aplicar(Vertical, Contador, Final, Contador1, Final1) {
  if (Vertical <= 40) {
      setTimeout(() => {
          process.stdout.write("\n".repeat(27)); // Imprimir saltos de línea para crear espacio vertical
          Espacio(Contador1, Final1); // Imprimir los espacios en blanco después de la letra "A"
          Imp(1, 1); // Imprimir la letra "A"
          Espacio(Contador, Final); // Imprimir los espacios en blanco antes de la letra "A"
          if (Vertical !== 10) {
              Imp(1, 1); // Imprimir la letra "A" adicional si no es la décima iteración
          }
          console.log(); // Imprimir un salto de línea adicional
          Aplicar(Vertical + 1, Contador, Final - 2, Contador1, Final1 + 1); // Llamar recursivamente a la función con los valores actualizados
      }, 1000); // Retrasar la ejecución de cada iteración en 1000 milisegundos (1 segundo)
  }
}

Aplicar(1, 1, 78, 1, 0); // Iniciar la aplicación del patrón de impresión
