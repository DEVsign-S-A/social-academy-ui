import React from 'react';
import { useSelector } from 'react-redux';
import { areaEstudio, tipoArchivo } from '../../../data/dataSelect';
import { CustomInputFile } from './CustomInputFile';
import { InputLink } from './InputLink';
import { SelectComponent } from './SelectComponent';
import { SelectType } from './SelectType';

export const FormNewResource = () => {

    const {tipoDoc} = useSelector(state => state.doc )

    return (
            <div className = "flex justify-center" >
                <form className = "rounded-lg bg-gray-50 mt-10 mx-6 pb-8 shadow-xl ring-1 ring-gray-200 FormularioANR"
                // onSubmit={} 
                >
                    <div className="my-2 py-2">
                        <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                        Título
                        </p>
                        <input
                        required={true}
                        className="mx-8 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-sm sm:text-base text-gray-700"
                        type="text"
                        />
                    </div>

                    <div className="my-2 py-2">
                        <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                        Descripcion
                        </p>
                        <div className="flex justify-between">
                            <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                                Explica a los usuarios de que trata el recurso compartido
                            </p>
                        </div>

                        <textarea
                        className="mx-8 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-b-xl rounded-t-none py-2 outline-none px-5 font-Poppins text-sm sm:text-base text-gray-700 h-48 resize-none"
                        required={true}
                        ></textarea>
                    </div>

                    <div className = "flex flex-row flex-wrap justify-around my-2 py-2">
                        <div className="ContenedoresSelect">
                            <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                            Categoria
                            </p>
                            <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                            Selecciona el area de estudio del recurso
                            </p>
                            <SelectComponent valor = {areaEstudio} />
                        </div>

                        <div className="ContenedoresSelect">
                            <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                            Tipo
                            </p>
                            <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                            Selecciona el tipo de archivo del recurso
                            </p>

                            <SelectType valor = {tipoArchivo} />
                        </div>
                    </div>

                    {
                        (()=>{
                            switch (tipoDoc) {
                                case 'Documento':
                                   return (<CustomInputFile archivoPermitido = {".pdf"} />);
                                case 'Video':
                                    return(<InputLink/>);
                                case 'Recurso':
                                    return (<CustomInputFile archivoPermitido = {".zip, .rar, .7zip"} />);
                            }
                        })
                        ()
                    }
  
                    <input
                        type="submit"
                        className="py-3 px-3 rounded-lg text-center bg-BlueSocial shadow-xl m-5 cursor-pointer font-Poppins font-medium text-white"
                        value="Publicar"
                    />
                </form>
            </div>
    )
}
