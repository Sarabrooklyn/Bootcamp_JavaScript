import {
    partida,
} from "./model";

import {
    generarNumeroAleatorio,
    generarNumeroCarta,
    obtenerPuntosCarta,
    sumarPuntos,
    gestionarEstadoPartida
} from "./motor";

const mostrarPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
     if (elementoPuntuacion !== null && elementoPuntuacion !== undefined && elementoPuntuacion instanceof HTMLDivElement) {
      elementoPuntuacion.innerHTML = `${partida.puntuacionJugador}`;
    }
  }

const pintarCarta = (urlCarta: string) => {
	const elementoImagen = document.getElementById("cartaBocaArriba");
		if (elementoImagen !== null && elementoImagen !== undefined && elementoImagen instanceof HTMLImageElement) {
		elementoImagen.src = urlCarta;
	}
}

export const cargarPartida = () => {
    const botonDameCarta = document.getElementById("botonDameCarta");
    if (botonDameCarta !== null && botonDameCarta !== undefined && botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.addEventListener('click', () => {
            dameCarta();
        })
    }
    const botonReset = document.getElementById("reset");
  if (botonReset !== null && botonReset !== undefined && botonReset instanceof HTMLButtonElement) {
    botonReset.addEventListener("click" , () => resetear());
  }
  const botonQueHabriaPasado = document.getElementById("botonQueHabriaPasado");
 if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined && botonQueHabriaPasado instanceof HTMLButtonElement){
  botonQueHabriaPasado.addEventListener("click" , () => {
    queHabriaPasado ();
  })
 } 
 const botonMePlanto = document.getElementById("mePlanto");
if (botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click" , () => plantarse());
}
}

const pintarMensaje = (mensaje : string) => {
    const elementoDiv = document.getElementById("mensajeResultado");
    if (elementoDiv !== null && elementoDiv !== undefined && elementoDiv instanceof HTMLDivElement){
      elementoDiv.textContent = mensaje;
    }
  }
  
const bloquearBotonDameCarta = (estaDeshabilitado : boolean) => {
    const btnDameCarta = document.getElementById("botonDameCarta");
    if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) {
      btnDameCarta.disabled = estaDeshabilitado;
    }
  }
  

const bloquearBotonMePlanto = (estaDeshabilitado : boolean) => {
  const btnMePlanto = document.getElementById("mePlanto");
  if (btnMePlanto !== null && btnMePlanto !== undefined && btnMePlanto instanceof HTMLButtonElement) {
    btnMePlanto.disabled = estaDeshabilitado;
  }
}

const bloquearBotonQueHabriaPasado = (estaDeshabilitado : boolean) => {
  const btnQueHabriaPasado = document.getElementById("botonQueHabriaPasado");
  if (btnQueHabriaPasado !== null && btnQueHabriaPasado !== undefined && btnQueHabriaPasado instanceof HTMLButtonElement) {
    btnQueHabriaPasado.disabled = estaDeshabilitado;
  }
}

const obtenerUrlCarta = (numeroCarta: number) => {
	switch (numeroCarta) {
		case 1:
			return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
    break;
		case 2:
			return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
    break;
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
    break;
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
    break;
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
    break;
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
    break;
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
     break;
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
    break;
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
    break;
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
    break;           
		default:
			return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/back.jpg';
	}
}

const actualizarPuntuacionJugador = (puntosSumados : number) => {
  partida.puntuacionJugador = puntosSumados;
}


const dameCarta = () => {
	const numeroAleatorio = generarNumeroAleatorio();
	const carta = generarNumeroCarta(numeroAleatorio);
	const urlCarta = obtenerUrlCarta(carta);
	pintarCarta(urlCarta);
  const puntosCarta = obtenerPuntosCarta (carta);
  const puntosAcumulados = sumarPuntos (puntosCarta);
  actualizarPuntuacionJugador (puntosAcumulados);
  mostrarPuntuacion();
  revisarPartida ();
}

const resetear = () => {
    partida.puntuacionJugador = 0;
    pintarMensaje("");
    mostrarPuntuacion();
    pintarCarta('https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/back.jpg');
    bloquearBotonDameCarta(false);
    bloquearBotonQueHabriaPasado(true);
    bloquearBotonMePlanto(false);
    
  }

  const queHabriaPasado = () => {
    dameCarta();
  }

export const revisarPartida = () => {
   
    if (gestionarEstadoPartida () === "GANAR") {
      pintarMensaje ("Enhorabuena 🤩, has ganado!! 🎉🎉🎉");
      bloquearBotonDameCarta(true);
      bloquearBotonQueHabriaPasado(true);
      bloquearBotonMePlanto (true);
    }
    if (gestionarEstadoPartida () === "PERDER") {
      pintarMensaje ("Lo sentimos, has perdido ☹️☹️☹️");
      bloquearBotonDameCarta(true);
      bloquearBotonQueHabriaPasado(true);
      bloquearBotonMePlanto(true);
    }
  }
  
const revisarMePlanto = () => {
    if (partida.puntuacionJugador < 4) {
      pintarMensaje("Has sido muy conservador 🙄🙄🙄");
    }
    if (partida.puntuacionJugador >= 4 && partida.puntuacionJugador <= 5.5) {
      pintarMensaje ("Te ha entrado el canguelo eh? 🤭");
    }
    if (partida.puntuacionJugador >5.5 && partida.puntuacionJugador <=7) {
      pintarMensaje ("Uyyy casi, casi....😀");
    }
  }
  
const plantarse = () => {
    bloquearBotonDameCarta(true);
    revisarMePlanto ();
    bloquearBotonQueHabriaPasado(false);
  
  }
  