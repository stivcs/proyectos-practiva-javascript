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


function renglones(limite, renglon = 1) {
    // Función recursiva para imprimir los renglones
    if (renglon > limite) {
      return;
    }
  
    // Imprimir espacios y letras según el número de renglón
    if (renglon === 1 || renglon === 7) {
      espacios(9);
      letras(1);
    }
    if (renglon === 2 || renglon === 6) {
      espacios(8);
      letras(3);
    }
    if (renglon === 3 || renglon === 5) {
      espacios(7);
      letras(5);
    }
    if (renglon === 4) {
      espacios(6);
      letras(7);
    }
  
    console.log(); // Salto de línea
  
    // Llamada recursiva para el siguiente renglón
    renglones(limite, renglon + 1);
  }
  
  function espacios(espacio, contador = 1) {
    // Función recursiva para imprimir espacios
    if (contador > espacio) {
      return;
    }
  
    process.stdout.write(" ");
  
    // Llamada recursiva para el siguiente espacio
    espacios(espacio, contador + 1);
  }
  
  function letras(cantidad, contador = 1) {
    // Función recursiva para imprimir letras
    if (contador > cantidad) {
      return;
    }
  
    process.stdout.write("Z");
  
    // Llamada recursiva para la siguiente letra
    letras(cantidad, contador + 1);
  }
  
  // Llamada inicial para imprimir los renglones (con límite de 7)
  renglones(7);
  