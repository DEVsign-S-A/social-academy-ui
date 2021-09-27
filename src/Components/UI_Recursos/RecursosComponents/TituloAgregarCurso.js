import React from 'react';
import { useHistory } from 'react-router';
import back from "../../../assets/UI_Forum/Arrow-Left.svg";

export const TituloAgregarCurso = ({titulo, pathHistory}) => {
    const history = useHistory();

    const handleBack = () =>{
        history.push(pathHistory)
    }
    return (
        <div className = "flex justify-center flex-wrap NewResource" >
               <div className = "flex flex-row justify-between items-center flex-wrap TituloAgregarCurso">
                <h1 className="text-gray-700 font-Poppins font-semibold md:text-2xl text-lg ml-3">
                    Publicar {titulo}
                </h1>

                <button
                className="flex outline-none md:p-3 p-2 my-3 bg-second text-white md:text-xl text-base mx-5 md:rounded-xl rounded-md shadow-lg font-Poppins font-medium cursor-pointer"
                onClick={handleBack}
                >
                    <img
                    src={back} alt='back'
                    className="mt-2 mx-2" />
                        Regresar
                </button>
            </div>
        </div>
        
    )
}
