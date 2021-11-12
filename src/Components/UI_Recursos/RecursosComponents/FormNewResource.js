import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { areaEstudio, tipoArchivo } from '../../../data/dataSelect';
import { useForm } from '../../../Hook/useForm';
import { uploadNewDocument, uploadNewVideo } from '../../../Redux/Actions/resourcesActions';
import { CustomInputFile } from './CustomInputFile';
import { SelectType } from './SelectType';

export const FormNewResource = () => {

    const {tipoDoc} = useSelector(state => state.doc );
    const {uid, nombreUsuario, fotoPerfil} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [file, setFile] = useState();

    const fechaSubida = moment().format("YYYY-MM-DD");

    const [input, setInput] = useState({
        titulo: '',
        descripcion: '',
        categoria: 'Programacion',
        linkYouTube: ''
    });

    const [formValues, handleInputChange, reset] = useForm(input);
    const {titulo, descripcion, categoria, linkYouTube} = formValues;
    

    const validateYouTubeLink = (link) =>{
        const p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if(link.match(p)){
            return true;
        }
        return false;
    };

    const handleYouTubeLink = () =>{
        const resourceData = {
            uid,
            nombreUsuario,
            fotoPerfil,
            titulo,
            descripcion,
            categoria,
            fechaSubida,
            tipo: tipoDoc,
            link: linkYouTube
        }

        return resourceData;
    }

    const handleFileInfo = () =>{
        const resourceData = {
            uid,
            nombreUsuario,
            fotoPerfil,
            titulo,
            descripcion,
            categoria,
            fechaSubida,
            tipo: tipoDoc
        }

        return resourceData;
    }

    const handleFileChange = (e) =>{
        const fileUploaded = e.target.files[0];
        setFile(fileUploaded);
    }

    const handleUploadFile = (e) =>{
        e.preventDefault();
        document.querySelector('#newFile').click();
    }

    const alertError = (message) =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message
          })
    }
    const uploadingYouTubeLink = () =>{
        const isValidate = validateYouTubeLink(linkYouTube);
        if(isValidate === true ){
            const infoVideo = handleYouTubeLink();
            dispatch(uploadNewVideo(infoVideo));
            reset();
        }else{
            alertError('Ingrese un enlace de YouTube válido');
        }
    }

    const uploadingFile = () =>{
        if(file){
            const fileInfo = handleFileInfo();
            dispatch(uploadNewDocument(fileInfo, file));
            reset();
            setFile('');
        }else{
            alertError('Agregue un archivo PDF');
        }
    }

    const handleUploadResource = (e) =>{
        e.preventDefault();
        if(titulo && descripcion){
            if(tipoDoc === "Video"){
                uploadingYouTubeLink();
            }else if(tipoDoc === "Documento"){
                uploadingFile();
            }
        }else{
            alertError('Rellene todos los campos');
        }
    }

    return (
            <div className = "flex justify-center" >
                <form className = "rounded-lg bg-gray-50 mt-10 mx-6 pb-8 shadow-xl ring-1 ring-gray-200 FormularioANR"
                // onSubmit={} 
                >
                    <div className="my-2 py-2">
                        <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                        Título
                        </p>
                        <input
                        required={true}
                        className="mx-8 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-sm sm:text-base text-gray-700"
                        type="text"
                        name = "titulo"
                        value = {titulo}
                        onChange = {handleInputChange}
                        />
                    </div>

                    <div className="my-2 py-2">
                        <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                        Descripcion
                        </p>
                        <div className="flex justify-between">
                            <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                                Explica a los usuarios de que trata el recurso compartido
                            </p>
                        </div>

                        <textarea
                        className="mx-8 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-b-xl rounded-t-none py-2 outline-none px-5 font-Poppins text-sm sm:text-base text-gray-700 h-48 resize-none"
                        required={true}
                        name = "descripcion"
                        value = {descripcion}
                        onChange = {handleInputChange}
                        ></textarea>
                    </div>

                    <div className = "flex flex-row flex-wrap justify-around my-2 py-2">
                        <div className="ContenedoresSelect">
                            <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                            Categoria
                            </p>
                            <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                            Selecciona el area de estudio del recurso
                            </p>
                            <select
                                name = "categoria"
                                onChange = {handleInputChange}
                                className = "pointer bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-sm sm:text-base text-gray-700">
                            {
                                    areaEstudio.map((option, index) => (
                                        <option key = {index} value= {option} >{option}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="ContenedoresSelect">
                            <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                            Tipo
                            </p>
                            <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                            Selecciona el tipo de archivo del recurso
                            </p>

                            <SelectType valor = {tipoArchivo} />
                        </div>
                    </div>

                    {
                        (()=>{
                            switch (tipoDoc) {
                                case 'Documento':
                                   return (<>
                                        <input type="file" 
                                        id = "newFile"
                                        name = "file"
                                        onChange = {handleFileChange}
                                        className="hidden" accept = ".pdf" required = {true} />

                                        <div className = "my-4 py-2 flex justify-center items-center"
                                        onClick = {handleUploadFile} >
                                            <div className="md:w-4/12 w-3/12 flex cursor-pointer relative border-dotted md:h-36 h-28 rounded-lg border-2 border-blue-700 bg-gray-100 justify-center items-center">
                                                <div className="absolute flex flex-col items-center">
                                                    <i className="fa fa-folder-open fa-3x text-blue-700"></i> 
                                                    <span className="block text-gray-400 font-normal">Subir Archivo</span> 
                                                </div>      
                                            </div>
                                        </div>
                                   </>);
                                case 'Video':
                                    return(<>
                                        <div className = "my-2 py-2">
                                            <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">
                                                Enlace al video
                                            </p>
                                            <div className="flex justify-between">
                                                <p className="text-gray-400 font-Poppins font-light text-sm sm:text-base ml-6 pb-2">
                                                    Escribe el enlace al video de YouTube que quieres compartir
                                                </p>
                                            </div>
                                            <input
                                                required={true}
                                                className="mx-8 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-sm sm:text-base text-gray-700"
                                                type="text"
                                                name = "linkYouTube"
                                                value = {linkYouTube}
                                                onChange = {handleInputChange}
                                                    />
                                        </div>
                                    </>);
                                case 'Recurso':
                                    return (<CustomInputFile archivoPermitido = {".zip, .rar, .7zip"} />);
                                default:
                                    return (<CustomInputFile archivoPermitido = {".pdf"} />);
                            }
                        })
                        ()
                    }

                    <button
                        className="py-3 px-3 rounded-lg text-center bg-BlueSocial shadow-xl m-5 cursor-pointer font-Poppins font-medium text-white" 
                        onClick = {handleUploadResource} >
                            Publicar
                    </button>
                </form>
            </div>
    )
}
