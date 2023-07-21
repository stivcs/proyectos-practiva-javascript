/*
Fecha de publicación: 23/06/2023
Versión de su código: 2
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa crea en pantalla un mapa de 60 columnas x 30 filas en modo de texto en el cual aparece de forma aleatoria o los cuales tomamos como referencia para buscar rectangulos dentro del elemento crado en pantalla y buscamos el rectangulo mas pequeño ,ademas señalamos los rectangulos encotrados en un nuevo mapa
*/
/**
 * Genera un número entero aleatorio dentro del rango especificado.
 * @param {number} min - El valor mínimo del rango (incluido).
 * @param {number} max - El valor máximo del rango (incluido).
 * @returns {number} - El número entero aleatorio generado.
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /**
   * Encuentra el rectángulo más pequeño dentro de una matriz que contiene ciertos valores.
   * @param {number[][]} matrix - La matriz que se analizará.
   * @returns {object} - Un objeto con las propiedades "width" y "height" que representan las dimensiones del rectángulo más pequeño encontrado.
   */
  function findSmallestRectangle(matrix) {
    let area = 60 * 30; // Área inicialmente se establece como el área máxima posible
    let minWidth = 0;
    let minHeight = 0;
    for (let i = 0; i < 60; i++) {
      for (let j = 0; j < 30; j++) {
        if (matrix[i][j] === 15) { // Se encuentra un punto de partida para un rectángulo
          for (let k = j + 1; k < 30; k++) {
            if (matrix[i][k] === 15) { // Se encuentra el segundo punto horizontal del rectángulo
              for (let l = i + 1; l < 60; l++) {
                if (matrix[l][j] === 15 && matrix[l][k] === 15) { // Se encuentran los dos puntos verticales del rectángulo
                  const width = k - j + 1;
                  const height = l - i + 1;
                  const currentArea = width * height;
  
                  if (currentArea < area) { // Se actualiza el rectángulo más pequeño encontrado hasta ahora
                    area = currentArea;
                    minWidth = width;
                    minHeight = height;
                  }
                }
              }
            }
          }
        }
      }
    }
    return { width: minWidth, height: minHeight };
  }
  
  /**
   * Crea una matriz de 60x30 y la llena con números enteros aleatorios.
   * @returns {number[][]} - La matriz generada.
   */
  function createMatrix() {
    const matrix = [];
  
    for (let i = 0; i < 60; i++) {
      matrix[i] = [];
      for (let j = 0; j < 30; j++) {
        matrix[i][j] = getRandomInt(0, 29);
      }
    }
  
    return matrix;
  }
  
  /**
   * Imprime la matriz en la consola, representando los valores 15 como "O" y los demás como ".".
   * @param {number[][]} matrix - La matriz que se imprimirá.
   */
  function printMatrix(matrix) {
    for (let i = 0; i < 60; i++) {
      for (let j = 0; j < 30; j++) {
        if (matrix[i][j] === 15) {
          process.stdout.write('O');
        } else {
          process.stdout.write('.');
        }
      }
      console.log();
    }
  }
  
  /**
   * Marca los rectángulos dentro de la matriz, reemplazando los valores no pertenecientes a los rectángulos con 50.
   * @param {number[][]} matrix - La matriz en la que se marcarán los rectángulos.
   */
  function markRectangles(matrix) {
    for (let i = 0; i < 60; i++) {
      for (let j = 0; j < 30; j++) {
        if (matrix[i][j] === 15) { // Se encuentra un punto de partida para un rectángulo
          for (let k = j + 1; k < 30; k++) {
            if (matrix[i][k] === 15) { // Se encuentra el segundo punto horizontal del rectángulo
              for (let l = i + 1; l < 60; l++) {
                if (matrix[l][j] === 15 && matrix[l][k] === 15) { // Se encuentran los dos puntos verticales del rectángulo
                  for (let a = i; a <= l; a++) {
                    for (let b = j; b <= k; b++) {
                      if (matrix[a][b] !== 15) {
                        matrix[a][b] = 50; // Se marca el valor que no pertenece al rectángulo con 50
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
  /**
   * Imprime la matriz marcada en la consola, representando los valores 50 como "x", los valores 15 como "O" y los demás como ".".
   * @param {number[][]} matrix - La matriz marcada que se imprimirá.
   */
  function printMarkedMatrix(matrix) {
    console.log();
    for (let i = 0; i < 60; i++) {
      for (let j = 0; j < 30; j++) {
        if (matrix[i][j] === 50) {
          process.stdout.write('x');
        } else if (matrix[i][j] === 15) {
          process.stdout.write('O');
        } else {
          process.stdout.write('.');
        }
      }
      console.log();
    }
  }
  
  // Genera una matriz aleatoria
  const matrix = createMatrix();
  
  // Imprime la matriz original
  printMatrix(matrix);
  
  // Marca los rectángulos dentro de la matriz
  markRectangles(matrix);
  
  // Imprime la matriz marcada
  printMarkedMatrix(matrix);
  
  // Encuentra el rectángulo más pequeño
  const smallestRectangle = findSmallestRectangle(matrix);
  console.log(
    `\nEl área del rectángulo más pequeño es de ${smallestRectangle.width} x ${smallestRectangle.height}`
  );
  