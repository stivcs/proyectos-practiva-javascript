/*
Fecha de publicación : 20/06/2023
Hora : 10:43 
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
descripcion : el programa recibe hora y minutos y nos dice cuantos minutos son 
Salvedades : el programa solo acepta valores de tipo numerico, para cualquier valor fuera de este tipo no garantizamos resultados
*/
var prompt = require('prompt-sync')();
//estas variables se usan para guardar las horas y minutos
var hora = prompt("digite la cantidad de horas : "),
minutos = prompt("digite el cantidad de minutos : ")

function minutosTotal(h,m) {
    //guarda el resultado de la operacion
    var result = (h*60) + parseInt(m); //variable donde se guarda el valor de minutos que es una determinada hora con minutos 
    console.log(h," horas y ",m," minutos equivale a ",result," minutos");
}

minutosTotal(hora,minutos);
