interface Reserva {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}

const reservas : Reserva[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

// ****** CASO 1 ******

class TotalesParticular {
  reservas : Reserva[];
  
  constructor(reservas : Reserva[]){

    this.reservas = reservas;

  }

  asignarPrecioHabitacion (tipo : "standard" | "suite") : number {
    return tipo === "standard" ? 100 : 150;
  }

  calculaSubtotal() {
   
  const subtotal = this.reservas.reduce((acum, reserva) => {

  const precioHabitacion = this.asignarPrecioHabitacion(reserva.tipoHabitacion);
  const desayuno = reserva.desayuno ? 15 * reserva.pax * reserva.noches : 0;
  
    if (reserva.pax > 1){
      return acum + precioHabitacion + 40 * reserva.noches + desayuno;
    } 
    return acum + precioHabitacion * reserva.noches + desayuno;
   }, 0);

  
  return subtotal;

  }

  calculaTotal (){
    return (this.calculaSubtotal() * 1.21).toFixed(2);
  }
};

const nuevaReservaParticular = new TotalesParticular (reservas);
console.log(nuevaReservaParticular.calculaSubtotal());
console.log(nuevaReservaParticular.calculaTotal());



// ****** CASO 2 ******

class TotalesTourOperador extends TotalesParticular {

  constructor(){
    super(reservas);
  }

 asignarPrecioHabitacion (_tipo: "standard" | "suite"){
    return 100;
 }

 calculaSubtotal() {
  
 
  const subtotal = this.reservas.reduce((acum, reserva) => {
    const precioHabitacion = this.asignarPrecioHabitacion(reserva.tipoHabitacion);
    const desayuno = reserva.desayuno ? 15 * reserva.pax * reserva.noches : 0;
    
     return acum + precioHabitacion * reserva.noches + desayuno;
    }, 0);

   return subtotal * 0.85;
  }

  calculaTotal (){
    return (this.calculaSubtotal() * 1.21).toFixed(2);
  }
}

const nuevaReservaTourOperador = new TotalesTourOperador();
console.log(nuevaReservaTourOperador.calculaSubtotal());
console.log(nuevaReservaTourOperador.calculaTotal());



// ****** DESAFÍO ******


class TotalesReservaBase {
  reservas : Reserva[];
  
  constructor(reservas : Reserva[]){

    this.reservas = reservas;
  }

   asignarPrecioHabitacion (_tipo: "standard" | "suite") : number {
    return 0;
  }

  calculaSubtotal() {
   
  const subtotal = this.reservas.reduce((acum, reserva) => {
    const precioHabitacion = this.asignarPrecioHabitacion(reserva.tipoHabitacion);
    const desayuno = reserva.desayuno ? 15 * reserva.pax * reserva.noches : 0;

     return acum + precioHabitacion * reserva.noches + desayuno;
   }, 0);

   return subtotal;
  }

  calculaTotal (){
    return (this.calculaSubtotal() * 1.21).toFixed(2);
  }
};


class TotalesReservaParticular extends TotalesReservaBase {

  constructor(){
    super(reservas);
  }

  asignarPrecioHabitacion (tipo : "standard" | "suite") : number {
    return tipo === "standard" ? 100 : 150;
  }

  calculaSubtotal(): number {
    
    const subtotal = this.reservas.reduce((acum, reserva) => {
      const precioHabitacion = this.asignarPrecioHabitacion(reserva.tipoHabitacion);
      const desayuno = reserva.desayuno ? 15 * reserva.pax * reserva.noches : 0;
      if (reserva.pax > 1){
        return acum + precioHabitacion + 40 * reserva.noches + desayuno;
      } 
      return acum + precioHabitacion * reserva.noches + desayuno;
     }, 0);
  
     return subtotal;
  }
};

const nuevoTotalesReservaParticular = new TotalesReservaParticular()
console.log(nuevoTotalesReservaParticular.calculaSubtotal());
console.log(nuevoTotalesReservaParticular.calculaTotal());



class TotalesReservaTourOperador extends TotalesReservaBase {

  constructor(){
    super(reservas);
  }

  asignarPrecioHabitacion (_tipo : "standard" | "suite") : number {
    return 100;
  }

  calculaSubtotal(): number {
    
    const subtotal = this.reservas.reduce((acum, reserva) => {
     const precioHabitacion = this.asignarPrecioHabitacion(reserva.tipoHabitacion);
     const desayuno = reserva.desayuno ? 15 * reserva.pax * reserva.noches : 0;
     return acum + precioHabitacion * reserva.noches + desayuno
     }, 0);
    
       return subtotal * 0.85;
      }
};


const nuevoTotalesReservaTourOperador = new TotalesReservaTourOperador()
console.log(nuevoTotalesReservaTourOperador.calculaSubtotal());
console.log(nuevoTotalesReservaTourOperador.calculaTotal());
