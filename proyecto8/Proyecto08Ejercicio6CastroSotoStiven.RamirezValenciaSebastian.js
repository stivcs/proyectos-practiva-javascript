/*
Fecha de publicación : 20/06/2023
Hora : 11:00 
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
descripcion : el programa recibe minutos y nos dice cuantas horas y minutos son
Salvedades : el programa solo acepta valores de tipo numerico, para cualquier valor fuera de este tipo no garantizamos resultados
*/
var prompt = require('prompt-sync')();
//esta variable se usa para guardar los minutos
var minutos = prompt("digite el cantidad de minutos : ");

function horaYMinutos(m) {
    //guardan el resultado de la operacion
    var hora = parseInt(m / 60); //variable que guarda cunatas horas son n minutos
    var minuto = m % 60 ; //variable que guarda los minutos sobrantes de la hora
    console.log(m," minutos es equivalente a ",hora," horas y ",minuto," minutos");
}

horaYMinutos(minutos);
