import { ValidacionClave } from "./model";
import { tieneCaracteresEspeciales, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./validarClave.helper";

describe("tieneMayusculasYMinusculas", () => {
    it("Debería devolver el objeto {esValida: true, si la clave tiene mayúsculas y minúsculas", () => {

        //Arrange
        const clave = "AbcDeFG";

        //Act
        const resultado = tieneMayusculasYMinusculas(clave);

        //Assert
        const resultadoEsperado : ValidacionClave = {
           esValida : true,
        }

        expect(resultado).toEqual(resultadoEsperado);
    });

    it("Debería devolver el objeto {esValida: false, si la clave NO tiene mayúsculas y minúsculas y error?: con su correspondiente error", () => {

        //Arrange
        const clave = "ABCDEFG";

        //Act
        const resultado = tieneMayusculasYMinusculas(clave);

        //Assert
        const resultadoEsperado : ValidacionClave = {
           esValida : false,
           error: "La clave debe de tener mayúsculas y minúsculas"
        }

        expect(resultado).toEqual(resultadoEsperado);
    });
});



describe("tieneNumeros", () => {
    it("Debería devolver el objeto {esValida: true, si la clave tiene al menos un número", () => {

        //Arrange
        const clave = "Ab3cDeFG";

        //Act
        const resultado = tieneNumeros(clave);

        //Assert
        const resultadoEsperado : ValidacionClave = {
           esValida : true,
        }

        expect(resultado).toEqual(resultadoEsperado);
    });

    it("Debería devolver el objeto {esValida: false, si la clave NO tiene al menos un número y error?: con su correspondiente error, si no cumple la condición", () => {

        //Arrange
        const clave = "AbcDeFG";

        //Act
        const resultado = tieneNumeros(clave);

        //Assert
        const resultadoEsperado : ValidacionClave = {
           esValida : false,
           error: "La clave debe de tener números"
        }

        expect(resultado).toEqual(resultadoEsperado);

        
    });

});


describe("tieneNombreUsuario", () => {
    it ("Debería devolver false si la clave contiene el nombre del usuario", () => {

        //Arrange
        const usuario = "sara";
        const clave = "123Sara";

        //Act
        const result = tieneNombreUsuario(usuario, clave);

        //Assert
        const resultadoEsperado = {
          esValida: false,
          error: "La clave no debe tener el nombre del usuario", 
        }

        expect(result).toEqual(resultadoEsperado);
    })
})


describe("tienePalabrasComunes", () => {
    it("Debería devolver false junto con un mensaje de error si la clave contiene alguno de las palabras incluídas en el array commonPasswords", () => {

        //Arrange
        const clave = "123456789";
        const palabrasComunes = [
            "password",
            "123456789",
            "qwerty",
            "admin",
            "letmein",
            "welcome",
            "monkey",
            "sunshine"
        ]

        //Act
        const resultado = tienePalabrasComunes(clave, palabrasComunes);

        //Assert
        const resultadoEsperado = {
            esValida: false,
            error: "La clave no debe de contener palabras comunes",
        }

        expect(resultado).toEqual(resultadoEsperado);
    });

    //Arrange
    const clave = "Malaga";
        const palabrasComunes = [
            "password",
            "123456789",
            "qwerty",
            "admin",
            "letmein",
            "welcome",
            "monkey",
            "sunshine"
        ]

        //Act
        const resultado = tienePalabrasComunes(clave, palabrasComunes);

        //Assert
        const resultadoEsperado = {
            esValida: true,
        }

        expect(resultado).toEqual(resultadoEsperado);
});

describe("tieneCaracteresEspeciales", () => {
    it("Debería devolver false junto con un mensaje de error si la clave No contiene algún caracter especial", () => {

        //Arrange
        const clave = "Sara";
       
        //Act
        const resultado = tieneCaracteresEspeciales(clave)

        //Assert
        const resultadoEsperado =
        {
            esValida: false,
            error: "La clave debe de tener caracteres especiales"
        } 

        expect(resultado).toEqual(resultadoEsperado);

     });

     //Arrange
     const clave = "$hola";
       
     //Act
     const resultado = tieneCaracteresEspeciales(clave)

     //Assert
     const resultadoEsperado =
     {
         esValida: true,
     } 

     expect(resultado).toEqual(resultadoEsperado);

});
