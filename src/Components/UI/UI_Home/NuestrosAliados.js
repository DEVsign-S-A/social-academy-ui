import React from 'react';

export const NuestrosAliados = () => {
    const aliados = [
        {path: `./assets/HomeScreen/Aliados/INATEC.png`},
        {path: `./assets/HomeScreen/Aliados/LogoCNU.png`},
        {path: `./assets/HomeScreen/Aliados/MEFCCA.png`},
        {path: `./assets/HomeScreen/Aliados/CENTNACIN.png`}      
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
