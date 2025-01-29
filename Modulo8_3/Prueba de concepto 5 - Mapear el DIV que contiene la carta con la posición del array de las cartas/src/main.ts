interface InfoCarta {
    idFoto: number;
    imagen: string;
  }

  const informacionCartas : InfoCarta [] = [
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
    
    ]
    
    const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): InfoCarta[] => {
       return [...infoCartas, ...infoCartas];
      };

const barajarArray = (array : InfoCarta[]) : InfoCarta [] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


const mapearDivsACartas = (indiceArray : number, cartasBarajadas : InfoCarta[]) => {
    const dataIndiceId = `[data-indice-id="${indiceArray}"]`;
    const elementoDiv = document.querySelector(`div${dataIndiceId}`);
     if (elementoDiv && elementoDiv instanceof HTMLDivElement) {
        elementoDiv.addEventListener("click", () => {
            const elementoImagen = document.querySelector(`img${dataIndiceId}`);
            if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
                elementoImagen.src = cartasBarajadas[indiceArray].imagen;
            }   
        });
 }
}

const generarTablero = () => {
    const cartasDuplicadas = crearColeccionDeCartasInicial(informacionCartas);
    const cartasBarajadas = barajarArray(cartasDuplicadas);
    for (let i = 0; i < cartasBarajadas.length; i++) {
        mapearDivsACartas(i, cartasBarajadas);
        }
}

const iniciarPartida = () => { 
    generarTablero();
}

document.addEventListener("DOMContentLoaded", iniciarPartida);


