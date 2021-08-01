import { useState } from 'react';

export const useCounter = ( initialState = 20 ) => {
    
    const [counter, setCounter] = useState(initialState); // 10
        
    const reset = () => {
        setCounter( initialState );
    }

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        if(counter > 0 ){  
            setCounter( counter - 1 );
            localStorage.setItem("cupones", counter);
            console.log(counter);
        }else{
            
            setCounter( (cont) => cont = 0 );
        }
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}
