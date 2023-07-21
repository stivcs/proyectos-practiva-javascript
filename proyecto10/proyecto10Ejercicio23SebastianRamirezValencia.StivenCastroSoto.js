/*
Fecha de publicación: 20/06/2023
Hora: 5:53pm
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa forma una piramide de letras P
*/

function ImprimirP(Inicio, Final) {
    if (Inicio <= Final) {
      process.stdout.write("P");  // Imprime la letra 'P'
      ImprimirP(Inicio + 1, Final);  // Llamada recursiva con Inicio incrementado en 1
    }
  }
  
  function ImprimirEsp(Inicio, Final) {
    if (Inicio <= Final) {
      process.stdout.write(" ");  // Imprime un espacio en blanco
      ImprimirEsp(Inicio, Final - 1);  // Llamada recursiva con Final decrementado en 1
    }
  }
  
  function Imprimir(Fila, Contador, Final, FinalP) {
    if (Fila <= 7) {
      ImprimirEsp(Contador, Final);  // Imprime los espacios en blanco correspondientes a la fila actual
      ImprimirP(Contador, FinalP);  // Imprime las letras 'P' correspondientes a la fila actual
      console.log();  // Imprime un salto de línea
      Imprimir(Fila + 1, Contador, Final + 1, FinalP - 2);  // Llamada recursiva con Fila incrementada en 1, Final incrementado en 1 y FinalP decrementado en 2
    }
  }
  
  Imprimir(1, 1, 0, 13);  // Llamada inicial para generar la pirámide