
const girarCarta1 = () => {
    const imagen1 = document.getElementById("imagen1");
    if (imagen1 && imagen1 instanceof HTMLImageElement) {
        imagen1.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png"
  }
}

const girarCarta2 = () => {
    const imagen2 = document.getElementById("imagen2");
    if (imagen2 && imagen2 instanceof HTMLImageElement) {
        imagen2.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png"
  }
}


const divImagen1 = document.getElementById("carta1");
if (divImagen1 && divImagen1 instanceof HTMLDivElement) {
    divImagen1.addEventListener("click", girarCarta1);
}

const divImagen2 = document.getElementById("carta2");
if (divImagen2 && divImagen2 instanceof HTMLDivElement) {
    divImagen2.addEventListener("click", girarCarta2);
}

