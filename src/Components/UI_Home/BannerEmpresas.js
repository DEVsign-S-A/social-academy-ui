import React from 'react';
import { Link } from 'react-router-dom';

export const BannerEmpresas = () => {
    return (
        <div className = "BannerPasantes">
            <div className = "DescripcionBannerPasantes">
                <h1> ¿Necesitas pasantes para tu empresa?</h1>
                <h2>Publica tu oferta y encuentra a los estudiantes más calificados</h2>
                <div className="contenedorBotonPasantes">
                    <a className = "btnPasantes pointer" 
                        href = "https://social-academy-enterprise.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            Unete Ahora
                    </a>
                </div>
            </div>
            <img src ={`https://res.cloudinary.com/socialacademy/image/upload/v1630603813/Social%20Academy%20Image/HomeScreen/indexPasantes_jpk3es.png`} alt = "Banner Empresas"/>
        </div>
    )
}
