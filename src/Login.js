import React from 'react';
import LoginForm from './LoginForm';
import './Login.css';

const Login = ({login}) => {
    return (
        <div className="Login">
            <div className="Login-container">
                <h1>Log In</h1>
                <p>Start searching millions of jobs now!</p>
            <LoginForm login={login}/>
            </div>
        </div>
    )
}

export default Login;