import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({
    isAuth,
    component: Component,
    ...rest

}) => {

    return (
        <Route {...rest}
            component={ (props) => (
                (isAuth) 
                    ? ( <Component {...props} /> )
                    : ( <Redirect to='/login' /> )
            )}
        
        />
    )
}

PrivateRoute.propTypes ={
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}