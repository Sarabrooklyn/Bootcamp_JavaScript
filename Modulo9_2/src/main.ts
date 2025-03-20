import { commonPasswords } from "./commonPasswords";
import { ValidacionClave } from "./model";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./validarClave.helper";
/*
Una vez que tenemos todas las funciones, ya estamos listos para crear la función validarClave que nos devolverá un objeto con dos propiedades:

esValida: booleano, que nos indica si la clave es válida o no.
error: string, que nos devolverá el primer error que encuentre, en caso de que tuviera.

*/



export const validarClave = (nombreUsuario: string, clave: string, palabrasComunes: string[]): ValidacionClave => {

    const validacionCorrecta : ValidacionClave = {esValida:  true}
  
    const validacionTieneCaracteresEspeciales = tieneCaracteresEspeciales(clave);
    const validacionTieneLongitudMinima = tieneLongitudMinima(clave);
    const validacionTieneMayusculasYMinusculas = tieneMayusculasYMinusculas(clave);
    const validacionTieneNombreUsuario = tieneNombreUsuario(nombreUsuario, clave);
    const validacionTieneNumeros = tieneNumeros(clave);
    const validacionTienePalabrasComunes = tienePalabrasComunes(clave, palabrasComunes);
  
   

    if (!validacionTieneCaracteresEspeciales.esValida){
      return validacionTieneCaracteresEspeciales;
    }

    if (!validacionTieneLongitudMinima.esValida){
      return validacionTieneLongitudMinima;
    }

    if (!validacionTieneMayusculasYMinusculas.esValida){
      return validacionTieneMayusculasYMinusculas;
    }

    if (!validacionTieneNombreUsuario.esValida){
      return validacionTieneNombreUsuario;
    }

    if (!validacionTieneNumeros.esValida){
      return validacionTieneNumeros;
    }

    if (!validacionTienePalabrasComunes.esValida){
      return validacionTienePalabrasComunes;
    }
   
    return validacionCorrecta
  };




  console.log("Resultado validación:", validarClave("Sara", "cochesBlancos1%", commonPasswords));