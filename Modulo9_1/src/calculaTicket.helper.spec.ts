import { calculaIva, calculaTotalIva, calculaTotalSinIva} from "./calculaTicket.helper";
import { LineaTicket } from "./model";


describe("calculaTotalSinIva", () => {
    it("Debería devolver la suma de todos los precios sin IVA", () => {

        //Arrange
            const productos : LineaTicket []=  [
                {
                  producto: {
                    nombre: "Legumbres",
                    precio: 2,
                    tipoIva: "general"
                  },
                  cantidad: 2,
                },
                {
                  producto: {
                    nombre: "Perfume",
                    precio: 20,
                    tipoIva: "general",
                  },
                  cantidad: 3,
                }
            ]
        //ACt
        const resultado = calculaTotalSinIva(productos);

        //Assert
        const totalEsperado = 64;

        expect(resultado).toEqual(totalEsperado);

    });
});


describe("calculaIva", () => {
    it("Debería calcular el importe de iva de un producto", () => {
        
        //Arrange
        const precio = 100;
        const tipodeIva = "general";

        //Act
        const resultado = calculaIva(precio, tipodeIva);

        //Assert
        const importeEsperado = 21;

        expect(resultado).toEqual(importeEsperado);
    });
});



 describe("calculaTotalIva" ,() => {
    it ("Debería dar como resultado el importel total de sumar el iva de cada producto", () => {

        //Arrange
        const productos : LineaTicket []=  [
            {
              producto: {
                nombre: "Legumbres",
                precio: 2,
                tipoIva: "general"
              },
              cantidad: 2,
            },
            {
              producto: {
                nombre: "Perfume",
                precio: 20,
                tipoIva: "general",
              },
              cantidad: 3,
            }
        ]

        //Act
        const resultado = calculaTotalIva(productos);

        //Assert
        const totalEsperado = 13.44;

        expect(resultado).toEqual(totalEsperado);
    });
 });