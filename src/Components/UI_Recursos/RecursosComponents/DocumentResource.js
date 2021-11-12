import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../UI_Footer/Footer';
import { useHistory } from 'react-router';
import back from "../../../assets/UI_Forum/Arrow-Left.svg";

export const DocumentResource = ({
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
        <div className = "mt-24 flex flex-col ">
            <div className = "ContenedorDocumento" >
                <div className = "UserInformation " >
                    <div className = "flex flex-col AboutResource">
                        <h2>Descripcion</h2>
                        <h3>{descripcion} </h3>
                        <h4>{categoria} </h4>

                        <h5>
                            <i class="far fa-calendar-alt"></i> 
                            &nbsp;
                            &nbsp;
                            {fechaSubida}
                        </h5>

                        <a href = {link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className = "BotonNueva shadow-lg" >
                            Pantalla completa
                        </a>
                    </div>

                    

                    <div className = "DocumentUser">
                        <h2 className = "mt-8">Compartido por</h2>
                        <Link to = {`/Profile/${uid}`}
                        className = "w-8/12 flex flex-col justify-center" >
                            <img src = {fotoPerfil} />
                            <h1 className = "text-center" >{nombreUsuario}</h1>
                        </Link>
                    </div>
                </div>
                <div className = "DocumentShared" >
                    <div className = "w-full flex fkex-row justify-end items-center mb-8" >
                        <button
                        className="flex outline-none md:p-3 p-2 bg-second text-white text-sm md:text-base md:rounded-xl rounded-md shadow-lg font-Poppins font-medium cursor-pointer"
                        onClick={handleBack}
                        >
                            <img
                            src={back} alt='back'
                            className="mt-2 mx-2" />
                                Regresar
                        </button>
                    </div>
                    <h1>{titulo}</h1>
                    <div className = "ContenedorPDF" >
                        <embed src = {link} className = "PDFviewer" />
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}
