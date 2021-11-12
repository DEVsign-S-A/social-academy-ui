import React from 'react'

export const CustomInputFile = ({archivoPermitido}) => {
    return (
                    <div className = "my-4 py-2 flex flex-column items-center" >
                        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                            <div className="flex justify-center">
                                 <div className="md:w-10/12 w-8/12">
                                    <div className=" cursor-pointer relative border-dotted md:h-36 h-28 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                                        <div className="absolute">
                                            <div className="flex flex-col items-center"> 
                                                <i className="fa fa-folder-open fa-4x text-blue-700"></i> 
                                                <span className="block text-gray-400 font-normal">Subir Archivo</span> 
                                            </div>
                                        </div> 
                                        <input type="file" className="pointer h-full w-full opacity-0" accept = {archivoPermitido} name="recursoCompartiodo" required = {true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}
