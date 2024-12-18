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

// Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = pacientes.filter((paciente : Pacientes) : boolean => paciente.especialidad === "Pediatra");

console.log(obtenPacientesAsignadosAPediatria);

// Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = pacientes.filter((paciente : Pacientes) : boolean => paciente.edad < 10 && paciente.especialidad === "Pediatra");

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios);

// Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
const activarProtocoloUrgencia = pacientes.some((paciente: Pacientes): boolean => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39);
 
console.log(activarProtocoloUrgencia);

// Queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
const reasignaPacientesAMedicoFamilia = pacientes.map((pacientes) => {
  return {
    ...pacientes,
    especialidad: pacientes.especialidad === "Pediatra" ? "Medico de familia" : pacientes.especialidad,
  };
});

console.log(reasignaPacientesAMedicoFamilia);


//Queremos comprobar si en la lista hay algún paciente asignado a pediatría
const HayPacientesDePediatria = pacientes.some((paciente: Pacientes): boolean => paciente.especialidad === "Pediatra");

console.log(HayPacientesDePediatria);


//Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = pacientes.reduce((contador: NumeroPacientesPorEspecialidad, paciente) => {
  if (paciente.especialidad === "Pediatra"){
    contador.pediatria +=1;
  } else if (paciente.especialidad === "Medico de familia") {
    contador.medicoDeFamilia += 1;
  } else {
    contador.cardiologia +=1;
  }
  return contador;
}, 
{
  medicoDeFamilia: 0,
  pediatria: 0,
  cardiologia: 0
}
);

console.log(cuentaPacientesPorEspecialidad);