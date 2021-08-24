import React from 'react';
import { Link } from 'react-router-dom';

export const BannerEmpresas = () => {
    return (
        <div className = "BannerPasantes">
            <div className = "DescripcionBannerPasantes">
                <h1> ¿Necesitas pasantes para tu empresa?</h1>
                <h2>Publica tu oferta y encuentra a los estudiantes más calificados</h2>
                <div class="contenedorBotonPasantes">
                    <Link className = "btnPasantes pointer" 
                    to = "/Login">
                        Unete Ahora
                    </Link>
                </div>
            </div>
            <img src ={`./assets/HomeScreen/indexPasantes.png`} alt = "Banner Empresas"/>
        </div>
    )
}
