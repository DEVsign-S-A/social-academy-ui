import React from 'react'

export const FooterSocialItem = ({path, enlace}) => {
    return (
        <div className ="pointer media">
            <a href = {enlace} 
                target="_blank" 
                rel="noopener noreferrer">
                    <i className={path}></i>
            </a>
        </div>
    )
}
