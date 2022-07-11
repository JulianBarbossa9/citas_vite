import { useState } from 'react'
import Header from './Components/Header'
import ListadoPaciente from './Components/ListadoPaciente'
import Formulario from './Components/Formulario'
import { useEffect } from 'react';



function App() {

  const [pacientes, setPaciente] = useState([]);
  const [paciente, setPacienteUno ] = useState({});

  // const tomarUnValor = (valor) => {
  //   console.log(valor)
  // }

  //Guarda el objeto que esta en el local Storage
  useEffect(() => {
    const obtenerLS =  JSON.parse(localStorage.getItem('pacientes')) ?? [];
    setPaciente(obtenerLS)
  },[])

  // Manejo de local Storage sincronizando
  useEffect(() =>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes]) 


  const eliminarPaciente = (id) => {
    // console.log('Eliminando Paciente...', id)
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPaciente(pacientesActualizados)
  }
  

  return (
    <div className='container mx-auto mt-20'>
      <Header 
        // tomarUnValor={tomarUnValor}
      />

      <div className="mt-20 md:flex ">
        <Formulario 
          pacientes={pacientes}
          setPaciente={setPaciente}
          paciente={paciente}
          setPacienteUno={setPacienteUno}
        />
        <ListadoPaciente 
          pacientes={pacientes}
          setPacienteUno={setPacienteUno}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
