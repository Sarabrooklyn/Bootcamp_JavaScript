import { animales } from "./modelo";

export const coleccionAnimales : animales[] = ["león", "buho", "perro","gallina", "cerdo", "abeja"]

export const barajarArray = (arr : animales[]) : animales[] => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log("Array original:", coleccionAnimales);
console.log(barajarArray(coleccionAnimales));
