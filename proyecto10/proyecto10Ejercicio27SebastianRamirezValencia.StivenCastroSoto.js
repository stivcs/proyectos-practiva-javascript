var prompt = require('prompt-sync')();   // Importa la libreria prompt-sync

function ImprimirZ(Inicio, Final) {
    if (Inicio <= Final) {
      process.stdout.write("Z");
      ImprimirZ(Inicio + 1, Final);
    }
  }
  
  function ImprimirEsp(Inicio, Final) {
    if (Inicio <= Final) {
      process.stdout.write(" ");
      ImprimirEsp(Inicio + 1, Final);
    }
  }
  
  function Imprimir(Fila, Contador, Final, ContadorZ, FinalZ) {
    if (Fila <= 10) {
      ImprimirEsp(Contador, Final);
      ImprimirZ(1, 1);
      ImprimirEsp(ContadorZ, FinalZ);
      if (Fila !== 1) {
        ImprimirZ(1, 1);
      }
      console.log();
      Imprimir(Fila + 1, Contador, Final - 1, ContadorZ, FinalZ + 2);
    }
  }
  
  Imprimir(1, 1, 9, 2, 0);