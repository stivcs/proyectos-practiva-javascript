 /*
- Fecha de publicacion: 20 de junio 2023
- Hora 11:10pm
- Version 1
- Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
- Lenguaje utilizado JavaScript
- Version del lenguaje 6.0 
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Hacer un programa diseñado para imprimir una figura con forma de moño 
*/
// Función para imprimir espacios en blanco
const espacios = (cant, cont) => {
    while (cont < cant) {
      process.stdout.write(" "); // Mostrar un espacio en blanco en la consola
      cont++; // Incrementar el contador de espacios
    }
  };
  
  // Función para imprimir letras en su cantidad correspondiente
  const letras = (cant, cont) => {
    while (cont <= cant) {
      process.stdout.write("A"); // Mostrar la letra "A" en la consola
      cont++;
    }
  };
  
  // Función para generar una línea de la figura
  const figura = (cant, cont, esp1, esp2) => {
    if (cant === 4) {
      espacios(esp1, 0); // Llamar a la función 'espacios' para imprimir los espacios iniciales
      letras(7, cont); // Llamar a la función 'letras' para imprimir las letras "A"
    } else {
      espacios(esp1, 0); // Llamar a la función 'espacios' para imprimir los espacios iniciales
      letras(cant, cont); // Llamar a la función 'letras' para imprimir las letras "A"
      espacios(esp2, 0); // Llamar a la función 'espacios' para imprimir los espacios intermedios
      letras(cant, cont); // Llamar a la función 'letras' para imprimir las letras "A"
    }
  };
  
  // Función para generar y mostrar la figura completa
  const numimp = (max, esp1, esp2) => {
    let i = 1;
    let n = 1;
    while (n <= max) {
      figura(n, 1, esp1, esp2); // Llamar a la función 'figura' para generar y mostrar una línea de la figura
      process.stdout.write("\n"); // Mostrar un salto de línea en la consola
      n++;
      esp2 -= 2; // Decrementar la cantidad de espacios intermedios para la siguiente línea
    }
    i = 1;
    while (i <= max) {
      esp2 += 2; // Incrementar la cantidad de espacios intermedios para la siguiente línea
      figura(max - i, 1, esp1, esp2 + 2); // Llamar a la función 'figura' para generar y mostrar una línea invertida de la figura
      process.stdout.write("\n"); // Mostrar un salto de línea en la consola
      i++;
    }
  };
  
  const main = () => {
    const max = 4; // Máximo número de letras en una línea
    const esp1 = 27; // Cantidad de espacios iniciales
    let esp2 = 5; // Cantidad de espacios intermedios
    numimp(max, esp1, esp2); // Llamar a la función 'numimp' para generar y mostrar la figura completa
  };
  
  main();