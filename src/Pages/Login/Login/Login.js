import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const { googleHandler } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const location_uri = location?.state?.from || "/home"
    const googleLoginHandler = () => {
        googleHandler()
            .then(result => {
                history.push(location_uri)
            })

    }
    return (
        <div>
            <button onClick={googleLoginHandler}>Google Sign In</button>
        </div>
    );
};

export default Login;