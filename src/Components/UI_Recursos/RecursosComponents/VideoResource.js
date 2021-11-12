import React from 'react';
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import back from "../../../assets/UI_Forum/Arrow-Left.svg";
import { Footer } from '../../UI_Footer/Footer';

export const VideoResource = ({
    uid,
    nombreUsuario,
    fotoPerfil,
    link,
    fechaSubida,
    titulo,
    categoria,
    descripcion
}) => {
    const history = useHistory();
    const handleBack = () =>{
        history.push("/Recursos");
    }

    return (
       <>
            <div className = "mt-40 flex flex-col items-center justify-center mb-10">
                <div className = "w-10/12 flex justify-end mb-8 marginButton" >
                    <button
                    className="flex outline-none md:p-3 p-2 my-3 bg-second text-white md:text-xl text-base mx-5 md:rounded-xl rounded-md shadow-lg font-Poppins font-medium cursor-pointer"
                    onClick={handleBack}
                    >
                        <img
                        src={back} alt='back'
                        className="mt-2 mx-2" />
                            Regresar
                    </button>
                </div>

                <div className = "player-wrapper " >
                    <ReactPlayer
                        url= {link}
                        controls = {true}
                        className = "react-player"
                        width="100%"
                        height="68%"
                    />
                    <h1 className = "tituloVideo" >{titulo}</h1>
                </div>
                
                <div className = "flex flex-row justify-around flex-wrap mContenedor relative" >
                    <div className = "flex flex-col justify-center items-center videoRecursoUsuario " >
                        <h1>Compartido por</h1>
                        <Link to = {`/Profile/${uid}`}
                        className = "linkProfile" >
                            <img src = {fotoPerfil} />
                        </Link>
                        <Link to = {`/Profile/${uid}`} >
                            <h2>{nombreUsuario}</h2>
                        </Link>
                        
                    </div>
                    <div className = "videoRecursoDescripcion " >
                        <h1>Descipcion</h1>
                        <h2>{descripcion}</h2>
                    </div>
                    <div className = "videoRecursoMore " >
                        <h1>Publicado</h1>
                        <h2>
                            <i class="far fa-calendar-alt"></i> 
                            &nbsp;
                            &nbsp;
                            {fechaSubida}
                        </h2>
                        <h1>Categoria</h1>
                        <h2>{categoria}</h2>
                    </div>
                </div>
            </div>
            
            <Footer/>
       </>
    )
}
