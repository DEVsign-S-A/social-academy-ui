import React from 'react';
import { FooterEnlaces } from './FooterEnlaces';
import { FooterSocialItem } from './FooterSocialItem';

export const Footer = () => {
    const socialMedia = [
        {id: 1, path: 'fab fa-facebook-f', enlace: 'https://www.facebook.com/'},
        {id: 2, path: 'fab fa-twitter', enlace: 'https://www.twitter.com/'},
        {id: 3, path: 'fab fa-instagram', enlace: 'https://www.instagram.com/'},
        {id: 4, path: 'fab fa-youtube', enlace: 'https://www.youtube.com/'}
    ];

    const enlaces = [
        {id: 1, titulo: 'Inicio', link: '/Inicio'},
        {id: 2, titulo: 'Foros', link: '/Foros'},
        {id: 3, titulo: 'About', link: '/About'},
        {id: 4, titulo: 'Login', link: '/Login'}
    ];
    return (
        <footer>
            <img
            className = "footer__Logo"
            src = {`./assets/Logos/LogoLetrasBlancas.png`}
            alt = "Social Academy"/>

            <div className = "Enlaces flex-row">
                {
                    enlaces.map(enlace => (
                        <FooterEnlaces
                        key = {enlace.id}
                        titulo = {enlace.titulo}
                        link = {enlace.link} />
                    ))
                }
            </div>

            <div className = "SocialBar flex-row">
                {
                    socialMedia.map(media =>(
                        <FooterSocialItem
                        key = {media.id}
                        path = {media.path}
                        enlace = {media.enlace}/>
                    ))
                }
            </div>

            <h1>
                Social Academy © 2021 All rights reserved
                
            </h1>
        </footer>
    )
}
