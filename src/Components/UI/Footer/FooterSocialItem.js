import React from 'react'

export const FooterSocialItem = ({path, enlace}) => {
    return (
        <div className ="pointer media">
            <a href = {enlace}><i className={path}></i></a>
        </div>
    )
}
