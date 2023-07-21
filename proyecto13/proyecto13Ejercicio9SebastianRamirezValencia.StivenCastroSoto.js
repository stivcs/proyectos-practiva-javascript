/*
-Fecha de publicación: 20/06/2023
-Hora: 1:20 am
- Versión de su código 2.4
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- ahorcado
*/
const prompt = require('prompt-sync')();

// Función para generar un número aleatorio entre un rango
var numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Variables iniciales
var vidas = 7;
let palabraOculta = [];
let letrasIntentadas = [];

// Palabras disponibles para adivinar
const palabra1 = "PEREIRA";
const palabra2 = "UNIVERSIDAD";
const palabra3 = "PROGRAMACION";
const palabra4 = "SISTEMAS";
const palabra5 = "INGENIERIA";
const palabra6 = "INTELIGENCIA";
const palabra7 = "ARTIFICIAL";
const palabra8 = "TABLERO";
const palabra9 = "COMPUTADOR";
const palabra10 = "EVALUAR";

// Convierte una cadena en mayúsculas
const mayuscula = (str) => {
    return str.toUpperCase();
};

// Arreglo con las palabras disponibles
const palabras = [
    palabra1,
    palabra2,
    palabra3,
    palabra4,
    palabra5,
    palabra6,
    palabra7,
    palabra8,
    palabra9,
    palabra10,
];

// Obtiene una palabra aleatoria de la lista de palabras
const palabraAleatoria = palabras[numeroAleatorio(0, 10)];

// Crea una cadena de espacios en blanco
const hacerEspacios = (final) => {
    let espacios = "";
    for (let i = 0; i < final; i++) {
        espacios += " ";
    }
    return espacios;
};

// Dibuja el muñeco del ahorcado según el número de errores
const munequito = (error) => {
    if (error === 7) {
        console.log(" JUEGO AHORCADO");
        console.log("+----+");
        console.log("|" + hacerEspacios(4) + "\t" + palabraOculta.join(" "));
        console.log("|");
        console.log("|" + hacerEspacios(4));
        console.log("|");
        console.log("-----");
    } else if (error === 6) {
        console.log(" JUEGO AHORCADO");
        console.log("+----+");
        console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
        console.log("|");
        console.log("|" + hacerEspacios(4));
        console.log("|");
        console.log("-----");
    } else if (error === 5) {
        console.log(" JUEGO AHORCADO");
        console.log("+----+");
        console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
        console.log("|" + hacerEspacios(4) + "|");
        console.log("|" + hacerEspacios(4));
        console.log("|");
        console.log("-----");
    } else if (error === 4) {
        console.log(" JUEGO AHORCADO");
        console.log("+----+");
        console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
        console.log("|" + hacerEspacios(3) + "/|");
        console.log("|" + hacerEspacios(4));
        console.log("|");
        console.log("-----");
    } else if (error === 3) {
        console.log(" JUEGO AHORCADO");
        console.log("+----+");
        console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
        console.log("|" + hacerEspacios(3) + "/|\\" + hacerEspacios(1, 1));
        console.log("|" + hacerEspacios(4));
        console.log("|");
        console.log("-----");
    } else if (error === 2) {
        console.log(" JUEGO AHORCADO");
        console.log("+----+");
        console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
        console.log("|" + hacerEspacios(3) + "/|\\" + hacerEspacios(1, 1));
        console.log("|" + hacerEspacios(4) + "|");
        console.log("|");
        console.log("-----");
    } else if (error === 1) {
        console.log(" JUEGO AHORCADO");
        console.log("+----+");
        console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
        console.log("|" + hacerEspacios(3) + "/|\\" + hacerEspacios(1, 1));
        console.log("|" + hacerEspacios(4) + "|");
        console.log("|" + hacerEspacios(3) + "/");
        console.log("-----");
    } else if (error === 0) {
        console.log(" JUEGO AHORCADO");
        console.log("+----+");
        console.log("|" + hacerEspacios(4) + "0\t" + palabraOculta.join(" "));
        console.log("|" + hacerEspacios(3) + "/|\\" + hacerEspacios(1, 1));
        console.log("|" + hacerEspacios(4) + "|");
        console.log("|" + hacerEspacios(3) + "/ " + "\\");
        console.log("-----");
        console.log("FIN DEL JUEGO");
    }
};

// Inicializa el arreglo palabraOculta con guiones bajos
const ocultarPalabra = () => {
    for (let i = 0; i < palabraAleatoria.length; i++) {
        palabraOculta[i] = "_";
    }
    return palabraOculta.join(" ");
};

// Verifica si la letra ingresada por el usuario ya fue intentada antes
const validarLetraYaIngresada = (letra) => {
    letra = mayuscula(letra);
    let letraYaIngresada = false;

    for (let i = 0; i < letrasIntentadas.length; i++) {
        if (letra == letrasIntentadas[i]) {
            letraYaIngresada = true;
            break;
        }
    }

    if (letraYaIngresada) {
        console.log("Letra ya ingresada");
    } else {
        letrasIntentadas.push(letra);
    }
};

// Verifica si la letra ingresada por el usuario está presente en la palabra a adivinar
const validarLetra = (letra) => {
    let menosVidas = false;
    for (let i = 0; i < palabraAleatoria.length; i++) {
        if (letra === palabraAleatoria[i]) {
            palabraOculta[i] = letra;
            menosVidas = true;
        }
    }
    if (!menosVidas) {
        vidas--;
    }
    return palabraOculta;
};

// Función principal del juego
const prueba = () => {
    ocultarPalabra();
    while (vidas >= 0) {
        if (palabraOculta.join("") === palabraAleatoria) {
            console.clear();
            console.log("¡Adivinaste la palabra correctamente!");
            break;
        } else {
            console.clear();
            console.log("Las letras ingresadas hasta ahora son: " + letrasIntentadas);
            console.log("vidas = " + vidas);
            munequito(vidas);
            if (vidas > 0) {
                var letra = prompt("Ingrese una letra: ");
            } else if (vidas == 0) {
                break;
            }
            letra = mayuscula(letra);
            validarLetra(letra);
            validarLetraYaIngresada(letra);
            prompt("Presione enter para continuar");
        }
    }
    if (vidas == 0) {
        console.log("Acabaste todas tus vidas, intentalo otra vez");
        console.log("La palabra a encontrar era: " + palabraAleatoria);
    }
};

// Inicia el juego
prueba();
