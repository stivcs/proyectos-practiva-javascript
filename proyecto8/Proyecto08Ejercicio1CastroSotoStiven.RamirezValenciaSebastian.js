/*
Fecha de publicación : 20/06/2023
Hora : 10:23 AM
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
descripcion : el programa convierte grados centigrados ingresado por el usuario a grados fahrenheit
Salvedades : el programa solo acepta valores de tipo numerico, para cualquier valor fuera de este tipo no garantizamos resultados
*/

var prompt = require('prompt-sync')();

function centigradosAFahrenheit (c) {
    // la variable se usa para guardar los grados fahrenheit que nos da al convertir
    var result = ((9/5)*c) + 32 ; 
    console.log(c,'°C son ',result," fahrenheit")
}
//esta variable se usa para guardar los grados centigrados
var c = prompt("Por favor digite los centigrados a convertir a Fahrenheit : "); //variable que guarda los grados centigrados
centigradosAFahrenheit(c);



