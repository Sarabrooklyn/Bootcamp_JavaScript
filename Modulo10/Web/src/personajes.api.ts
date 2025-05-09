import axios from "axios";
import { Personaje } from "./personajes.model";



export const obtenerPersonajes = async () : Promise<Personaje[]> => {
   try {
    const {data} = await axios.get("http://localhost:3000/personajes");
    return data;
  } catch (error){
      throw new Error ("Error al obtener los personajes");
    }
}

export const filtrarPersonaje = async (nombre: string): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get("http://localhost:3000/personajes");
    const personajesFiltrados = data.filter((personaje: Personaje) =>
      personaje.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
    return personajesFiltrados;
  } catch (error) {
    throw new Error("Error al filtrar los personajes");
  }
};