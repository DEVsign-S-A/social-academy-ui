import React from 'react';
import { FooterEnlaces } from './FooterEnlaces';
import { FooterSocialItem } from './FooterSocialItem';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import moment from 'moment';

export const Footer = () => {
    const {uid} = useSelector(state => state.auth);
    let enlaces = [];

    if(!uid){
        enlaces = [
            {titulo: 'Inicio', link: '/'},
            {titulo: 'Foros', link: '/Foros'},
            {titulo: 'About', link: '/About'},
            {titulo: 'Login', link: '/Login'}
        ];
    }else{
        enlaces = [
            {titulo: 'Foros', link: '/Foros'},
            {titulo: 'Pasantias', link: '/Pasantias'},
            {titulo: 'Cursos', link: '/Cursos'},
            {titulo: 'Recursos', link: '/Recursos'},
            {titulo: 'Contactanos', link: '/Contactanos'}
        ]
    }

    const socialMedia = [
        {path: 'fab fa-facebook-f', enlace: 'https://www.facebook.com/Social-Academy-100105982404254'},
        {path: 'fab fa-twitter', enlace: 'https://twitter.com/SocialAcademyNi'},
        {path: 'fab fa-instagram', enlace: 'https://www.instagram.com/_socialacademy/'},
        {path: 'fab fa-youtube', enlace: 'https://www.youtube.com/channel/UC97UE9cK8nNr0HzJ2MOz5Rw'}
    ];

    const year = moment().year();
    return (
        <footer>
            <img
            className = "footer__Logo"
            src = {`https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/WHITEACADEM_Y2.svg?alt=media&token=93f9dbf5-c0be-4a3f-8bfc-2130f177b110`}
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

            <div className = "RightsAndConditions">
                <Link to = "/TermsAndConditions" >
                <h1>
                Terminos y condiciones
                </h1>
                </Link>

                <h1>
                    Social Academy © {year} All rights reserved
                </h1>
            </div>       
        </footer>
    )
}
