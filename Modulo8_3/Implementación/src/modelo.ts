export interface Carta {
    idFoto: number; // id del 1 al 6 para 12 cartas, así identificamos rápido si es un gatito ,un perrito...
    imagen: string; // por comodidad repetimos la url de la imagen
    estaVuelta: boolean;
    encontrada: boolean;
  }
  
  interface InfoCarta {
    idFoto: number;
    imagen: string;
  }
  
  const infoCartas: InfoCarta[] = [
    {
        idFoto: 0,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
    },
    
    {
        idFoto: 1,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
    },
    
    {
        idFoto: 2,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
    },
    
    {
        idFoto: 3,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
    },
    
    {
        idFoto: 4,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
    },
    
    {
        idFoto: 5,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
    }
  ];
  
  const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
    idFoto,
    imagen,
    estaVuelta: false,
    encontrada: false,
  });

  

   /* Aquí crearemos un array de cartas a partir de un array de infoCartas
       y duplicaremos las cartas para que haya dos de cada tipo.
    */
  const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
    const cartasTransformadas = infoCartas.map((infoCarta) => {
    return crearCartaInicial(infoCarta.idFoto, infoCarta.imagen);
   });
    return [...cartasTransformadas, ...cartasTransformadas];
  };
  

  export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

  
  /*
    Aquí definimos el tipo de estado de la partida, la idea es que cuando empiece la partida todas las cartas estén boca abajo y si se hacen click sobre ellas no se volteen.
    EstadoPartida = "PartidaNoIniciada", una vez que se pulse Iniciar partida el estado de la partida cambiaría a "CeroCartasLevantadas" y así sucesivamente.
  */
    type EstadoPartida =
    | "PartidaNoIniciada"
    | "CeroCartasLevantadas"
    | "UnaCartaLevantada"
    | "DosCartasLevantadas"
    | "PartidaCompleta";
  
  export interface Tablero {
    cartas: Carta[];
    estadoPartida: EstadoPartida;
    indiceCartaVolteadaA?: number;
    indiceCartaVolteadaB?: number;
    usuarioPuedeInteractuar : boolean;
  }
  
  const crearTableroInicial = (): Tablero => ({
    cartas: cartas,
    estadoPartida: "PartidaNoIniciada",
    usuarioPuedeInteractuar: false,
  });
  
  export let tablero: Tablero = crearTableroInicial();