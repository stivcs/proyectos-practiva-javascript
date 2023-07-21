/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : muestra las tablas del 1 al 10 
*/
// Ciclo externo para las tablas del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}:`);
  
    // Ciclo interno para multiplicar del 1 al 10 por el número actual
    for (let j = 1; j <= 10; j++) {
      const resultado = i * j;
      console.log(`${i} x ${j} = ${resultado}`);
    }
  
    console.log('-----------------');
  }
  