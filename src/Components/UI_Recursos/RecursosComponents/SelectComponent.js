import React from 'react';


export const SelectComponent = ({valor}) => {


    return (
        <select
            
            className = "pointer bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-sm sm:text-base text-gray-700">
           {
                valor.map((option, index) => (
                    <option key = {index} value= {option} >{option}</option>
                ))
            }
        </select>
    )
}
