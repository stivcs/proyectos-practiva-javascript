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
Este programa imprime una pirámide formada por letras utilizando recursión.
*/

function espacios(cant, cont) {
    // Función recursiva para imprimir espacios
    if (cont < cant) {
      process.stdout.write(" ");
      cont++;
      espacios(cant, cont);
    }
  }
  
  function figura(cant, cont, esp) {
    // Función recursiva para imprimir la figura (letras 'A')
    if (cont <= cant) {
      if (cont === 0) {
        espacios(esp, 0);
      }
      process.stdout.write("A");
      cont++;
      figura(cant, cont, esp);
    }
  }
  
  function numimp(max, num, esp) {
    // Función recursiva para imprimir la secuencia de figuras
    if (num < max) {
      figura(num, 0, esp);
      console.log("");
      num++;
      esp--;
      numimp(max, num, esp);
      num -= 2;
      esp += 2;
      figura(num, 0, esp);
      console.log("");
    }
  }
  
  function main() {
    var num = 0;
    var max = 6;
    var esp = 39;
    numimp(max, num, esp);
  }
  
  main();
  
