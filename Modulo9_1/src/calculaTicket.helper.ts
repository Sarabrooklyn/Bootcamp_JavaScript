import { productos } from "./informacionProductos";
import { LineaTicket, TipoIva } from "./model";


const asignacionPorcentajeDeIva = (tipoDeIva : TipoIva) => {

 switch (tipoDeIva){
    case "general":
        return 21;
    case "reducido":
        return 10;
    case "superreducidoA":
        return 5;
    case "superreducidoB":
        return 4;
    case "superreducidoC":
        return 0;
    case "sinIva":
        return 0;
    default:
        throw new Error("Se ha producido un error");
        
        
 }
}

export const calculaTotalSinIva = (arrayProductos: LineaTicket[]) : number => {
    const totalSinIva = arrayProductos.reduce((acc, linea) => acc + (linea.producto.precio * linea.cantidad), 0);
    return totalSinIva;
}


export const calculaIva = (precio : number, tipoDeIva : TipoIva) : number => {
  const ivaAsignado = asignacionPorcentajeDeIva(tipoDeIva);
  const importeIva = precio * ivaAsignado / 100;
  return parseFloat(importeIva.toFixed(2));
}

export const calculaTotalIva = (arrayProductos: LineaTicket[]) : number => {
    const totalIva = arrayProductos.reduce((acc, linea) => {
        const iva = calculaIva(linea.producto.precio, linea.producto.tipoIva);
        
        return acc + iva * linea.cantidad;
        
    }, 0);

   return parseFloat(totalIva.toFixed(2));
}

export const calculaTotalConIva = () : number => {
    const totalsinIva = calculaTotalSinIva(productos);
    const totalIva = calculaTotalIva(productos);

    return totalsinIva + totalIva;
}


// TODO: Refactorizar
export const calculaPrecioLineaTicketConIva = (precio: number, cantidad : number, tipoDeIva: TipoIva) : number => {
    const precioLineaTicketSinIva = precio * cantidad;
    const iva = calculaIva(precioLineaTicketSinIva, tipoDeIva);
    const precioLineaTicketConIva = precioLineaTicketSinIva + iva;

    return precioLineaTicketConIva;
}

console.log(calculaPrecioLineaTicketConIva(2,4, "general"));


