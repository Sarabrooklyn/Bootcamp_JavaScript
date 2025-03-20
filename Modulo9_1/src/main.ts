import {calculaPrecioLineaTicketConIva, calculaTotalConIva, calculaTotalIva, calculaTotalSinIva } from "./calculaTicket.helper";
import { productos } from "./informacionProductos";
import { LineaTicket, ResultadoLineaTicket, ResultadoTotalTicket, TicketFinal, tiposDeIva, TotalPorTipoIva } from "./model";

const calculaResultadoLineaTicket = (lineasticket: LineaTicket[]) : ResultadoLineaTicket [] => {
 const resultadosLineasTicket : ResultadoLineaTicket [] = lineasticket.map((lineaticket) => {
  return {
    nombre: lineaticket.producto.nombre,
    cantidad: lineaticket.cantidad,
    precioSinIva: lineaticket.producto.precio * lineaticket.cantidad,
    tipoIva: lineaticket.producto.tipoIva,
    precioConIva: calculaPrecioLineaTicketConIva(lineaticket.producto.precio, lineaticket.cantidad, lineaticket.producto.tipoIva),
    
  }
 });
 
 return resultadosLineasTicket;
}
  


const calculaResultadoTotalTicket = () : ResultadoTotalTicket => {
  const totalSinIva = calculaTotalSinIva(productos);
  const totalConIva = calculaTotalConIva();
  const totalIva = calculaTotalIva(productos);

  return {totalConIva, totalIva, totalSinIva};
}


const calculaTotalPorTipoIva = (arrayProductos : LineaTicket[]) : TotalPorTipoIva[] => {
   const listadoTotalPorTipoIva : TotalPorTipoIva[] = tiposDeIva.map((tipoDeIva) => {
    const productosAgrupados = arrayProductos.filter((producto) => {
      return producto.producto.tipoIva === tipoDeIva;
    })
    return {
      tipoIva : tipoDeIva,
      cuantia : calculaTotalIva(productosAgrupados),
    }
  });

return listadoTotalPorTipoIva.filter((totalPorTipoIva) => {
  return totalPorTipoIva.cuantia > 0;

});
}  
  


//La estructura inicial de la función para calcular el ticket sería la siguiente:
const calculaTicket = (lineasTicket: LineaTicket[]) : TicketFinal => {

return {
    lineas: calculaResultadoLineaTicket(productos),
    total: calculaResultadoTotalTicket(),
    desgloseIva: calculaTotalPorTipoIva(lineasTicket),
  }
};



console.log(calculaTicket(productos));
