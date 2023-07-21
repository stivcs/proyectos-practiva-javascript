/*
Fecha de publicación: 20/06/2023
Hora: 3:10pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa imprime la tabla de multiplicar del 1 al 10, teniendo en cuenta que:
- Genera la tabla de multiplicar desde el número 1 hasta el número 10.
- Salvedad: No se requieren datos de entrada, el programa generará automáticamente la tabla de multiplicar.
*/

function imprimirTablaMultiplicar(i, j) {
    if (i > 10) {
      return;
    }
  
    if (j > 10) {
      imprimirTablaMultiplicar(i + 1, 1);
      return;
    }
  
    let resultado = i * j;
    console.log(`${i} x ${j} = ${resultado}`);
    
    imprimirTablaMultiplicar(i, j + 1);
  }
  
  imprimirTablaMultiplicar(1, 1);
  