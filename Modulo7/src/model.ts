export const partida : Partida = {
  puntuacionJugador : 0,
  estado : "SEGUIR_JUGANDO",
}

export type Estado =
|"GANAR"
|"PERDER"
|"SEGUIR_JUGANDO"

interface Partida {
  puntuacionJugador : number;
  estado : Estado;
}