let turno = 0

function pasarSiguienteTurno() {
  turno = turno + 1;
  const elementoDiv = document.getElementById("turno");
  if (elementoDiv !== null && elementoDiv !== undefined){
    elementoDiv.innerText = `${turno}`.padStart(2, "0");
  };
};


const botonSiguiente = document.getElementById("botonSiguiente");
if(botonSiguiente !== null && botonSiguiente !== undefined && botonSiguiente instanceof HTMLButtonElement) {
    botonSiguiente.addEventListener("click" ,() => {
        pasarSiguienteTurno();
    });
};

function volverTurnoAnterior() {
    if (turno > 0){
    turno = turno -1 ;
    const elementoDiv = document.getElementById("turno");
    if (elementoDiv !== null && elementoDiv !== undefined){
        elementoDiv.innerText = `${turno}`.padStart(2, "0");
    };
    }
    
  };
  
 
  const botonAnterior = document.getElementById("botonAnterior");
  if(botonAnterior !== null && botonAnterior !== undefined && botonAnterior instanceof HTMLButtonElement) {
      botonAnterior.addEventListener("click" ,() => {
          volverTurnoAnterior();
      });
  };

  function resetear() {
    turno = 0;
    const elementoDiv = document.getElementById("turno");
    if (elementoDiv !== null && elementoDiv !== undefined){
      elementoDiv.innerText = `${turno}`.padStart(2, "0");
    };
  };

  const botonReset = document.getElementById("botonReset");
  if(botonReset !== null && botonReset !== undefined && botonReset instanceof HTMLButtonElement) {
      botonReset.addEventListener("click" ,() => {
          resetear();
      });
  };

function enviarNumero () {
    const elementoInput = document.getElementById("numeroManual");
    if(elementoInput !== null && elementoInput !== undefined && elementoInput instanceof HTMLInputElement) {
        turno = parseInt(elementoInput.value);
        const elementoDiv = document.getElementById("turno");
        if (elementoDiv !== null && elementoDiv !== undefined){
          elementoDiv.innerText = `${turno}`.padStart(2, "0");
        };
    }
};
const botonEnviar = document.getElementById("botonEnviar");
 if(botonEnviar !== null && botonEnviar !== undefined && botonEnviar instanceof HTMLButtonElement){
    botonEnviar.addEventListener("click", () => { 
        enviarNumero();
    })
 }


