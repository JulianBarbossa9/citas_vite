import { useState, useEffect } from "react";
import Error from "./Error";


const Formulario = ({ pacientes,setPaciente, paciente, setPacienteUno }) => {
    

    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [alta, setAlta] = useState("");
    const [sintomas, setSintomas] = useState("");
    
    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    },[paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return fecha + random
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del formulario
        /* el método.include mira si esta incluido un determinado elemento y devuelve true o false segun corresponda
         */
        if([nombre,propietario,email,alta,sintomas].includes('')){
            setError(true)
            return 
        } else {
            setError(false)

            //Objeto de pasciente
            const objetoPacientes = {
                nombre,
                propietario,
                email,
                alta,
                sintomas
                // id: generarId()
            }


            if(paciente.id){
                
                //Editando el Registro
                console.log('Editando registro')
                console.log(paciente.id)
                console.log(objetoPacientes.id)
                objetoPacientes.id = paciente.id
                const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPacientes: pacienteState)
                
                setPaciente(pacienteActualizado)
                setPacienteUno({})

            } else {
                //Nuevo registro
                console.log('Esto es un nuevo registro')
                objetoPacientes.id = generarId();  
                console.log(objetoPacientes.id)
                setPaciente([...pacientes, objetoPacientes]);
            }

            //otra forma
            //setPaciente(pacientes =>[...pacientes,paciente])

            //Resetear el formulario
            setNombre('')
            setPropietario('')
            setEmail('')
            setAlta('')
            setSintomas('')

        }
        
    }
    
   
    return (  
        <>
            <div className="md:w-1/2 lg:w-2/5">
                <h2 className="font-black text-3xl text-center">Seguimiento Pascientes</h2>

                <p className="text-lg mt-5 text-center mb-10">
                    Añade Pacientes y {''}
                    <span className="text-yellow-500 font-bold text-lg"> 
                        Administrarlos 
                    </span>
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-lg py-10 px-5 mb-9 mx-5"
                >
                    {error && <Error mensaje='Todos los campos son obligatorios'/>}
                    <div className="mb-4">
                        <label htmlFor="mascota" className="block text-gray-600 uppercase font-extrabold">Nombre Mascota</label>
                        <input 
                            id="mascota"
                            type="text" 
                            placeholder="Nombre de la Mascota"
                            className="border-2 w-full p-2 mt-2 rounded-lg"
                            value={nombre}
                            onChange={ (e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="propietario" className="block text-gray-600 uppercase font-extrabold ">Propietario</label>
                        <input 
                            id="propietario"
                            type="text" 
                            placeholder="Nombre del Propietario"
                            className="border-2 w-full p-2 mt-2 rounded-lg"
                            value={propietario}
                            onChange={(e) => setPropietario(e.target.value)}
                            />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 uppercase font-extrabold ">Email
                        </label>
                        <input 
                            id="email"
                            type="email" 
                            placeholder="Email Contacto Propietario"
                            className="border-2 w-full p-2 mt-2 rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="alta" className="block text-gray-600 uppercase font-extrabold ">Alta Medica
                        </label>
                        <input 
                            id="alta"
                            type="date" 
                            className="border-2 w-full p-2 mt-2 rounded-lg"
                            value={alta}
                            onChange={(e) => setAlta(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="sintomas" className="block text-gray-600 uppercase font-extrabold ">Descripción de Sintomas
                        </label>
                        <textarea 
                            className="border-2 w-full p-2 mt-2 rounded-lg"
                            id="sintomas" 
                            placeholder="Describe los sintomas"
                            value={sintomas}
                            onChange={(e) => setSintomas(e.target.value)}>
                                
                        </textarea>
                    </div>
                    <input 
                        type="submit" 
                        className="bg-yellow-500 rounded-lg p-3 uppercase font-bold text-gray-700 hover:bg-yellow-400 cursor-pointer transition-all w-full "
                        value={paciente.id ? 'Editar Cliente' : 'Agregar Cliente'}
                    />
                </form>
            </div>
        </>
    );
}
 
export default Formulario;