type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];


const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesPediatria: Pacientes[] = []; 

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesPediatria = [...pacientesPediatria, pacientes[i]];
    }
  }
  return pacientesPediatria; 
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
 let pacientesPediatriaMenorDiezAños : Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++){
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10){
      pacientesPediatriaMenorDiezAños = [...pacientesPediatriaMenorDiezAños, pacientes[i]]
    }
  }
  return pacientesPediatriaMenorDiezAños;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  for (let i= 0; i < pacientes.length; i++){
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39){
      activarProctolo = true;
    }
  }
  return activarProctolo;
}

console.log (activarProtocoloUrgencia(pacientes));


/* VERSION MUTABLE

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
   for (let i = 0; i < pacientes.length; i++){
   if (pacientes[i].especialidad === "Pediatra"){
      pacientes[i].especialidad = "Medico de familia";
   }
 }
 return pacientes;
}

*/

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  let nuevosPacientesMedicoDeFamilia : Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++){
    const paciente = pacientes[i];
    if (paciente.especialidad === "Pediatra"){
      nuevosPacientesMedicoDeFamilia [i] = {...paciente, especialidad : "Medico de familia"}
    } else {
      nuevosPacientesMedicoDeFamilia [i] = paciente;
    }
  }
  return nuevosPacientesMedicoDeFamilia;
}

console.log(reasignaPacientesAMedicoFamilia(pacientes));

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++){
    if (pacientes[i].especialidad === "Pediatra"){
      return true;
    }
  } 
return false
};

console.log(HayPacientesDePediatria(pacientes));

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  const resultado: NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0,
  }

   for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Medico de familia") {
        resultado.medicoDeFamilia++;
      } else if (pacientes[i].especialidad === "Pediatra") {
        resultado.pediatria++;
      } else if (pacientes[i].especialidad === "Cardiólogo") {
        resultado.cardiologia++;
      }
    }
    return resultado;
  }

  console.log(cuentaPacientesPorEspecialidad(pacientes));

