import * as ibantools from 'ibantools';
import { InformacionBancaria } from './model';


export const ibanBienFormado = (value : string) : boolean => {
    const patron = /^[A-Z]{2}\d{2}((\s|\-)?\d{4}){2}(\s|\-)?\d{2}(\s|\-)?\d{10}$/;
    // WW (ej:ES21) 0000 0000 00 0000000000
    return patron.test(value);
}


export const ibanValido = (value : string) : boolean => {
    const ibanLimpio = value.replace(/[\s\-]/g, "");
     const iban = ibantools.isValidIBAN(ibanLimpio);
     return iban;  
    }


export const extraerInformacionIban = (value : string) : InformacionBancaria | null => {
    const patron = /^[A-Z]{2}\d{2}(\s|\-)?(?<banco>\d{4})(\s|\-)?(?<sucursal>\d{4})(\s|\-)?(?<control>\d{2})(\s|\-)?(?<cuenta>\d{10})$/;

    const coincidencia = patron.exec(value);

    if(coincidencia){
     const {banco, sucursal, control, cuenta} = coincidencia.groups as any;

     return {
       banco,
       codigoSucursal : sucursal,
       digitoDeControl: control,
       numeroCuenta: cuenta,
     }

    } else {
        console.error("Error al obtener la información bancaria");
        return null
    }
};    



