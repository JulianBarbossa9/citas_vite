const Paciente = ({paciente, setPacienteUno, eliminarPaciente}) => {
    
    const {nombre, propietario, email, alta, sintomas, id } = paciente

    const handleSubmit = () => {
        const respuesta = confirm('Desea borrar el cliente')

        if(respuesta){
            eliminarPaciente(id)
        }
    }
    
    return (  


        <div className="m-9 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''} 
                <span className="font-normal normal-case">{nombre}</span>
            </p>

             <p className="font-bold mb-3 text-gray-700 uppercase">propietario: {''} 
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">email: {''} 
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">fecha Alta medica: {''} 
                <span className="font-normal normal-case">{alta}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">descripción sintomas: {''} 
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div>
                <button 
                    type="button"
                    className="py-2 px-10 bg-yellow-500 hover:bg-yellow-400 text-white font-bold rounded-lg"
                    onClick={()=>setPacienteUno(paciente) }
                >Editar</button>
                 
                <button 
                    type="button"
                    className="py-2 px-10 bg-red-500 hover:bg-red-400 ml-2 text-white font-bold rounded-lg"
                    onClick={handleSubmit} // De esta forma espera a que occurra el ejemplo
                    // onClick={() => eliminarPaciente(id)}//De esta manera llama de una vez la función 
                >Eliminar</button>
            </div>
        </div>
    );
}
 
export default Paciente;