import React, {useState} from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from '../../Hook/useForm';
import { useSelector } from 'react-redux';

export const AboutMe = () => {
    const MyUser = useSelector(state => state.auth);

    const hoy = moment().format("YYYY-MM-DD");
    

    const [formValues, handleInputChange, handleInputObject, reset] = useForm(MyUser);
    const {userId, nombreUsuario, fotoPerfil, correo, 
        fechaNacimiento, carrera, direccion, 
        telefono, socialMedia, descripcion, habilidades, 
        idiomas, extracurricular, experiencia, curriculumLink} = formValues;

    const annos = moment().diff(fechaNacimiento, 'years', false);

    const [languages, setLanguages] = useState([
        { id: uuidv4(), language: '' },
      ]);

      const handleRemoveLanguages = id => {
        const values  = [...languages];
        values.splice(values.findIndex(value => value.id === id), 1);
        setLanguages(values);
      }

      const handleAddLanguage = (e) => {
        e.preventDefault();
        //setInputFields([...inputFields, { id: uuidv4(),  language: e.target.value]);
      }

    return (
        <form className = "flex flex-row ProfileScreen">
            <div className = "flex flex-col justify-center items-center ContenedoresPerfil UserInfo">
            <img src = {fotoPerfil}
            alt = "Foto de Perfil"
            className = "UserImage" />
            
                <div className = "flex flex-col justify-center items-center" >
                    <div className = "MyName flex flex-row flex-column items-center">
                            <h3><b>Nombre Usuario</b></h3>
                            <input type = "text" name = "nombreUsuario" autoComplete = "none"
                            value = {nombreUsuario}
                            onChange = {handleInputChange} 
                            className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputMyName" />
                    </div>
                        
                    <div className = "MyName flex flex-row flex-column items-center">
                            <h3><b>Carrera</b></h3>
                            <input type = "text" name = "carrera" autoComplete = "none"
                            value = {carrera}
                            onChange = {handleInputChange} 
                            className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputMyName" />
                    </div>
            
                    <div className = "UserInformation">
                        <div className = "FechaNacimiento">
                            <div className = "SeleccionarFecha" >
                                <h4><b>Fecha Nacimiento:</b></h4>
                                <input type = "date" name = "fechaNacimiento" 
                                value = {fechaNacimiento}
                                className = "focus:outline-none" max = {hoy} />
                            </div>
                        </div>

                        <div className = "MyInformation flex flex-row flex-wrap">
                            <h4><b>Ciudad:</b></h4>
                            <input type = "text" name = "ciudad" autoComplete = "none"
                            value = {direccion.ciudad}
                            onChange = {handleInputObject(direccion)} 
                            className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputMyInformation" />
                        </div>
                        <div className = "Departamento flex flex-row flex-wrap">
                            <h4><b>Departamento:</b></h4>
                            <input type = "text" name = "departamento" autoComplete = "none"
                            value = {direccion.departamento}
                            onChange = {handleInputChange}  
                            className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputDepartamento" />
                        </div>
                        <div className = "MyInformation flex flex-row flex-wrap">
                            <h4><b>Pais:</b></h4>
                            <input type = "text" name = "pais" autoComplete = "none" 
                            value = {direccion.pais}
                            onChange = {handleInputChange} 
                            className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputMyInformation" />
                        </div>
                        
                        <div className = "MyInformation flex flex-row flex-wrap">
                        <h4><b>Telefono:</b></h4>
                            <input type = "text" name = "telefono" autoComplete = "none" 
                            value = {telefono}
                            onChange = {handleInputChange}
                            className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputMyInformation" />
                        </div>

                        <div className = "MyInformation flex flex-row flex-wrap">
                            <h4><b>Correo:</b></h4>
                            <input type = "text" name = "email" autoComplete = "none"
                            value = {correo}
                            onChange = {handleInputChange}  
                            className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputMyInformation" />
                        </div>
                    </div>
        
                    {curriculumLink  && <div className = "flex justify-center">
                            <a href = {curriculumLink}
                                className = "BotonCurriculum" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Ver Curriculum
                            </a>
                        </div>
                    }
                </div>
            </div>

                <div className = "flex flex-col justify-center AboutUser">
                    <div className = "Bio ContenedoresPerfil">
                        <h1 className = "TitulosPerfil"> Bio</h1>
                        
                            <textarea
                                className="TextDescripcion bg-gray-100 ring-1 ring-gray-200 rounded-xl outline-none px-5 text-gray-700 resize-none"
                                required={true}
                                value = {descripcion}
                                onChange = {handleInputChange} 
                                name = "descripcion"
                            ></textarea>
                    </div>

                    <div className = "Bio ContenedoresPerfil">
                        <h1 className = "TitulosPerfil"> Redes Sociales</h1>
                        
                        <div className = "MySocialMedia flex flex-column">
                                <div className = "MySocialNetwork flex flex-row flex-wrap">
                                    <div className = "IndividualNetwork flex items-center justify-center text-gray-700 border-2 border-gray-700 hover:text-blue-900 hover:border-blue-900" >
                                        <i className="fab fa-facebook-f"></i>
                                    </div>
                                    <input type = "text" name = "facebook" autoComplete = "none" 
                                    value = {socialMedia.facebook}
                                    onChange = {handleInputChange} 
                                    className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputRedSocial" />
                                </div>

                                <div className = "MySocialNetwork flex flex-row flex-wrap">
                                    <div className = "IndividualNetwork flex items-center justify-center text-gray-700 border-2 border-gray-700 hover:text-pink-600 hover:border-pink-600" >
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                    <input type = "text" name = "instagram" autoComplete = "none" 
                                    className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputRedSocial" />
                                </div>

                                <div className = "MySocialNetwork flex flex-row flex-wrap">
                                    <div className = "IndividualNetwork flex items-center justify-center text-gray-700 border-2 border-gray-700 hover:text-blue-700 hover:border-blue-700" >
                                        <i className="fab fa-linkedin-in"></i>
                                    </div>
                                    <input type = "text" name = "linkedin" autoComplete = "none" 
                                    className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputRedSocial" />
                                </div>

                                <div className = "MySocialNetwork flex flex-row flex-wrap">
                                    <div className = "IndividualNetwork flex items-center justify-center text-gray-700 border-2 border-gray-700 hover:text-blue-400 hover:border-blue-400" >
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                    <input type = "text" name = "twitter" autoComplete = "none" 
                                    className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputRedSocial" />
                                </div>
                            </div>
                </div>

                
                
                <div className = "UserLanguages ContenedoresPerfil">
                    <h1 className = "TitulosPerfil">Idiomas</h1>
                    {/*<div className = "flex flex-row flex-wrap Languages">
                    {
                        (idiomas && Array.isArray(idiomas) && (idiomas.length > 0) ) ? (
                            idiomas.map((idioma, index) =>(
                                <UserLabel key = {index} dato = {idioma} />
                            ))) : (
                                <NothingToShow dato = {"idiomas"} />
                            )
                    }
                </div>*/}
                </div>
            </div>

                <div className = "flex flex-col justify-center UserExperience">
                    <div className = "UserCurricular ContenedoresPerfil">
                        <h1 className = "TitulosPerfil">Actividades Extracurriculares</h1>
                        {/*
                            (extracurricular && Array.isArray(extracurricular) && (extracurricular.length > 0)) ? (
                            extracurricular.map((curricular, index) =>(
                                <AbilityList key = {index} dato = {curricular} />
                            ))) : (
                                <NothingToShow dato = {"actividades"} />
                            )
                            */}
                    </div>

                    <div className = "UserWork ContenedoresPerfil">
                        <h1 className = "TitulosPerfil">Experiencia laboral</h1>
                        {/*
                            (experiencia && Array.isArray(experiencia) && (extracurricular.length > 0) ) ? (
                                experiencia.map((expLaboral, index) =>(
                                    <AbilityList key = {index} dato = {expLaboral.descripcion} {...expLaboral} />
                                ))) : (
                                    <NothingToShow dato = {"experiencia laboral"} />
                                )
                        */}
                    </div>

                <div className = "UserWork ContenedoresPerfil">
                    <h1 className = "TitulosPerfil">
                        Habilidades
                    </h1>
                    {/*<div className = "flex flex-row flex-wrap Abilities">
                        {
                            (habilidades && Array.isArray(habilidades) && (habilidades.length > 0) ) ? (
                                habilidades.map((habilidad, index) =>(
                                    <UserLabel key = {index} dato = {habilidad} />
                                ))) : (
                                    <NothingToShow dato = {"experiencia laboral"} />
                                )
                        }
                    </div>*/}
                </div>
            </div>
        </form>
    )
}
