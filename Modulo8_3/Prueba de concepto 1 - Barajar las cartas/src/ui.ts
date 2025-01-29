
import { barajarArray, coleccionAnimales } from "./motor";

document.addEventListener("DOMContentLoaded", () => {
const botonBarajar = document.getElementById("button");
  if (botonBarajar && botonBarajar instanceof HTMLButtonElement) {
    console.log("hola")
    botonBarajar.addEventListener("click", () => {
      const arrayBarajado = barajarArray(coleccionAnimales);
      console.log("Array barajado:", arrayBarajado);
    });
  };
});
