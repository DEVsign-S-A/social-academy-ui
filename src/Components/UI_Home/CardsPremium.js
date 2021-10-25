import React from 'react';
import { Link } from 'react-router-dom';
import { CardPremium } from './HomeComponents/CardPremium';

export const CardsPremium = () => {
    const beneficiosEstudiantes = [
        "Acceso ilimitado a documentacion",
        "Obtén 1 curso de regalo",
        "Cursos y documentación exclusiva",
        "Soporte 24/7",
        "Acceso a webinars exclusivos"
    ];

    const beneficiosEmpresas = [
        "Anunciate por medio de Banners",
        "Selecciona a que perfiles quieres llegar",
        "Publica ofertas de manera ilimitada",
        "Soporte 24/7",
        "Tus ofertas apareceran como destacadas"
    ];

    const infoCardEstudiante = [
        {titulo: "Estudiante", precio: 12, descripcion: beneficiosEstudiantes},
        {titulo: "Empresas", precio: 45, descripcion: beneficiosEmpresas}
    ]
    return (
        <div className = "SeccionPrecios">
            <div className = "PreciosTexto">
                <h2>Nuestros planes y precios</h2>
                <Link to = "/Login"
                    className = "BotonUnete pointer">
                        Registrate Gratis
                </Link>
            </div>

            <div className = "CardsPremium">
                {
                    infoCardEstudiante.map((card, index) =>(
                        <CardPremium key = {index} titulo = {card.titulo} precio = {card.precio} descripcion = {card.descripcion} />
                    ))
                }
            </div>
        </div>
    )
}
