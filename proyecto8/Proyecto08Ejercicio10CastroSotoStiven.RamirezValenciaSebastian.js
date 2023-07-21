/*
Fecha de publicación : 20/06/2023
Hora : 1:40 
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
descripcion : el programa recibe mph(millas por hora) y los convierte a m/s(metro sobre segundo)
Salvedades : el programa solo acepta valores de tipo numerico, para cualquier valor fuera de este tipo no garantizamos resultados
*/
var prompt = require('prompt-sync')();
//esta variables que guardan los datos solicitados
var mph = prompt("digite el valor de mph que desea convertir a m/s : "); //variable que guarda el valor de millas por hora


function mphAMs(mph) {
    //guarda las operaciones
    var ms = (mph * 1609.344) / 3600; //variable donde se guarda el vallor de mph correspondiende en m/s
    console.log(mph," mph es equivalente a : ",ms,"  m//s"); 
}

mphAMs(mph);