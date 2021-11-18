import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PageNoFound = () => {
    const {uid} = useSelector(state => state.auth);
    let enlace = '';

    if(!uid){
        enlace = '/';
    }else{
        enlace = '/MyProfile';
    }
    return (
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-center p-5 lg:p-20 overflow-hidden relative mt-20 sm:mt-32 md:mt-10">
            <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-2xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                <div className="w-full md:w-1/2">
                    <div className="mb-3 lg:mb-20">
                    <img className = "w-9/12 sm:w-7/12 md:w-8/12 relative z-50" 
                    alt = "Social Academy"
                    src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/BLUEACADEM_Y%20(1).png?alt=media&token=57845c27-1386-40ae-a6b5-d9ab0dbbe1ed"/>
                    </div>
                    <div className="mb-4 md:mb-20 text-gray-600 font-light">
                        <h1 className="font-Poppins font-bold uppercase text-3xl lg:text-5xl text-primary mb-5 md:mb-10">Error 404</h1>
                        <p className = "text-xl mb-0" >La página a la que intentas acceder</p>
                        <p className = "text-xl" >No existe</p>
                    </div>
                    <div className="mb-10 md:mb-0">
                        <Link to = {enlace}
                        className="text-2xl font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-500 hover:text-blue-600" >
                            Ir a Inicio
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/Error404.png?alt=media&token=18055af1-7ae7-429b-9b63-5d79848e213f" 
                className="w-full"
                alt = "Error 404" />
                
                </div>
            </div>
            <div className="w-64 z-0 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
            <div className="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
        </div>
    )
}

export default PageNoFound;