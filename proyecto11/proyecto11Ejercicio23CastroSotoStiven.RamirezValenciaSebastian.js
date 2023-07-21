/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : Cálculo de la función cosh(x) utilizando una serie de taylor 
*/
var prompt = require('prompt-sync')();

// Función para calcular el coseno hiperbólico de x
const calcularCosh = () => {
    // Solicitar al usuario el valor de x
    const x = parseFloat(prompt("Ingrese el valor de x:"));
  
    // Solicitar al usuario el número de términos (m)
    const m = parseInt(prompt("Ingrese el número de términos (m):"));
  
    let sumaTerminos = 1; // Inicializar la suma de términos con el primer término (1)
  
    console.log("Términos:");
  
    // Mostrar el primer término
    console.log("Término 1:", 1);
  
    for (let i = 1; i < m; i++) {
      const termino = Math.pow(x, 2 * i) / factorial(2 * i);
      sumaTerminos += termino;
  
      // Mostrar cada término con su número correspondiente
      console.log("Término", i + 1, ":", termino);
    }
  
    console.log("La suma de los términos es:", sumaTerminos);
  };
  
  // Función para calcular el factorial de un número
  const factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = 2; i <= n; i++) {
        resultado *= i;
      }
      return resultado;
    }
  };
  
  calcularCosh();
  