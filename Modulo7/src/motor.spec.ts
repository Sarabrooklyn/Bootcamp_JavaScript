import {gestionarEstadoPartida , generarNumeroCarta , obtenerPuntosCarta} from "./motor";
import { Estado, partida } from "./model";
import {vi} from "vitest";

describe ("GestionarEstadoPartida" , () => {
  it ("Debería devolver SEGUIR_JUGANDO cuando puntuacionJugador sea menor a 7.5" , () => {
      //Arrange
      const estadoEsperado : Estado = "SEGUIR_JUGANDO";
      vi.spyOn(partida , "puntuacionJugador" , "get").mockReturnValue(4);

      //Act
      const resultado = gestionarEstadoPartida();

      //Assert
      expect(resultado).toBe(estadoEsperado);
  });

  it ("Debería devolver GANAR cuando puntuaciónJugador sea 7.5" , () => {
    //Arrange
     const estadoEsperado : Estado = "GANAR";
     vi.spyOn(partida , "puntuacionJugador" , "get").mockReturnValue(7.5);

    //Act
    const resultado = gestionarEstadoPartida();

    //Assert
    expect(resultado).toBe(estadoEsperado);
  });

  it ("Debería devolver PERDER cuando puntuacionJugador sea mayor a 7.5" , () => {
    //Arrange
     const estadoEsperado :Estado = "PERDER";
     vi.spyOn(partida , "puntuacionJugador" , "get").mockReturnValue(11);

    //Act
    const resultado = gestionarEstadoPartida();

    //Assert
    expect(resultado).toBe(estadoEsperado);
  });
});

describe ("generarNumeroCarta" , () => {
   it ("En el caso de que el número generado sea mayor a 7 debería sumarle 2 puntos para evitar los 8 y 9" , () => {
      //Arrange 
      const numeroAleatorio : number = 9;
      const numeroEsperado : number = 11;
      
      //Act
      const resultado : number = generarNumeroCarta(numeroAleatorio) ;

      //Assert
      expect(resultado).toBe(numeroEsperado);
   });

   it ("En el caso de que el número sea igual o menor a 7 debería devolver el mismo número" , () => {
      //Arrange
      const numeroAleatorio : number = 5;
      const numeroEsperado : number = 5;

      //Act
      const resultado : number = generarNumeroCarta(numeroAleatorio);

      //Assert
      expect(resultado).toBe(numeroEsperado);
   });
});

describe ("obtenerPuntosCarta" , () => {
  it ("Si nuestra carta es menor a 7 debería devolvernos el mismo valor, ej. si tenemos 6 de copas debe devolver 6" , () => {
    //Arrange 
    const numeroCarta = 4;
    const valorEsperado = 4;

    //Act
    const resultado = obtenerPuntosCarta(numeroCarta);

    //Assert
    expect(resultado).toBe(valorEsperado);
  });

  it ("Debería devolver un valor de 0,5 si el número de carta obtenido es mayor a 7" , () => {
    //Arrange
    const numeroCarta = 8;
    const valorEsperado = 0.5;

    //Act
    const resultado = obtenerPuntosCarta(numeroCarta);

    //Assert
    expect(resultado).toBe(valorEsperado);
  });

});