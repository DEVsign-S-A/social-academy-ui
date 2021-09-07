import React from 'react';

export const NuestrosAliados = () => {
    const aliados = [
        {path: `https://res.cloudinary.com/socialacademy/image/upload/v1630442077/Social%20Academy%20Image/Aliados/INATEC_ncynrc.png`},
        {path: `https://res.cloudinary.com/socialacademy/image/upload/v1630442079/Social%20Academy%20Image/Aliados/LogoCNU_kxmlwo.png`},
        {path: `https://res.cloudinary.com/socialacademy/image/upload/v1630442077/Social%20Academy%20Image/Aliados/MEFCCA_bfo9yq.png`},
        {path: `https://res.cloudinary.com/socialacademy/image/upload/v1630442077/Social%20Academy%20Image/Aliados/CENTNACIN_mnhdht.png`}      
    ];
    return (
        <div className = "IndexAliados">
            <h1>Nuestros Aliados</h1>
            <div className = "ContenedorAliados">
                {
                    aliados.map((aliado, index) =>(
                        <div key = {index} className = "AliadosIndividuales">
                            <img src = {aliado.path} alt ="Empresa Aliada" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
