/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : muestra un patron de parejas de numeros enteros
*/
var prompt = require('prompt-sync')();
// Función para generar parejas de enteros
const generarParejas = () => {
  let ordenes = 0; // Contador de órdenes generadas

  // Ciclo for para generar las parejas de enteros
  for (let i = 0, j = 1; ordenes < 10; i += 2, j += 1) {
    // Imprimir la pareja de enteros (i, j)
    console.log(`${i} ${j}`);
    ordenes++; // Incrementar el contador de órdenes

    // Verificar si aún se pueden imprimir más parejas
    if (ordenes < 10) {
      // Imprimir la segunda pareja de enteros (i + 1, j)
      console.log(`${i + 1} ${j}`);
      ordenes++; // Incrementar el contador de órdenes
    }
  }
};

generarParejas();

  
  