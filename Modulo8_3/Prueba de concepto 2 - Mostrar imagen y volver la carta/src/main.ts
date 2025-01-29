


const girarCarta = () => {
    const imagen1 = document.getElementById("imagen1");
    if (imagen1 && imagen1 instanceof HTMLImageElement) {
        imagen1.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png"
  }
}

const divImagen1 = document.getElementById("carta1");
if (divImagen1 && divImagen1 instanceof HTMLDivElement) {
    divImagen1.addEventListener("click", girarCarta);
}



