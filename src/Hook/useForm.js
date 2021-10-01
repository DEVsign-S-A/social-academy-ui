import { useState } from "react";


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    const handleInputObject = ({target}) =>{
        setValues({
            ...values,
            direccion:{
                [ target.name ]: target.value
            }
        });
    }

    return [ values, handleInputChange, handleInputObject, reset ];

}
