import React from 'react';
import { areaEstudio } from '../../../data/dataSelect';
import { SelectComponent } from '../../UI_Recursos/RecursosComponents/SelectComponent';
import { AddLink } from './AddLink';

export const FormNewCourse = () => {
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

                    <div className = "flex flex-row flex-wrap justify-around items-start" >
                        <div className = "my-2 py-2 ContenedorPrecio">
                            <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                            Precio
                            </p>
                            <div className="flex justify-between">
                                <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                                    Especifica en dolares el precio al que se ofrecerá el curso
                                </p>
                            </div>
                            <input
                            required={true}
                            className="mx-8 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-sm sm:text-base text-gray-700"
                            type="text"
                            />
                        </div>

                        <div className="my-2 py-2 ContenedorFoto">
                            <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                            Foto de Portada
                            </p>
                            <div className="flex justify-between">
                                <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                                    Elige una foto representativa del curso
                                </p>
                            </div>
                            <label class="cursor-pointer my-2 py-2">
                                <span class="focus:outline-none font-Poppins text-white text-sm py-2 px-4 ml-4 mt-4 rounded-2xl bg-blue-800 hover:bg-blue-800 hover:shadow-md ">
                                    Subir Imagen
                                </span>
                                <input type="file" class="hidden" required = {true} />
                            </label>
                        </div>
                    </div>

                    <div className="my-2 py-2">
                        <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                        Descripcion
                        </p>
                        <div className="flex justify-between">
                            <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                                Explica a los usuarios de que trata el curso
                            </p>
                        </div>

                        <textarea
                        className="mx-8 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-b-xl rounded-t-none py-2 outline-none px-5 font-Poppins text-sm sm:text-base text-gray-700 h-40 resize-none"
                        required={true}
                        ></textarea>
                    </div>

                    <div className="my-2 py-2">
                        <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                        Temas desarrollados
                        </p>
                        <div className="flex justify-between">
                            <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                                Explica a los usuarios que conocimientos adquirirán con el curso
                            </p>
                        </div>

                        <textarea
                        className="mx-8 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-b-xl rounded-t-none py-2 outline-none px-5 font-Poppins text-sm sm:text-base text-gray-700 h-36 resize-none"
                        required={true}
                        ></textarea>
                    </div>

                    <div className="my-2 py-2">
                        <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                        Requisitos
                        </p>
                        <div className="flex justify-between">
                            <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                                Explica a los usuarios los conocimientos previos necesarios para entender este curso
                            </p>
                        </div>

                        <textarea
                        className="mx-8 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-b-xl rounded-t-none py-2 outline-none px-5 font-Poppins text-sm sm:text-base text-gray-700 h-36 resize-none"
                        required={true}
                        ></textarea>
                    </div>

                        <div className="ContenedoresSelect">
                            <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                            Categoria
                            </p>
                            <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                            Selecciona el area de estudio del curso
                            </p>
                            <SelectComponent valor = {areaEstudio} />
                        </div>

                        <div className="my-2 py-2">
                            <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                            Agregar videos
                            </p>
                            <div className="flex justify-between">
                                <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                                    Añade las clases que constituirán tu curso
                                </p>
                            </div>

                            <textarea
                            className="mx-8 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-b-xl rounded-t-none py-2 outline-none px-5 font-Poppins text-sm sm:text-base text-gray-700 h-36 resize-none"
                            required={true}
                            ></textarea>
                        </div>

                        <AddLink/>
                    
                    <input
                        type="submit"
                        className="py-3 px-3 rounded-lg text-center bg-BlueSocial shadow-xl m-5 cursor-pointer font-Poppins font-medium text-white"
                        value="Publicar"
                    />
                </form>

                
            </div>
    )
}
