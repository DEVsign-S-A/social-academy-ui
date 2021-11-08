import React from 'react';

export const ItemBeneficios = ({dato, descripcion}) => {
    return (
        <div className="descripcionBeneficiosIndividuales">
            <img src={`https://res.cloudinary.com/socialacademy/image/upload/v1630603812/Social%20Academy%20Image/HomeScreen/iconoBeneficios_aez2jz.png`} alt="iconos"/>
            <h3
                className='text-white font-semibold'
            >{dato}<br/>{descripcion}</h3>
        </div>
    )
}
