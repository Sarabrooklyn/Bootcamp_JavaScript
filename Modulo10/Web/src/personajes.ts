import { Personaje } from "./personajes.model";
import { obtenerPersonajes, filtrarPersonaje } from "./personajes.api";


const crearElementoImagen = (foto: string, descripcion : string) : HTMLImageElement => {
    const imagen = document.createElement("img");
    const urlImagen = `http://localhost:3000/${foto}`;
     imagen.src = urlImagen;
     imagen.alt = descripcion;
     return imagen; 
}

const crearElementoParrafo = (texto : string) : HTMLParagraphElement => {
    const parrafo = document.createElement("p");
    parrafo.innerHTML = texto;
    return parrafo;
}

const crearContenedorPersonajes = (personaje : Personaje) : HTMLDivElement => {

    const elementoPersonaje = document.createElement("div");
    elementoPersonaje.classList.add("personaje-contenedor");

    const nombre = crearElementoParrafo(`<strong>Nombre:</strong> ${personaje.nombre}`);
    elementoPersonaje.appendChild(nombre);

    const apodo = crearElementoParrafo(`<strong>Apodo:</strong> ${personaje.apodo}`);
    elementoPersonaje.appendChild(apodo);

    const especialidad = crearElementoParrafo(`<strong>Especialidad:</strong> ${personaje.especialidad}`);
    elementoPersonaje.appendChild(especialidad);

    elementoPersonaje.appendChild(crearElementoParrafo("<strong>Habilidades:</strong>"));
    
    const habilidadesConComas = personaje.habilidades.join(", ");
    elementoPersonaje.appendChild(crearElementoParrafo(habilidadesConComas));

    const amigo = crearElementoParrafo(`<strong>Amigo:</strong> ${personaje.amigo}`);
    elementoPersonaje.appendChild(amigo);

    const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
    elementoPersonaje.appendChild(imagen);
    
    return elementoPersonaje;
}


const obtenerValorDelInput = () : string => {
  const input = document.querySelector("input");
    if (input && input instanceof HTMLInputElement){
        return input.value;
     }
     return "";     
};

const vaciarContenedorListadoPersonajes = () => {
  const listadoPersonajes = document.querySelector("#listado-personajes");
    if (listadoPersonajes && listadoPersonajes instanceof HTMLDivElement){
       listadoPersonajes.innerHTML = '';
    }
};


const pintarPersonajeFiltrado = (personajes: Personaje[], contenedor: HTMLDivElement) => {
    vaciarContenedorListadoPersonajes();
  
    if (personajes.length > 0) {
      personajes.forEach((personaje) => {
        const contenedorPersonaje = crearContenedorPersonajes(personaje);
        contenedor.appendChild(contenedorPersonaje);
      });
    } else {
      contenedor.innerHTML = "<p>No se encontró ningún personaje con ese nombre.</p>";
    }
  };
  
  const filtraPersonaje = async (nombre: string) => {
    try {
      const listadoPersonajes = document.querySelector("#listado-personajes");
      if (listadoPersonajes && listadoPersonajes instanceof HTMLDivElement){
        const personajeFiltrado = await filtrarPersonaje(nombre);
      pintarPersonajeFiltrado(personajeFiltrado, listadoPersonajes);
      }
    } catch (error) {
      console.error(error);
    }
  };


const botonFiltrar = document.getElementById("botonFiltrar");
if (botonFiltrar && botonFiltrar instanceof HTMLButtonElement) {
    botonFiltrar.addEventListener("click", () => {
    const nombre = obtenerValorDelInput();
        if (nombre) {
            filtraPersonaje(nombre);
          } else {
            pintarPersonajes(); 
        }
    });
  }

const pintarPersonajes = async () => {
  const personajes = await obtenerPersonajes();
  const listadoPersonajes = document.querySelector("#listado-personajes");
   if (listadoPersonajes && listadoPersonajes instanceof HTMLDivElement) {
      pintarPersonajeFiltrado(personajes, listadoPersonajes);
    } else {
      throw new Error("No se ha encontrado el contenedor listadoPersonajes");
    }
};


document.addEventListener("DOMContentLoaded", pintarPersonajes);