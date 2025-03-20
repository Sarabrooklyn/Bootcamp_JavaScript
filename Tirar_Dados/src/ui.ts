import { partida } from "./modelo";
import { generarNumeroAleatorio, actualizarPuntuacionJugador, 
         sumarPuntuacion, obtenerPuntosDado} from "./motor";


export let numeroAleatorio = generarNumeroAleatorio();
 
 console.log(numeroAleatorio)

const asignarNumeroAImagen = (numeroAleatorio : number) => {

    switch(numeroAleatorio){
        case 1:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara1.png";
        case 2:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara2.png";
        case 3:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara3.png";
        case 4:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara4.png";
        case 5: 
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara5.png";
        case 6:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara6.png";
        default:
            return "Algo ha ido mal, prueba de nuevo";    
    }
}


export const mostrarPuntuacion = () => {
    const divPuntuacion = document.getElementById("puntuacionObtenida");
    if (divPuntuacion && divPuntuacion instanceof HTMLDivElement){
        divPuntuacion.textContent = `Tu puntuación es: ${partida.puntuacion}`;
    }
}


export const mostrarMensaje = (mensaje : string) => {
    const divMensaje = document.getElementById("mensaje");
    if (divMensaje && divMensaje instanceof HTMLDivElement){
        divMensaje.textContent = mensaje;
    }
}

export const mensajePartidaPerdida = () => {
    mostrarMensaje("Has sacado un 6 😱, lo sentimos, has perdido")
    deshabilitarBotonTirarDado(true);
    deshabilitarBotonMePlanto(true);
} 

export const mensajePartidaGanada = (puntuacion : number) => {
    if (puntuacion >= 20){
        mostrarMensaje("Enhorabuena, has ganado la partida!!")
    }
}

export const deshabilitarBotonTirarDado = (estaDeshabilitado : boolean) => {
    const btnTirarDado = document.getElementById("botonTirarDado");
    if (btnTirarDado && btnTirarDado instanceof HTMLButtonElement){
        btnTirarDado.disabled = estaDeshabilitado;
    }
}

export const deshabilitarBotonMePlanto = (estaDeshabilitado : boolean) => {
    const btnMePlanto = document.getElementById("botonMePlanto");
    if (btnMePlanto && btnMePlanto instanceof HTMLButtonElement){
        btnMePlanto.disabled = estaDeshabilitado;
    }
}


export const pintarDado = (urlDado : string) => {
    const imagenDado = document.getElementById("imagenDado")
       if (imagenDado && imagenDado instanceof HTMLImageElement){
            imagenDado.src = urlDado;
        }
    }

    
export const tirarDado = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    const urlDado = asignarNumeroAImagen(numeroAleatorio);
    pintarDado(urlDado);
    
    numeroAleatorio === 6 ? detenerPartida() : continuarTirada(numeroAleatorio);
    
}

const detenerPartida = () => {
    mensajePartidaPerdida();
}

const continuarTirada = (numeroDado: number) => {
    const puntosDado = obtenerPuntosDado(numeroDado);
    const puntosAcumulados = sumarPuntuacion(puntosDado);
    actualizarPuntuacionJugador(puntosAcumulados);
    mostrarPuntuacion();
    mensajePartidaGanada(partida.puntuacion);
}


export const botonTirarDado = document.getElementById("botonTirarDado"); 
  if (botonTirarDado && botonTirarDado instanceof HTMLButtonElement){
    botonTirarDado.addEventListener("click", tirarDado);
  }



export const plantarse = () => {
    mostrarMensaje(`Te has plantado, tienes ${partida.puntuacion} puntos`);
    deshabilitarBotonTirarDado(true);
}


export const botonMePlanto = document.getElementById("botonMePlanto");
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.addEventListener("click" , plantarse);
    }

export const resetear = () => {
    mostrarMensaje("");
    deshabilitarBotonMePlanto(false);
    deshabilitarBotonTirarDado(false);
    actualizarPuntuacionJugador(0);
    mostrarPuntuacion();
    pintarDado("");

}    

export const botonResetear = document.getElementById("botonResetear");
    if (botonResetear && botonResetear instanceof HTMLButtonElement) {
        botonResetear.addEventListener("click" , resetear);
    }