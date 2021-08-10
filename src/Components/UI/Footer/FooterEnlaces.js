import React from 'react';
import { NavLink } from 'react-router-dom';

export const FooterEnlaces = ({titulo, link}) => {
    return (
        <div className ="Enlace">
            <NavLink exact to = {link} className = "pointer">
                    {titulo}
            </NavLink>
        </div>
    )
}
