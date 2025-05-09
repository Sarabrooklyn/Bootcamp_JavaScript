import { vi } from "vitest";
import {comprobarNumero} from "./motor";
import { Estado , partida } from "./modelo";

describe ("comprobarNumero" , () => {
    it ("Si el usuario introduce un texto que no es un numero debería devolver NO_ES_UN_NUMERO" , () => {
        //Arrange
        const texto : string = "casa";

    // Act
        const resultado : Estado = comprobarNumero(texto);

    //Assert
        expect(resultado).toBe("NO_ES_UN_NUMERO");

    });
    
    it ("Si el usuario introduce el número secreto debería devolver ES_EL_NUMERO_SECRETO" , () => {
        //Arrange
        const resultadoEsperado : Estado = "ES_EL_NUMERO_SECRETO"
        const texto : string = "23";
        vi.spyOn(partida, "numeroParaAcertar" , "get").mockReturnValue(23);
    
        //Act
        const resultado : Estado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });
    
    it ("Si el número introducido es mayor que el número a acertar debería devolver EL_NUMERO_ES_MAYOR" , () => {
        //Arrange
        const resultadoEsperado : Estado = "EL_NUMERO_ES_MAYOR";
        const texto : string = "25";
        vi.spyOn(partida, "numeroParaAcertar" , "get").mockReturnValue(23);

        //Act
        const resultado : Estado = comprobarNumero(texto)
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it ("Si el número introducido es menor al número a acertar debería devolver EL_NUMERO_ES_MENOR" , () => {
        //Arrange
        const resultadoEsperado = "EL_NUMERO_ES_MENOR";
        const texto = "19";
        vi.spyOn(partida , "numeroParaAcertar" , "get").mockReturnValue(23);

        //Act
        const resultado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it ("Si el usuario supera el número máximo de intentos debería devolver GAME_OVER_MAXIMO_INTENTOS" , () => {
        //Arrange
        const resultadoEsperado = "GAME_OVER_MAXIMO_INTENTOS"
        const texto = "22";
        vi.spyOn(partida , "numeroParaAcertar" , "get").mockReturnValue(23);
        vi.spyOn(partida , "numeroDeIntentos" , "get").mockReturnValue(5);

        //Act
        const resultado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);

    });
});

