import {
    partida,
    Estado,

} from "./model";


export const generarNumeroAleatorio = () => {
    return Math.floor (Math.random () * 10);
}

export const generarNumeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio === 0 || numeroAleatorio > 7) {
      return numeroAleatorio + 2;
  }
      return numeroAleatorio;
}

export const obtenerPuntosCarta = (carta : number) => {
    if (carta > 7) {
     return 0.5;
    } 
  
    return carta;
  }

  export const sumarPuntos = (puntos : number) => {
    return partida.puntuacionJugador + puntos;
  }

  export const gestionarEstadoPartida = () : Estado => {
    if (partida.puntuacionJugador === 7.5) {
      partida.estado = "GANAR";
    }
    if (partida.puntuacionJugador > 7.5) {
      partida.estado = "PERDER";
    } 
    return partida.estado;
  }

  
  
 
  