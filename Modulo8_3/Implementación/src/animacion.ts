const colores = ["red", "blue", "yellow", "green", "purple", "orange", "pink"];

export const lanzarFuegosArtificiales = () => {
  const contenedor = document.getElementById("fuegos-artificiales-container");
  if (contenedor) {
    contenedor.classList.remove("hidden");
    contenedor.innerHTML = "";

    for (let i = 0; i < 50; i++) {
      const particula = document.createElement("div");
      particula.classList.add("fuego-artificial");

      // Posición aleatoria
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;

      // Color y movimiento aleatorio
      const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      const xDelta = (Math.random() - 0.5) * 200; // Movimiento horizontal
      const yDelta = (Math.random() - 0.5) * 200; // Movimiento vertical

      particula.style.left = `${posX}px`;
      particula.style.top = `${posY}px`;
      particula.style.backgroundColor = colorAleatorio;
      particula.style.setProperty("--x-delta", `${xDelta}px`);
      particula.style.setProperty("--y-delta", `${yDelta}px`);

      contenedor.appendChild(particula);
    }

    setTimeout(() => {
      contenedor.classList.add("hidden");
    }, 2000);
  }
};