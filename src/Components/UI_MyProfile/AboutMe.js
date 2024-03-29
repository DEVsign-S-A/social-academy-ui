import React, {useState} from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { useFormProfile } from '../../Hook/useFormProfile';
import { useDispatch, useSelector } from 'react-redux';
import { NothingToShow } from '../UI_UserProfile/UserProfileComponents/NothingToShow';
import Swal from 'sweetalert2';

import { useHistory } from 'react-router';
import { startUploadNewCurriculum, startUploadNewPhoto, updateUserProfile } from '../../Redux/Actions/userInfoActions';

export const AboutMe = () => {
    const dispatch = useDispatch();
    const MyUser = useSelector(state => state.auth);
    const history = useHistory();

    const [inputAdd, setInputAdd] = useState({
        ...MyUser,
        inputIdiomas: '',
        inputHabilidades: '', 
        inputExtracurricular: '',
        inputExperiencia: '',
        fechaInicio: '',
        fechaFinal: ''
    });

    const {idiomas, habilidades, extracurricular, experiencia} = inputAdd;

    const hoy = moment().format("YYYY-MM-DD");
    const currentYear = moment().year() - 70;
    const minDateAllowed = `${currentYear}-01-01`;
    console.log(minDateAllowed);

    const [formValues, handleInputChange, resetInput] = useFormProfile(inputAdd);
    const {nombreUsuario, fotoPerfil, correo, 
        fechaNacimiento, carrera, ciudad, departamento, pais, telefono, 
        facebook, instagram, twitter, linkedin, descripcion, inputHabilidades, inputExperiencia,
        inputIdiomas, fechaInicio, fechaFinal, inputExtracurricular, curriculumLink} = formValues;

    let nuevolanguages = [];
    idiomas.map(idioma=>(
        nuevolanguages = [...nuevolanguages,
        {id: uuidv4(), language: idioma}]))

    const [languages, setLanguages] = useState(nuevolanguages);

    const handleRemove = (id, state, setState) => {
        const values  = [...state];
        values.splice(values.findIndex(value => value.id === id), 1);
        setState(values);
    }

      const handleAdd = (event, inputValue, state, setState, property, inputReset) => {
        event.preventDefault();
        if(inputValue){
            setState([...state, 
                { id: uuidv4(),  [property]: inputValue}]);
            resetInput(inputReset);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Rellene el campo que desea añadir',
              })
        }}

      const handleAddExperience = (e) =>{
            e.preventDefault();
            if(inputExperiencia && fechaInicio && fechaFinal){
                setExperiences([...experiences,
                {id: uuidv4(), descripcion: inputExperiencia, FechaInicio: fechaInicio, FechaFinal: fechaFinal}]);
                resetInput('date');
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Rellene el campo que desea añadir',
                  })
            }
      }  

      let nuevoAbilities = [];
      habilidades.map(habilidad=>(
          nuevoAbilities = [...nuevoAbilities,
          {id: uuidv4(), ability: habilidad}]))
  
      const [abilities, setAbilities] = useState(nuevoAbilities);

      let nuevoActivities = [];
      extracurricular.map(extra=>(
          nuevoActivities = [...nuevoActivities,
          {id: uuidv4(), activity: extra}]))
  
      const [activities, setActivities] = useState(nuevoActivities);

      let nuevoExperiences = [];
      experiencia.map(expe=>(
          nuevoExperiences = [...nuevoExperiences,
          Object.assign(expe, {id: uuidv4()})
        ]
          ))

      const [experiences, setExperiences] = useState(nuevoExperiences);

      const extractArrayWithoutId = (values, property) =>{
          let arrayExtracted = [];
          if(values && Array.isArray(values) && (values.length > 0)){
            arrayExtracted = values.map(value => value[property]);
          }
          return arrayExtracted;
      }

      const extractObjectsWithoutId = (values) =>{
          let objectsExtracted = [];
          if(values && Array.isArray(values) && (values.length > 0)){
            objectsExtracted = values.map((value) => {
                delete value.id;
                return value;
            });
          }
          return objectsExtracted;
      }

      const getUpdatedInfo = () =>{
        const savedIdiomas = extractArrayWithoutId(languages, "language");
        const savedHabilidades = extractArrayWithoutId(abilities, "ability");
        const savedExtracurricular = extractArrayWithoutId(activities, "activity");
        const savedExperiencias = extractObjectsWithoutId(experiences);

        const updatedInfo = {
                uid: MyUser.uid,
                nombreUsuario: nombreUsuario,
                fotoPerfil: MyUser.fotoPerfil,
                correo: correo,
                fechaNacimiento: fechaNacimiento,
                fechaCreacion: MyUser.fechaCreacion,
                carrera: carrera,
                ciudad: ciudad, 
                departamento: departamento, 
                pais: pais,
                telefono: telefono,
                linkedin: linkedin,
                facebook: facebook,
                instagram: instagram,
                twitter: twitter,
                descripcion: descripcion,
                habilidades: savedHabilidades,
                idiomas: savedIdiomas,
                extracurricular: savedExtracurricular,
                experiencia: savedExperiencias,
                curriculumLink: MyUser.curriculumLink 
            }

        return updatedInfo;
      }

      const handleCancel = (e) =>{
        e.preventDefault();
        history.go(0);
      }

      const handleSaveProfile = (e) =>{
            e.preventDefault();
            const updatedInfo = getUpdatedInfo();
            dispatch(updateUserProfile(updatedInfo));
      }

      const handleUploadPhoto = (e) =>{
        e.preventDefault();
        document.querySelector('#newPhoto').click();
      }

      const handlePhotoChange = (e) =>{
        const photo = e.target.files[0];
        if(photo){
            dispatch(startUploadNewPhoto(photo, MyUser.uid));
        }
      }

      const handleUploadCurriculum = (e) =>{
          e.preventDefault();
          document.querySelector('#newCurriculum').click();
      }

      const handleCurriculumChange = (e) =>{
          const curriculum = e.target.files[0];
          if(curriculum){
              dispatch(startUploadNewCurriculum(curriculum, MyUser.uid))
          }
      }
    return (
        <form className = "flex flex-column">
            <div className = "flex flex-row flex-wrap mt-32">
                    <button
                    onClick = {handleCancel}
                    className="py-3 px-3 rounded-lg text-center bgSArosa shadow-xl m-3 cursor-pointer font-Poppins font-medium text-white" >
                        Cancelar
                    </button>
                    <button
                        onClick = {handleSaveProfile}
                        className="py-3 px-3 rounded-lg text-center bgSAazul shadow-xl m-3 cursor-pointer font-Poppins font-medium text-white">
                            Guardar cambios
                    </button>
            </div>
            <div className = "flex flex-row MyProfileScreen">
                <div className = "flex flex-col justify-center items-center ContenedoresPerfil UserInfo">
                    <div className = "relative">
                        <img src = {fotoPerfil}
                        alt = "Foto de Perfil"
                        className = "UserImage" />
                        <button className="absolute transition-all duration-200 opacity-80 bottom-0 right-0 bg-gray-500 text-white font-Poppins p-2 rounded-lg sm:rounded-xl hover:bg-gray-700 m-2"
                        onClick = {handleUploadPhoto} >
                            <img className = "uploadPhotoSize"
                                src = "https://res.cloudinary.com/socialacademy/image/upload/v1635524233/Social%20Academy%20Image/IconosRecursos/camera_1_rwhul2.png" 
                                alt = "camara" />
                        </button>
                        <input id = "newPhoto"
                            name = "photo"
                            type = "file"
                            className = "hidden"
                            accept = "image/*"
                            onChange = {handlePhotoChange}
                        />
                    </div>
                
                    <div className = "flex flex-col justify-center items-center" >
                        <div className = "MyName flex flex-row flex-column items-center">
                                <h3><b>Nombre Usuario</b></h3>
                                <input type = "text" name = "nombreUsuario" autoComplete = "none"
                                maxLength = "60"
                                value = {nombreUsuario}
                                onChange = {handleInputChange} 
                                className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputMyName" />
                        </div>
                            
                        <div className = "MyName flex flex-row flex-column items-center">
                                <h3><b>Carrera</b></h3>
                                <input type = "text" name = "carrera" autoComplete = "none"
                                maxLength = "100"
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
                                    onChange = {handleInputChange}
                                    className = "focus:outline-none" min = {minDateAllowed} max = {hoy} />
                                </div>
                            </div>

                            <div className = "MyInformation flex flex-row flex-wrap">
                                <h4><b>Ciudad:</b></h4>
                                <input type = "text" name = "ciudad" autoComplete = "none"
                                maxLength = "40"
                                value = {ciudad}
                                onChange = {handleInputChange} 
                                className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputMyInformation" />
                            </div>
                            <div className = "Departamento flex flex-row flex-wrap">
                                <h4><b>Departamento:</b></h4>
                                <input type = "text" name = "departamento" autoComplete = "none"
                                value = {departamento}
                                maxLength = "40"
                                onChange = {handleInputChange}  
                                className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputDepartamento" />
                            </div>
                            <div className = "MyInformation flex flex-row flex-wrap">
                                <h4><b>Pais:</b></h4>
                                <input type = "text" name = "pais" autoComplete = "none"
                                maxLength = "40" 
                                value = {pais}
                                onChange = {handleInputChange} 
                                className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputMyInformation" />
                            </div>
                            
                            <div className = "MyInformation flex flex-row flex-wrap">
                            <h4><b>Telefono:</b></h4>
                                <input type = "text" name = "telefono" autoComplete = "none"
                                maxLength = "20" 
                                value = {telefono}
                                onChange = {handleInputChange}
                                className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputMyInformation" />
                            </div>

                            <div className = "MyInformation flex flex-row flex-wrap">
                                <h4><b>Correo:</b></h4>
                                <input type = "text" name = "correo" autoComplete = "none"
                                maxLength = "100"
                                value = {correo}
                                onChange = {handleInputChange}  
                                className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputMyInformation" />
                            </div>
                        </div>
            
                        <div className = "justifyCenter">
                            {curriculumLink  && <div className = "flex justify-center">
                                    <a href = {curriculumLink}
                                        className = "BotonCurriculum" 
                                        target="_blank" 
                                        rel="noopener noreferrer">
                                        Ver Curriculum
                                    </a>
                                </div>
                            }
                            <input type="file"
                                id = "newCurriculum"
                                name = "curriculum" 
                                className="hidden" 
                                accept = ".pdf"
                                onChange = {handleCurriculumChange} />

                            <button className = "cursor-pointer focus:outline-none BotonCurriculum"
                            onClick = {handleUploadCurriculum} >
                                Subir Curriculum
                            </button>
                        </div>
                    </div>
                </div>

                    <div className = "flex flex-col justify-center AboutUser">
                        <div className = "Bio ContenedoresPerfil">
                            <h1 className = "TitulosPerfil"> Bio</h1>
                            
                                <textarea
                                    className="TextDescripcion bg-gray-100 ring-1 ring-gray-200 rounded-xl outline-none px-5 text-gray-700 resize-none"
                                    value = {descripcion}
                                    onChange = {handleInputChange} 
                                    name = "descripcion"
                                    maxLength = "450"
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
                                        value = {facebook}
                                        maxLength = "110"
                                        placeholder = "https://www.facebook.com/"
                                        onChange = {handleInputChange} 
                                        className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputRedSocial" />
                                    </div>

                                    <div className = "MySocialNetwork flex flex-row flex-wrap">
                                        <div className = "IndividualNetwork flex items-center justify-center text-gray-700 border-2 border-gray-700 hover:text-pink-600 hover:border-pink-600" >
                                            <i className="fab fa-instagram"></i>
                                        </div>
                                        <input type = "text" name = "instagram" autoComplete = "none"
                                        value = {instagram}
                                        maxLength = "110"
                                        placeholder = "https://www.instagram.com/"
                                        onChange = {handleInputChange}  
                                        className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputRedSocial" />
                                    </div>

                                    <div className = "MySocialNetwork flex flex-row flex-wrap">
                                        <div className = "IndividualNetwork flex items-center justify-center text-gray-700 border-2 border-gray-700 hover:text-blue-700 hover:border-blue-700" >
                                            <i className="fab fa-linkedin-in"></i>
                                        </div>
                                        <input type = "text" name = "linkedin" autoComplete = "none" 
                                        value = {linkedin}
                                        maxLength = "110"
                                        placeholder = "https://www.linkedin.com/"
                                        onChange = {handleInputChange} 
                                        className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputRedSocial" />
                                    </div>

                                    <div className = "MySocialNetwork flex flex-row flex-wrap">
                                        <div className = "IndividualNetwork flex items-center justify-center text-gray-700 border-2 border-gray-700 hover:text-blue-400 hover:border-blue-400" >
                                            <i className="fab fa-twitter"></i>
                                        </div>
                                        <input type = "text" name = "twitter" autoComplete = "none" 
                                        value = {twitter}
                                        maxLength = "110"
                                        placeholder = "https://www.twitter.com/"
                                        onChange = {handleInputChange} 
                                        className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputRedSocial" />
                                    </div>
                            </div>
                    </div>
                    
                    <div className = "UserLanguages ContenedoresPerfil">
                        <h1 className = "TitulosPerfil">Idiomas</h1>
                        <div className = "flex flex-row flex-wrap items-center AddLabel" >
                            <input type = "text" name = "inputIdiomas" autoComplete = "none"
                                value = {inputIdiomas}
                                onChange = {handleInputChange} 
                                maxLength = "50" 
                                className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputLabels" />
                            <button
                            onClick = {(event)=>{handleAdd(event, inputIdiomas, languages, setLanguages, 'language', 'inputIdiomas')}}
                            className="AddLabelButton inline-flex items-center justify-center mr-2 text-white transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-blue-900">
                            Agregar
                        </button>
                        </div>
                        {<div className = "flex flex-row flex-wrap my-4 Languages">
                        {
                            (languages && Array.isArray(languages) && (languages.length > 0) ) ? (
                            languages.map(language =>(
                                <div key = {language.id} className = "flex flex-row items-center justify-between UserLabel">
                                    <h4>{language.language}</h4>
                                    <button
                                        onClick = {()=>{handleRemove(language.id, languages, setLanguages)}}
                                        className="ButtonLabel inline-flex items-center border-2 rounded-full justify-center  ml-3 text-white transition-colors duration-150 focus:shadow-outline ">
                                            <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                ))) : (
                                    <NothingToShow dato = {"idiomas"} />
                                )
                        }
                    </div>}
                    </div>
                </div>

                    <div className = "flex flex-col justify-center UserExperience">
                        <div className = "UserCurricular ContenedoresPerfil">
                            <h1 className = "TitulosPerfil">Actividades Extracurriculares</h1>
                            <div className = "flex flex-row flex-wrap items-center mb-4 AddLabel" >
                                <input type = "text" name = "inputExtracurricular" autoComplete = "none"
                                    value = {inputExtracurricular}
                                    onChange = {handleInputChange}
                                    maxLength = "150"  
                                    className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputLabels" />
                                <button
                                onClick = {(event)=>{handleAdd(event, inputExtracurricular, activities, setActivities, 'activity', 'inputExtracurricular')}}  
                                className="AddLabelButton inline-flex items-center justify-center mr-2 text-white transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-blue-900">
                                    Agregar
                                </button>
                            </div>
                            {
                                (activities && Array.isArray(activities) && (activities.length > 0)) ? (
                                activities.map(activity =>(
                                    <div key = {activity.id} className = "flex flex-row justify-between items-center AbilityItem">
                                        <div className = "flex flex-row w-10/12 DatoExperiencia">
                                            <i className="fas fa-circle"></i>
                                            <h1>{activity.activity}</h1>
                                        </div>

                                        <button
                                        onClick = {()=>{handleRemove(activity.id, activities, setActivities)}}
                                        className="ButtonList inline-flex items-center border-2 rounded-full justify-center transition-colors duration-150 focus:shadow-outline ">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                ))) : (
                                    <NothingToShow dato = {"actividades"} />
                                )
                            }
                        </div>

                        <div className = "UserWork ContenedoresPerfil">
                            <h1 className = "TitulosPerfil">Experiencia laboral</h1>
                            <div className = "flex flex-row flex-wrap items-center mb-4 AddLabel" >
                                <input type = "text" name = "inputExperiencia" autoComplete = "none"
                                    value = {inputExperiencia}
                                    onChange = {handleInputChange}  
                                    maxLength = "150"
                                    className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputLabels" />
                                <button
                                onClick = {handleAddExperience}  
                                className="AddLabelButton inline-flex items-center justify-center mr-2 text-white transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-blue-900">
                                    Agregar
                                </button>
                            </div>
                            <div className = "flex flex-row my-4 FechaExperiencia">
                                <div className = "InputFecha">
                                    <h5>Fecha Inicio</h5>
                                    <input type = "date" name = "fechaInicio" 
                                    value = {fechaInicio}
                                    onChange = {handleInputChange}
                                    className = "focus:outline-none inputFechaExp" min = {minDateAllowed} max = {fechaFinal} max = {hoy} />
                                </div>
                                <div className = "InputFecha">
                                    <h5>Fecha Final</h5>
                                    <input type = "date" name = "fechaFinal" 
                                    value = {fechaFinal}
                                    onChange = {handleInputChange}
                                    className = "focus:outline-none inputFechaExp"
                                    min = {fechaInicio} max = {hoy} />
                                </div>
                            </div>
                            {
                                (experiences && Array.isArray(experiences) && (experiences.length > 0) ) ? (
                                    experiences.map(expLaboral =>(
                                        <div key = {expLaboral.id} className = "flex flex-row items-center my-4">
                                            <div className = "AbilityItem w-10/12" >
                                                <div className = "flex flex-row DatoExperiencia">
                                                    <i className="fas fa-circle"></i>
                                                    <h1>{expLaboral.descripcion}</h1>
                                                </div>
                                                <div className = "flex flex-row text-gray-700 PeriodoLaboral">
                                                    <i className="far fa-calendar-minus"></i>
                                                    <h4>{expLaboral.FechaInicio} - {expLaboral.FechaFinal}</h4>
                                                </div>
                                            </div>
                                            <button
                                            onClick = {()=>{handleRemove(expLaboral.id, experiences, setExperiences)}}
                                            className="ButtonList inline-flex items-center border-2 rounded-full justify-center transition-colors duration-150 focus:shadow-outline ">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    ))) : (
                                        <NothingToShow dato = {"experiencia laboral"} />
                                    )
                            }
                        </div>

                    <div className = "UserWork ContenedoresPerfil">
                        <h1 className = "TitulosPerfil">Habilidades</h1>
                        <div className = "flex flex-row flex-wrap items-center AddLabel" >
                            <input type = "text" name = "inputHabilidades" autoComplete = "none"
                                value = {inputHabilidades}
                                onChange = {handleInputChange} 
                                maxLength = "100" 
                                className = "bg-gray-100 ring-1 ring-gray-200 rounded-lg outline-none text-gray-700 InputLabels" />
                            <button
                            onClick = {(event)=>{handleAdd(event, inputHabilidades, abilities, setAbilities, 'ability', 'inputHabilidades')}}
                            className="AddLabelButton inline-flex items-center justify-center mr-2 text-white transition-colors duration-150 rounded-lg focus:shadow-outline">
                            Agregar
                        </button>
                        </div>
                        {<div className = "flex flex-row flex-wrap my-4 Abilities">
                            {
                                (abilities && Array.isArray(abilities) && (abilities.length > 0) ) ? (
                                    abilities.map(ability =>(
                                        <div key = {ability.id} className = "flex flex-row items-center justify-between UserLabel">
                                            <h4>{ability.ability}</h4>
                                            <button
                                                onClick = {()=>{handleRemove(ability.id, abilities, setAbilities)}}
                                                className="ButtonLabel inline-flex items-center border-2 rounded-full justify-center  ml-3 text-white transition-colors duration-150 focus:shadow-outline ">
                                                    <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    ))) : (
                                        <NothingToShow dato = {"habilidades"} />
                                    )
                            }
                        </div>}
                    </div>
                </div>
            </div>
        </form>
    )
}
