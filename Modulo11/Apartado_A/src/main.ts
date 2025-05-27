import { bancos } from "./bancos";
import {extraerInformacionIban, ibanValido } from "./comprobacionesIban";
import { InformacionBancaria } from "./model";



const obtenerValorDelInput = () : string => {
    const input = document.getElementById("input");
    if(input && input instanceof HTMLInputElement){
       return input.value;
    } else {
        return "";
    }
};

const comprobarSiEsValido = () : boolean => {
    const iban = obtenerValorDelInput();
    return ibanValido(iban);
}

const pintarResultados = (): void => {
    const divResultados = document.getElementById("resultados");
  
    if (divResultados && divResultados instanceof HTMLDivElement) {
      let mensaje = "";

      const esValido = comprobarSiEsValido();

       if(!esValido){
        mensaje += "El IBAN NO es válido \n";
       } else {
        mensaje += "El IBAN está bien formado\n"
        mensaje += "El IBAN es válido \n"
       }

      divResultados.textContent = mensaje;
    }
  };


const obtenerBanco = () : string => {
  const iban = obtenerValorDelInput()
  const info = extraerInformacionIban(iban)    
  const bancoEncontrado = bancos.find((banco) => banco.codigo === info?.banco);
  const nombre = bancoEncontrado ? bancoEncontrado.nombre : "Banco no encontrado";  
  
  return nombre;
  }   

const informacionBancaria = (info : InformacionBancaria) : string => {
     return (
      `Banco: ${obtenerBanco()}\n` +
      `Código Sucursal: ${info.codigoSucursal}\n` +
      `Dígito de Control: ${info.digitoDeControl}\n` +
      `Número de Cuenta: ${info.numeroCuenta}\n`
    );
  };



  const pintarInformacionBancaria = () : void => {
    const divInformacionBancaria = document.getElementById("informacionBancaria");
  
    if (divInformacionBancaria && divInformacionBancaria instanceof HTMLDivElement) {
      let mensaje = "";

      const iban = obtenerValorDelInput();
      const info = extraerInformacionIban(iban);

      if(info){
        mensaje += informacionBancaria(info);
        
      } else {
        mensaje += "No se ha podido obtener la información bancaria";
      }
      divInformacionBancaria.textContent = mensaje;
   }
  };

const boton = document.getElementById("button");
if (boton && boton instanceof HTMLButtonElement){
    boton.addEventListener("click", () => {
      pintarResultados();
      pintarInformacionBancaria();
    })
  }

