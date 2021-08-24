import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: true, error: null});

    const isMounted = useRef(true);

    useEffect(()=>{
        return ()=>{
            isMounted.current = false;
        }
    }, [])

    useEffect(()=>{

        setState({data:null, loading: true, error: null})
        fetch(url)
        .then(resp => resp.json())
        .then(data =>{  
            
            if(isMounted.current){
                setState({
                    loading: false,
                    error: null,
                    data: data
                })
            }else{
                console.log('setState no se llamo');
            }
            
            
        })
        .catch(()=>{
            setState({
                data: null, loading: true, error: 'No se pudo cargar la informacion'
            })
        })
    },[url]);

    return state;
}