import {Carta, Tablero, tablero} from "./modelo";
import {
    iniciaPartida, 
    sePuedeVoltearLaCarta, 
    voltearLaCarta, 
    sonPareja, 
    parejaEncontrada, 
    parejaNoEncontrada, 
    esPartidaCompleta,
    } from "./motor";


import { lanzarFuegosArtificiales } from "./animacion";

let intentos = 0;

const mostrarMensajeNumeroIntentos = (intentos : number) => {
    const divIntentos = document.getElementById("intentos");
    if (divIntentos && divIntentos instanceof HTMLDivElement){
    divIntentos.textContent = `🃏 Llevas ${intentos} de 10 intentos 🃏`; 
    } 
}


const gameOver = (intentos : number) => {
    if (intentos > 10){
    mostrarMensaje("👾 GAME OVER 👾 , has superado el número máximo de intentos");
    tablero.usuarioPuedeInteractuar = false;
   }
}

const procesarCartaVolteada = (indiceArray: number, elementoImagen: HTMLImageElement) => {
    console.log("Se puede voltear la carta");
    voltearLaCarta(tablero, indiceArray);
    console.log(tablero);
    const imagen = tablero.cartas[indiceArray].imagen;
    mostrarImagenAnimal(elementoImagen, imagen);
    mirarSiEsLaSegundaCarta(tablero);
};

const manejarClickCarta = (indiceArray: number, dataIndiceId: string) => {
    if (tablero.usuarioPuedeInteractuar === false || tablero.estadoPartida === "PartidaNoIniciada" || tablero.estadoPartida === "PartidaCompleta") {
        return;
    }

const elementoImagen = document.querySelector(`img${dataIndiceId}`);
    if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
        if (sePuedeVoltearLaCarta(tablero, indiceArray)) {
            procesarCartaVolteada(indiceArray, elementoImagen);
        } else {
          mostrarMensaje("La carta ya está volteada, prueba con otra");
        }
    }
};

const mapearDivsACartas = (indiceArray : number) => {
    const dataIndiceId = `[data-indice-id="${indiceArray}"]`;
    const elementoDiv = document.querySelector(`div${dataIndiceId}`);
     if (elementoDiv && elementoDiv instanceof HTMLDivElement) {
        elementoDiv.addEventListener("click", () => {
        manejarClickCarta(indiceArray, dataIndiceId);
      });
  };
}

const mostrarImagenAnimal = (elementoImagen : HTMLImageElement, urlImagen : string) => {
    elementoImagen.src = urlImagen;
    elementoImagen.style.backgroundColor = "transparent";
    elementoImagen.style.transform = "rotateY(180deg)";
    elementoImagen.style.transition = "all 0.5s linear";
}

const generarTablero = () => {
    for (let i = 0; i < tablero.cartas.length; i++) {
        mapearDivsACartas(i);
        }
}

export const iniciarPartida = () => { 
    generarTablero();
}

const clickBotonEmpezarPartida = () => {
    iniciaPartida(tablero);
    console.log(tablero);
    
}

export const agregarEventoBotonIniciarPartida = () => {
    console.log(tablero);
    const botonEmpezarPartida = document.getElementById("botonEmpezarPartida");
    if (botonEmpezarPartida && botonEmpezarPartida instanceof HTMLButtonElement) {
        botonEmpezarPartida.addEventListener("click", () => {
            clickBotonEmpezarPartida(), resetearPartida();
        });
    }
}

const duracionMensajes : number = 3000;

const mostrarMensaje = (mensaje : string) => {
    const divMensaje = document.getElementById("mensaje");
    if (divMensaje && divMensaje instanceof HTMLDivElement){
        divMensaje.textContent = mensaje;
        setTimeout(() => {
           divMensaje.textContent = "";
        }, duracionMensajes);
    }
}

const partidaGanada = () => {
        console.log("Hemos completado la partida");
        mostrarMensaje("🎉 ENHORABUENA 🎉  Has completado la partida");
        lanzarFuegosArtificiales();
    }

const mirarSiEsLaSegundaCarta = (tablero : Tablero) => {
    const indiceA = tablero.indiceCartaVolteadaA;
    const indiceB = tablero.indiceCartaVolteadaB;
    if (indiceA !== undefined && indiceB !== undefined){
        intentos++;
        gameOver(intentos);
        if (sonPareja(indiceA, indiceB, tablero)) {
          parejaEncontrada (tablero, indiceA, indiceB);
          if (esPartidaCompleta(tablero)){
            partidaGanada();
           }
       } else {
         parejaNoEncontrada (tablero, indiceA, indiceB);
         voltearLasCartasQueNoSonPareja(tablero.cartas);

       } 
       mostrarMensajeNumeroIntentos(intentos);
    }
}


const darleLaVueltaALaCarta = (indiceArray : number) => {
    const dataIndiceId = `[data-indice-id="${indiceArray}"]`;
    const elementoImagen = document.querySelector(`img${dataIndiceId}`);
    if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
        elementoImagen.src = "";
        elementoImagen.style.backgroundColor = "transparent";
        elementoImagen.style.transform = "";
        elementoImagen.style.transition = "";
      }
  } 

const voltearLasCartasQueNoSonPareja = (cartas : Carta[]) => {
    setTimeout(() => {ponerImagenesBocaAbajo(cartas)} , 1000);
}


const ponerImagenesBocaAbajo = (cartas: Carta[]) => {
   for (let i = 0; i < cartas.length; i++) {
    if (cartas[i].encontrada === false && cartas[i].estaVuelta === false){
        darleLaVueltaALaCarta(i);
    }   
 }
}


const resetearPartida = () => {
    tablero.cartas.forEach((carta, i) => {
        darleLaVueltaALaCarta(i);
        carta.estaVuelta = false;
        carta.encontrada = false;
    });

    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
    tablero.estadoPartida = "CeroCartasLevantadas"; 
    tablero.usuarioPuedeInteractuar = true;

    mostrarMensaje("");
    intentos = 0;
    mostrarMensajeNumeroIntentos(0);
};
