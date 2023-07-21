/*
Fecha de publicación : 20/06/2023
Hora : 10:34 
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
descripcion : el programa recibe un radio de una esfera y nos devuelve su volumen
Salvedades : el programa solo acepta valores de tipo numerico, para cualquier valor fuera de este tipo no garantizamos resultados
*/

var prompt = require('prompt-sync')();
//esta constante es para tener el numero pi 
const PI = 3.1415926 ;
//esta variable se utiliza para guardar el radio
var radio = prompt("por favor digite el radio de la esfera : ")
function volumenEsfera (r) {
    var volumen = ((4/3)*PI*(r**3)); //variable que se usa para guardar el volumen de la esfera
    console.log("el volumen de una esfera de radio ",r," es de : ",volumen);
}

volumenEsfera(radio);
