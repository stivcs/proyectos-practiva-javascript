/*
Fecha de publicación : 20/06/2023
Hora : 2:06 
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
descripcion : el programa recibe hora , minutos y segundos y devuelve lo equivalenteb en milisegundos
Salvedades : el programa solo acepta valores de tipo numerico, para cualquier valor fuera de este tipo no garantizamos resultados
*/
var prompt = require('prompt-sync')();
//esta variables que guardan los datos solicitados
var hora = prompt("digite el valor de la hora : "),  //variable que guarda las horas
minutos = prompt("digite el valor de la minutos : "), //variable que guarda los minutos
segundos = prompt("digite el valor de la segundos : "); //variable que guarda los segundos


function miliSegundos(h,m,s) {
    //guarda las operaciones
    var ms = (s*1000) + (m * 60000) + (h * 3600000); // variable que guarda los milisegundos 
    console.log(h," horas ",m," minutos ",s," segundos es equivalente a : ",ms,"  millisegundos"); //muestra el resultado 
}

miliSegundos(hora,minutos,segundos); //el llamado a la funcion que convierte hora , minutos y segundos a milisegundos