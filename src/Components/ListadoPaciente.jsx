import { useEffect } from 'react'
import Paciente from "./Paciente";

const ListadoPaciente = ({ pacientes, setPacienteUno, eliminarPaciente }) => {
  // console.log(pacientes)
  // console.log(pacientes && pacientes == 0);

  // useEffect(() =>{
  //   if(pacientes.length > 0){
  //     console.log('Nuevo paciente')
  //   } else {
  //     console.log('No hay pacientes')
  //   }
  // },[pacientes])

  return (
    <>
      <div className="w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length == 0 ? (
          <>
            <h2 className="text-center font-black text-3xl">
              No hay Pacientes
            </h2>

            <p className="text-xl text-center mt-5 mb-10">
              Ingrese lo datos del formulario para agendar una {""}
              <span className="text-yellow-500 font-bold text-lg">Cita y aparezcan en este lugar</span>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-center font-black text-3xl">
              Listado Pacientes
            </h2>

            <p className="text-xl text-center mt-5 mb-10">
              Administrar Pacientes y {""}
              <span className="text-yellow-500 font-bold text-lg">Citas</span>
            </p>

            {pacientes.map((paciente) => (
              <Paciente 
                key={paciente.id} 
                paciente={paciente} 
                setPacienteUno={setPacienteUno}
                eliminarPaciente={eliminarPaciente}

              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ListadoPaciente;
