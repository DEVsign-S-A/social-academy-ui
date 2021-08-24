import React from 'react';
import { Link } from 'react-router-dom';

export const CardPremium = ({titulo, precio, descripcion = []}) => {
    return (
        <div className = "CardsPremiumIndividuales">
            <div className = "IndividualesSuperior">
                <div className = "IndividualesLinea">
                </div>
                <div className = "IndividualesTitulo">
                    <h1>
                        Premium<br/>{titulo}
                    </h1>
                </div>
                <img className = "CardSemicirculo" src = {`./assets/HomeScreen/Cards/ArcoCardPremium.png`} alt = "Arco Rosa" />
            </div>
            <div className = "IndividualesTextoPrecio">
                    <div className = "TextoPrecio1">
                        <h1>
                            $
                        </h1>
                    </div>
                    <div className="TextoPrecio2">
                        <h2>
                            {precio}
                        </h2>
                    </div>
                    <div className="TextoPrecio3">
                        <h3>
                            /M
                        </h3>
                    </div>
            </div>
            <div className = "IndividualesDescripcion">
                {
                    descripcion.map((beneficio, index) =>(
                        <div key = {index} className = "IndividualesPaquete">
                            <i className="fas fa-check-circle"></i>
                            <h4>{beneficio}</h4>
                        </div>
                    ))
                }
            </div>
            <div className = "IndividualesInferior">
                <div className = "InferiorImagen">
                    <img src = {`./assets/HomeScreen/Cards/SemicirculoCardPremium.png`} alt = "Semicirculo Rosa" />
                </div>
                <div className = "InferiorBoton">
                    <Link to = "/Login"
                        className = "BotonPremium pointer">
                        Obtener
                    </Link>
                </div>
            </div>
        </div>
    )
}
