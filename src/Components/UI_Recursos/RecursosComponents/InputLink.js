import React from 'react';

export const InputLink = () => {
    return (
            <div className = "my-2 py-2">
                <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                    Enlace al video
                </p>
                <div className="flex justify-between">
                                <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                                Escribe el enlace al video de YouTube que quieres compartir
                                </p>
                </div>
                <input
                        required={true}
                        className="mx-8 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-sm sm:text-base text-gray-700"
                        type="text"
                        />
            </div>
    )
}
