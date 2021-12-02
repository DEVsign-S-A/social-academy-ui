import React from 'react';

export const AbilityList = ({dato, FechaInicio, FechaFinal}) => {
    return (
        <div className = "AbilityItem">
            <div className = "flex flex-row DatoExperiencia">
                <i className="fas fa-circle"></i>
                <h1>{dato}</h1>
            </div>
            {(FechaInicio)&&<div className = "flex flex-row text-gray-700 PeriodoLaboral">
                <i className="far fa-calendar-minus"></i>
                <h4>{FechaInicio} - {FechaFinal}</h4>
            </div>
            }
        </div>
    )
}
