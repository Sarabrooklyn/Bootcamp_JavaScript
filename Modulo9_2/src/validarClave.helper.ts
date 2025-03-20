import { ValidacionClave } from "./model";
import { commonPasswords } from "./commonPasswords";

/*
Si la clave no tiene mayúsculas y minúsculas, el error será: "La clave debe de tener mayúsculas y minúsculas".
Si la clave no tiene números, el error será: "La clave debe de tener números".
Si la clave no tiene caracteres especiales, el error será: "La clave debe de tener caracteres especiales".
Si la clave no tiene una longitud mínima de 8 caracteres, el error será: "La clave debe de tener una longitud mínima de 8 caracteres".
Si la clave tiene el nombre del usuario, el error será: "La clave no debe tener el nombre del usuario".
Si la clave tiene palabras comunes, el error será: "La clave no debe de contener palabras comunes".
*/


//La clave debe de tener mayúsculas y minúsculas.
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    let tieneMayuscula = false;
    let tieneMinuscula = false;

    for (let i = 0; i < clave.length; i++) {
        const caracter = clave[i];

        // Verifica si es una letra comparando con su versión en mayúscula y minúscula
        if (caracter.toUpperCase() !== caracter.toLowerCase()) {
            if (caracter === caracter.toUpperCase()) {
                tieneMayuscula = true;
            }
            if (caracter === caracter.toLowerCase()) {
                tieneMinuscula = true;
            }
        }

        if (tieneMayuscula && tieneMinuscula) {
            return { esValida: true };
        }
    }

    return { 
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas"
    };
};


//La clave debe de tener números.
export const tieneNumeros = (clave: string): ValidacionClave => {
    for (let i = 0; i < clave.length; i++){
        if (!isNaN(Number(clave[i]))){
            return {esValida : true}
          }
      } 
        
     return {
        esValida: false,
        error: "La clave debe de tener números"
     }      
};


//La clave debe de tener caracteres especiales (@,#,+, _, ...)
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
   const caracteresEspeciales = "!@#$%^&*(),.?\":{}|<>";
   
   const contieneEspeciales = [...clave].some((caracter) => caracteresEspeciales.includes(caracter));

   if (contieneEspeciales){
    return {esValida: true}
  }

  return {
    esValida: false,
    error: "La clave debe de tener caracteres especiales",
  }
};


//La clave debe de tener una longitud mínima de 8 caracteres.
export const tieneLongitudMinima = (clave: string): ValidacionClave => {

    if (clave.length > 7){
        return { esValida: true };
    }
    return { 
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres"
    };
};


//La clave no debe tener el nombre del usuario.
export const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
    const contieneNombre = clave.toLowerCase().includes(nombreUsuario);
    if (contieneNombre){
      return {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario", 
    } 
  }
  return {
    esValida: true,
   }
};


//La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
export const tienePalabrasComunes = (clave: string, palabrasComunes: string[]): ValidacionClave => {
   const contienePalabraComun = palabrasComunes.some(password => clave.toLowerCase().includes(password));
    if (contienePalabraComun){
        return {
            esValida: false,
            error: "La clave no debe de contener palabras comunes",
        }
    }
    return {
        esValida: true,
    }
};

console.log(tienePalabrasComunes("alejandroMaster", commonPasswords));