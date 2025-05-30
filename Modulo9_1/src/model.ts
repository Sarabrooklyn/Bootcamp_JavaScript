export type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";

export interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}

export interface LineaTicket {
    producto: Producto;
    cantidad: number;
}

export interface ResultadoLineaTicket {
    nombre: string;
    cantidad: number;
    precioSinIva: number;
    tipoIva: TipoIva;
    precioConIva: number;
}

export interface ResultadoTotalTicket {
    totalSinIva: number;
    totalConIva: number;
    totalIva: number;
}
  
export interface TotalPorTipoIva {
    tipoIva: TipoIva;
    cuantia : number;
}
  
export interface TicketFinal {
    lineas: ResultadoLineaTicket[];
    total: ResultadoTotalTicket;
    desgloseIva: TotalPorTipoIva[];
}

export const tiposDeIva : TipoIva[] = [
    "general",
    "reducido",
    "superreducidoA",
    "superreducidoB",
    "superreducidoC",
    "sinIva"
]
