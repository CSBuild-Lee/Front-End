import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
        localStorage.getItem('token') ? (
            <Component {...props} />
        ) : (
            // Specify redirect here, just using app to get rid of an error
            <App />
        )
        }
    />
);

export default ProtectedRouter;