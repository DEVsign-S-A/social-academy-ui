import React from 'react';

export const ItemBeneficios = ({dato, descripcion}) => {
    return (
        <div className="descripcionBeneficiosIndividuales">
            <img src={`./assets/HomeScreen/iconoBeneficios.png`} alt="iconos"/>
            <h3>{dato}<br/>{descripcion}</h3>
        </div>
    )
}
