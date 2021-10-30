import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    const lastPath = localStorage.getItem('lastPath') || '/MyProfile/:userId';
    return (
        <Route { ...rest }
            component={ (props) => (
                ( !isAuth )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to={lastPath} /> )
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
