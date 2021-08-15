import React from 'react'

export const SocialItems = ({path, enlace}) => {
    return (
        <div className ="hover:text-gray-700">
            <a href = {enlace} 
                target="_blank" 
                rel="noopener noreferrer">
                    <i className={path}></i>
            </a>
        </div>
    )
}