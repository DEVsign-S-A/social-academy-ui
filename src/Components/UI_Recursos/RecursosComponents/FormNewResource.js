import React from 'react';
import { areaEstudio, tipoArchivo } from '../../../data/dataSelect';
import { SelectComponent } from './SelectComponent';

export const FormNewResource = () => {
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

                            <SelectComponent valor = {tipoArchivo} />
                        </div>
                    </div>

                    <div className = "my-4 py-2 flex flex-column items-center" >
                        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                            <div className="flex justify-center">
                                 <div className="md:w-10/12 w-8/12">
                                    <div className=" cursor-pointer relative border-dotted md:h-36 h-28 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                                        <div className="absolute">
                                            <div className="flex flex-col items-center"> 
                                                <i className="fa fa-folder-open fa-4x text-blue-700"></i> 
                                                <span className="block text-gray-400 font-normal">Subir Archivo</span> 
                                            </div>
                                        </div> 
                                        <input type="file" className="pointer h-full w-full opacity-0" accept = ".pdf" name="recursoCompartiodo" required = {true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <input
                        type="submit"
                        className="py-3 px-3 rounded-lg text-center bg-BlueSocial shadow-xl m-5 cursor-pointer font-Poppins font-medium text-white"
                        value="Publicar"
                    />
                </form>
            </div>
    )
}
