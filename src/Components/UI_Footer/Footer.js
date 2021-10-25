import React from 'react';
import { FooterEnlaces } from './FooterEnlaces';
import { FooterSocialItem } from './FooterSocialItem';

import moment from 'moment';

export const Footer = () => {
    const socialMedia = [
        {path: 'fab fa-facebook-f', enlace: 'https://www.facebook.com/Social-Academy-100105982404254'},
        {path: 'fab fa-twitter', enlace: 'https://twitter.com/SocialAcademyNi'},
        {path: 'fab fa-instagram', enlace: 'https://www.instagram.com/_socialacademy/'},
        {path: 'fab fa-youtube', enlace: 'https://www.youtube.com/channel/UC97UE9cK8nNr0HzJ2MOz5Rw'}
    ];

    const enlaces = [
        {titulo: 'Inicio', link: '/Inicio'},
        {titulo: 'Foros', link: '/Foros'},
        {titulo: 'About', link: '/About'},
        {titulo: 'Login', link: '/Login'}
    ];

    const year = moment().year();
    return (
        <footer>
            <img
            className = "footer__Logo"
            src = {`./assets/ICONS/WHITEACADEM_Y2.svg`}
            alt = "Social Academy"/>

            <div className = "Enlaces flex-row">
                {
                    enlaces.map((enlace, index) => (
                        <FooterEnlaces
                        key = {index}
                        titulo = {enlace.titulo}
                        link = {enlace.link} />
                    ))
                }
            </div>

            <div className = "SocialBar flex-row">
                {
                    socialMedia.map((media, index) =>(
                        <FooterSocialItem
                        key = {index}
                        path = {media.path}
                        enlace = {media.enlace}/>
                    ))
                }
            </div>

            <h1>
                Social Academy © {year} All rights reserved
            </h1>
        </footer>
    )
}
