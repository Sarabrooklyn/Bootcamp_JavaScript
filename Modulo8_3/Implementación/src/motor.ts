import { Carta, Tablero } from "./modelo";

export const barajarCartas = (cartas : Carta []) : Carta[] => {
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [{...cartas[i]}, {...cartas[j]}] = [cartas[j], cartas[i]];
      }
      return cartas;
  }
  

  export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
    return tablero.cartas[indice].encontrada !== true && tablero.cartas[indice].estaVuelta !== true;
  }
  
  export const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
    tablero.cartas[indice].estaVuelta = true;
    if (tablero.estadoPartida === "CeroCartasLevantadas"){
      tablero.indiceCartaVolteadaA = indice;
      tablero.estadoPartida = "UnaCartaLevantada";
    } else if (tablero.estadoPartida === "UnaCartaLevantada"){
      tablero.indiceCartaVolteadaB = indice;
      tablero.estadoPartida = "DosCartasLevantadas";
    }
  }
  
  /*
    Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
  */
  export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    if (tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto){
      return true;
    } else {
      return false;
    }
  }
  
  /*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */
  export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    tablero.cartas[indiceA].estaVuelta = true;
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].estaVuelta = true;
    tablero.cartas[indiceB].encontrada = true;
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
    tablero.estadoPartida = "CeroCartasLevantadas";
  }
  
  /*
    Aquí asumimos que no son pareja y las volvemos a poner boca abajo
  */
  export const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceA].encontrada = false;
    tablero.cartas[indiceB].estaVuelta = false;
    tablero.cartas[indiceB].encontrada = false;
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
    tablero.estadoPartida = "CeroCartasLevantadas";
  }
  
  /*
    Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
  */
  export const esPartidaCompleta = (tablero: Tablero) : boolean => {
   return tablero.cartas.every((carta) => {
     if (carta.encontrada === true && carta.estaVuelta === true) {
      return true;
     } else {
      return false;
     }
   });
  }
  
  /*
  Iniciar partida
  */
  
  export const iniciaPartida = (tablero: Tablero): void => {
    const cartasBarajadas = barajarCartas(tablero.cartas);
    tablero.cartas = [...cartasBarajadas];
    tablero.estadoPartida = "CeroCartasLevantadas";
    tablero.usuarioPuedeInteractuar = true;
   
  };
  