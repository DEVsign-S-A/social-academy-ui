import React, { useEffect } from 'react';
import { Footer } from '../Components/UI_Footer/Footer';

export const ConditionsScreen = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <div className = "ContenedorTerminos" >
                <div className = "BannerTerminos">
                    <div className = "TituloTerminos" >
                        <h1>
                            Términos y condiciones
                        </h1>
                        <h2>
                            Conoce tus derechos y responsabilidades vinculados al uso Social Academy
                        </h2>
                    </div>
                    <img src = "https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/BannerTerms.jpg?alt=media&token=099c35ca-0efc-4909-9c9c-b44b3c8a230b"
                    alt = "Terminos y condiciones" />
                </div>
                <div className = "TerminosYCondiciones">
                    <p>
                        Para cumplir nuestra misión de conectar estudiantes con emprendedores para crear con éxito lazos de mutualismo debemos retribuir la confianza depositada por los usuarios en Social Academy. Por esto, luchamos por fomentarla actuando de forma abierta y transparente. Recomendamos a los usuarios que lean nuestras condiciones de uso y la política de privacidad.
                    </p>
                    
                    <h2>Propiedad Intelecutal</h2>

                    <p>
                        Entre tú y la plataforma, tú eres el propietario del contenido y de la información que proporciones o publiques en los servicios, y solo otorgas a Social Academy, y a sus distintas plataformas el derecho intransmisible para usar, copiar, distribuir y publicar la información y el contenido que nos proporciones a través de nuestros servicios o los servicios de terceros a los que nos brindes acceso, sin ningún consentimiento adicional, notificación o compensación para ti o terceros.
                    </p>

                    <h2>
                        Derechos y limitaciones
                    </h2>

                    <p>
                        Puedes retirarnos los derechos para un contenido publicado borrando dicho contenido de la plataforma, o cerrando tu cuenta. No obstante, debes tener en cuenta las siguientes consideraciones:

                        <li><i class="far fa-circle"></i>Una vez que hayas compartido contenido con otras personas a través de nuestra plataforma y estas lo hayan copiado. Serás incapaz de forzar a estas personas a borrar el contenido.</li>
                        <li><i class="far fa-circle"></i>Luego de que borres el contenido este será visible dentro de la plataforma por un corto período de tiempo mientras los cambios almacenados llegan a todos los usuarios.</li>
                    </p>

                    <p>
                        Social Academy no incluirá publicada pagada dentro del contenido que compartas, pero nos reservamos el derecho, sin indemnización a ti, ni a terceros, de incluir contenido publicitario, de forma no invasiva, cerca del contenido que compartes. De igual manera, nos reservamos, el derecho de utilizar tus patrones de comportamiento dentro de la plataforma para recomendarte publicidad a tu medida, sin comprometer tu privacidad.
                    </p>

                    <p>
                        Necesitamos tu consentimiento para publicar tu contenido en otra plataforma ajena a Social Academy. Sin embargo, nos reservamos, al realizar una publicación no nos hacemos responsables del uso que den los otros usuarios de la plataforma al contenido. Si consideras mal uso o plagio, podrás actuar basado en las leyes nicaragüenses. Además, el contenido podrá ser observado a través de los motores de búsqueda por usuarios ajenos a la plataforma, redirigiéndolos a esta. 
                    </p>
                        
                    <p>
                        Nos reservamos el derecho de editar y realizar cambios en el formato de tu contenido (incluye traducirlo o transcribirlo, modificar el tamaño o el tipo de archivo), comprometiéndonos a no modificar ni el significado ni la intención original del contenido compartido.
                    </p>
                         
                    <p>
                        Tú eres el propietario de todo el contenido que publiques dentro de Social Academy, la plataforma únicamente tiene derechos, no exclusivos, de distribución. Por lo tanto, eres el responsable legal del contenido que publicas. También, nos reservamos el derecho de borrar contenido de la plataforma sin consideramos que este no corresponde a los valores éticos y morales de la plataforma.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}
