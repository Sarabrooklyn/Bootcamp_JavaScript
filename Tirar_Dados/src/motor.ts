import { partida } from "./modelo";

export const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 6 + 1);
 }
 
 export let numeroAleatorio = generarNumeroAleatorio();
  console.log(numeroAleatorio)


export const obtenerPuntosDado = (dado : number) => {
     if (dado < 6) {
      return dado
     } 
     return 0;
   }
   
  
 export const sumarPuntuacion = (puntosDado : number) => {
     return partida.puntuacion + puntosDado;
 }

 export const actualizarPuntuacionJugador = (puntosAcumulados : number) => {
     partida.puntuacion = puntosAcumulados;
   }
   
 
 
 

 
 