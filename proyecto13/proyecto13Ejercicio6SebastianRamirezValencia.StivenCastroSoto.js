/*
-Fecha de publicación: 20/06/2023
-Hora: 9:15am
- Versión de su código 2.8
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- triqui
*/

const prompt = require('prompt-sync')();

let triqui = "123456789";
let jugadorActual = 'X';

const imprimirTablero = () => {
  for (let i = 0; i < 3; i++) {
    console.log(triqui.slice(i * 3, (i + 1) * 3).split('').join(' | '));
    if (i < 2) {
      console.log("---------");
    }
  }
};

const realizarJugada = (posicion, jugador) => {
  if (triqui[posicion] !== 'X' && triqui[posicion] !== 'O') {
    triqui = triqui.slice(0, posicion) + jugador + triqui.slice(posicion + 1);
    imprimirTablero();
    if (verificarGanador(jugador)) {
      console.log(`¡Felicidades, jugador ${jugador} ganaste!`);
    } else if (triquiCompleto()) {
      console.log("Empate.");
    } else {
      cambiarJugador();
      solicitarJugada();
    }
  } else {
    console.log("La posición seleccionada está ocupada. Selecciona otra posición.");
    solicitarJugada();
  }
};

const verificarGanador = (jugador) => {
  const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],                                         
    [0, 3, 6], [1, 4, 7], [2, 5, 8],                                         
    [0, 4, 8], [2, 4, 6]                                                      
  ];

  for (const combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;
    if (triqui[a] === jugador && triqui[b] === jugador && triqui[c] === jugador) {
      return true;
    }
  }

  return false;
};

const triquiCompleto = () => {
  return !triqui.includes('1') && !triqui.includes('2') && !triqui.includes('3') &&
         !triqui.includes('4') && !triqui.includes('5') && !triqui.includes('6') && 
         !triqui.includes('7') && !triqui.includes('8') && !triqui.includes('9');
};

const cambiarJugador = () => {
  jugadorActual = (jugadorActual === 'X') ? 'O' : 'X';
};

const solicitarJugada = () => {
  const posicion = prompt(`Turno del jugador ${jugadorActual}. Ingrese una posición (1-9): `);
  const numeroPosicion = parseInt(posicion);
  if (numeroPosicion >= 1 && numeroPosicion <= 9) {
    realizarJugada(numeroPosicion - 1, jugadorActual);
  } else {
    console.log("Posición inválida. Elige una posición del 1 al 9.");
    solicitarJugada();
  }
};

console.log("Comienza el juego. El jugador X va primero.");
imprimirTablero();
solicitarJugada();