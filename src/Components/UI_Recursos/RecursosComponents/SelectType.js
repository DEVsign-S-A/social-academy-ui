import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeType } from '../../../Redux/Actions/docActions';

export const SelectType = ({valor}) => {
        const dispatch = useDispatch();
        const [state, setState] = useState({
            selectedOption: 'Documento'
        })
    
        const handleChange = (e) =>{
            setState({selectedOption: e.target.value}); 
        };

        useEffect(() => {
            dispatch(changeType(state.selectedOption));
        }, [state, dispatch]);

    return (
        <select 
        defaultValue = {state.selectedOption}
        onChange = {handleChange}
        className = "pointer bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-sm sm:text-base text-gray-700">
        {
             valor.map((option, index) => (
                 <option key = {index} value= {option} >{option}</option>
             ))
         }
     </select>
    )
}
