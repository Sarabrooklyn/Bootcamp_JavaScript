import {comprobarNumero, comprobarNumeroB, hasSuperadoElNumeroMaximoDeIntentos} from "./motor"
import {EL_NUMERO_ES_MAYOR, EL_NUMERO_ES_MENOR, ES_EL_NUMERO_SECRETO, NO_ES_UN_NUMERO, GAME_OVER_MAXIMO_INTENTOS} from "./modelo"
import { describe, expect } from "vitest";

import * as modelo from "./modelo";
import { beforeEach } from "vitest";

describe("comprobarNumeroB", () => {
   it ("El número introducido por el usuario es mayor al número a acertar" , () => {
        //Arrange
       const texto = "24";
       const numeroParaAcertar = 23;
       
       //Act
       const resultado = comprobarNumeroB(texto , numeroParaAcertar);
    
       //Assert
       expect(resultado).toBe(EL_NUMERO_ES_MAYOR);
    });

    it ("El número introducido por el usuario es menor al número a acertar" , () => {
        //Arrage
        const numeroParaAcertar = 23;
        const texto = "22";

        //Act
        const resultado = comprobarNumeroB(texto , numeroParaAcertar);

        //Assert
        expect(resultado).toBe(EL_NUMERO_ES_MENOR);
    });

    it ("El número introducido por el usuario es el número a acertar" , () => {
        //Arrage
        const numeroParaAcertar = 23;
        const texto = "23";
        
        //Act
        const resultado = comprobarNumeroB(texto, numeroParaAcertar);

        //Assert
        expect(resultado).toBe(ES_EL_NUMERO_SECRETO);
    });
    
    it ("El texto introducido por el usuario no es un número" , () => {
        //Arrage
        const texto = "casa";
        const numeroParaAcertar = 23;
        
        //Act
        const resultado = comprobarNumeroB(texto , numeroParaAcertar);

        //Assert 
        expect(resultado).toBe(NO_ES_UN_NUMERO);

    });
});


describe("ComprobarNumero" , () => {
    beforeEach (() => { 
        vi.spyOn(modelo , "numeroParaAcertar" , "get").mockReturnValue(23);
    });

    it ("Debería devolver NO_ES_UN_NUMERO cuando el texto no sera un número" , () => {
        const texto = "No es un número";
        const resultado = comprobarNumero(texto);
        expect(resultado).toBe(NO_ES_UN_NUMERO);
    });
    
    it ("Debería devolver ES_EL_NUMERO_SECRETO cuando el texto sea el número para acertar" , () => {
       const texto = "23";
      
       
       const resultado = comprobarNumero(texto);
       expect(resultado).toBe(ES_EL_NUMERO_SECRETO);
    }); 

    it ("Debería devolver EL_NUMERO_ES_MAYOR cuando el texto sea un número mayor al número a acertar" , () => {
      //Arrange
        const texto = "24";
        
      // Act
 
      const resultado = comprobarNumero(texto);

      //Assert
       expect(resultado).toBe(EL_NUMERO_ES_MAYOR);
    });

    it ("Deberia devolver EL_NUMERO_ES_MENOR cuando el texto sea un número menor al número a acertar" , () => {

        //Arrange
        const texto = "10";

        //Act

        const resultado = comprobarNumero(texto);

        //Assert 
        expect(resultado).toBe(EL_NUMERO_ES_MENOR);
    });

    it("Debería devolver GAME_OVER_MAXIMO_INTENTOS cuando se hayan superado el numero máximo de intentos establecido" , () => {
        //Arrange
      
       vi.spyOn(modelo , "numeroDeIntentos" , "get").mockReturnValue(5);

       //Act
       const resultado = comprobarNumero("70");

       //Assert
       expect(resultado).toBe(GAME_OVER_MAXIMO_INTENTOS);

   });
});
